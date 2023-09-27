import type { CheerioAPI } from "cheerio"
import * as cheerio from "cheerio"

import type { CharacterNameClean, ICharacterTableRow } from "./types"
import { Processor } from "./Processor"

// FIXME: replace `U+ff08 "（"`
export class Parser extends Processor {

    public $: CheerioAPI
    public results: any[]
    public currentSection: string

    constructor(character: CharacterNameClean) {
        super(character)
        this.results = []
    }

    public async parse() {
        const html = await this.htmlFilePath().read()
        this.$ = cheerio.load(html)
        const $table = this.$("#framearea > div > table")?.first()
        if (!$table) {
            throw new Error(`unable to parse html for ${this.character}`)
        }
        // console.log($table.html())
        const rows = $table.find("tbody tr")
        // console.log(rows.length)
        for (const row of rows.toArray()) {
            this.processRow(row)
        }
        await this.jsonFilePath().writeJSON(this.results)
    }

    private processRow(el: cheerio.Element) {
        const $el = this.$(el)
        const cells = $el.find("td") // should be 1 or 15
        if (cells.length == 1) {
            this.currentSection = cells.first().text().trim()
            console.log(this.currentSection)
            return
        }
        const row: ICharacterTableRow = {
            section:     this.currentSection,
            "Move Name": this.col_1_moveName(cells[0]),
        }
        this.results.push(row)
    }

    private col_1_moveName(cell: cheerio.Element) {
        const $cell = this.$(cell)
        const moveName = $cell.find("span").first().text().trim()
        return moveName
    }
}
