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
            "Frame.Start-up": this.col_2_frame_startup(cells[1]),
        }
        this.results.push(row)
    }

    private col_1_moveName(cell: cheerio.Element) {
        const $cell = this.$(cell)
        const moveName = $cell.find("span").first().text().trim()
        return moveName
    }

    private col_2_frame_startup(cell: cheerio.Element) {
        const $cell = this.$(cell)
        const startup_string = $cell.text().trim()
        const startup_int = tryParseInt(startup_string)
        return startup_int
    }
}

const tryParseInt = (str: string): number | null => {
    const tried = parseInt(str)
    return isNaN(tried) ? null : tried
}

const IMG_SRC_NAMES = {
    "/6/assets/images/common/controller/icon_punch_l.png": "LP",
    "/6/assets/images/common/controller/icon_kick_l.png":  "LK",
    "/6/assets/images/common/controller/icon_punch_m.png": "MP",
    "/6/assets/images/common/controller/icon_kick_m.png":  "MK",
    "/6/assets/images/common/controller/icon_punch_h.png": "HP",
    "/6/assets/images/common/controller/icon_kick_h.png":  "HK",

    "/6/assets/images/common/controller/icon_punch.png": "P",
    "/6/assets/images/common/controller/icon_kick.png":  "K",

    "/6/assets/images/common/controller/key-d.png":  "2",
    "/6/assets/images/common/controller/key-r.png":  "6",
    "/6/assets/images/common/controller/key-l.png":  "4",
    "/6/assets/images/common/controller/key-dr.png": "3",
    "/6/assets/images/common/controller/key-dl.png": "1",

    "/6/assets/images/common/controller/key-plus.png": "+",
}
