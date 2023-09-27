import type { CheerioAPI } from "cheerio"
import * as cheerio from "cheerio"

import type { CharacterNameClean, ICharacterTableRow } from "./types"
import { Processor } from "./Processor"

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
            this.processSingle(row)
        }
    }

    private processSingle(el: cheerio.Element) {
        const $el = this.$(el)
        const cells = $el.find("td") // should be 1 or 15
        if (cells.length == 1) {
            this.currentSection = cells.first().text().trim()
            console.log(this.currentSection)
            return
        }
        // console.log(cells.length)
        debugger
    }
}
