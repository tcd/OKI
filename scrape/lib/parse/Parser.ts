import type { CheerioAPI } from "cheerio"
import * as cheerio from "cheerio"

import {
    Processor,
    tryParseInt,
    type CharacterNameClean,
    type ICharacterTableRow,
    TInput,
} from "../util"

// FIXME: replace `U+ff08 "（"`
// FIXME: replace `U+ff05 "％"`
export class Parser extends Processor {

    public $: CheerioAPI
    public results: any[]
    public currentSection: string

    constructor(character: CharacterNameClean) {
        super(character)
        this.results = []
    }

    public async parse() {
        const html = await this.htmlFilePath.read()
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
        await this.jsonFilePathV1.writeJSON(this.results)
    }

    private processRow(el: cheerio.Element) {
        const $el = this.$(el)
        const cells = $el.find("td") // should be 1 or 15
        if (cells.length == 1) {
            this.currentSection = cells.first().text().trim()
            return
        }
        const row: ICharacterTableRow = {
            section:                               this.currentSection,
            "Move Name":                           this.col_1_moveName(cells[0]),
            input:                                 this.col_1_input(cells[0]),
            "Frame.Start-up":                      this.col_2_frame_startup(cells[1]),
            "Frame.Active":                        this.col_3_frame_active(cells[2]),
            "Frame.Recovery":                      this.col_4_frame_recovery(cells[3]),
            "Recovery.Hit":                        this.col_5_recovery_hit(cells[4]),
            "Recovery.Block":                      this.col_6_recovery_block(cells[5]),
            "Cancel":                              this.col_7_cancel(cells[6]),
            "Damage":                              this.col_8_damage(cells[7]),
            "Combo Scaling":                       this.col_9_comboScaling(cells[8]),
            "Drive Gauge Increase.Hit":            this.col_10_drive_increase(cells[9]),
            "Drive Gauge Decrease.Block":          this.col_11_drive_decrease_block(cells[10]),
            "Drive Gauge Decrease.Punish Counter": this.col_12_drive_decrease_punish(cells[11]),
            "Super Art Gauge Increase":            this.col_13_super_art(cells[12]),
            "Properties":                          this.col_14_properties(cells[13]),
            "Miscellaneous":                       this.col_15_misc(cells[14]),
        }
        this.results.push(row)
    }

    // =========================================================================
    // Shared
    // =========================================================================

    private col__string(cell: cheerio.Element, useNull = false) {
        const $cell = this.$(cell)
        const string = $cell.text().trim()
        if (useNull) {
            return (string == "") ? null : ""
        }
        return string
    }

    private col__int(cell: cheerio.Element) {
        const $cell = this.$(cell)
        const string = $cell.text().trim()
        const int = tryParseInt(string)
        return int
    }

    // =========================================================================
    // Specific Columns
    // =========================================================================

    private col_1_moveName(cell: cheerio.Element) {
        const $cell = this.$(cell)
        const moveName = $cell.find("span").first().text().trim()
        return moveName
    }

    private col_2_frame_startup(cell: cheerio.Element) {
        return this.col__int(cell)
    }

    private col_3_frame_active(cell: cheerio.Element) {
        const $cell = this.$(cell)
        // @ts-ignore: next-line
        const value: string = $cell.text().trim().replaceAll(/\s*\n\s*/g, ",").replaceAll(/\s*,\s*/g, ", ")
        if (value == "") { return null }
        // if (!value.includes(",") || value.includes(ASTERISK_I_GUESS)) {
        //     const onlyNumbers = /[\d-]+/
        //     if (onlyNumbers.test(value)) {
        //         const [
        //             activeStart,
        //             activeEnd
        //         ] = value.split("-")
        //         const activeStartInt = parseInt(activeStart) - 1
        //         const activeEndInt = parseInt(activeEnd)
        //         const totalActive = activeEndInt - activeStartInt
        //         return totalActive
        //         // return tryParseInt(string)
        //     } else {
        //         // TODO: handle these moves
        //         debugger
        //     }
        // }
        return value
    }

    private col_4_frame_recovery(cell: cheerio.Element) {
        const $cell = this.$(cell)
        const string = $cell.text().trim()
        const onlyNumbers = /[\d-]+/
        if (onlyNumbers.test(string)) {
            return tryParseInt(string)
        }
        return string
    }

    private col_5_recovery_hit(cell: cheerio.Element) {
        const $cell = this.$(cell)
        const string = $cell.text().trim()
        const int = tryParseInt(string)
        return int == null ? (string == "" ? null : string) : int
        // return string
    }

    private col_6_recovery_block(cell: cheerio.Element) {
        return this.col__int(cell)
    }

    private col_7_cancel(cell: cheerio.Element) {
        return this.col__string(cell)
    }

    private col_8_damage(cell: cheerio.Element) {
        const $cell = this.$(cell)
        const string = $cell.text().trim()
        const int = tryParseInt(string)
        // FIXME: process conditional damage
        return int == null ? (string == "" ? null : string) : int
    }

    // FIXME: parse out individual values
    private col_9_comboScaling(cell: cheerio.Element) {
        const $cell = this.$(cell)
        const $listElements = $cell.find("li")
        if ($listElements.length == 0) {
            return null
        }
        const results: any[] = []
        for (const li of $listElements.toArray()) {
            results.push(this.$(li).text().trim())
        }
        return results.join(", ")
    }

    private col_10_drive_increase(cell: cheerio.Element) {
        return this.col__int(cell)
    }

    private col_11_drive_decrease_block(cell: cheerio.Element) {
        return this.col__int(cell)
    }

    private col_12_drive_decrease_punish(cell: cheerio.Element) {
        return this.col__int(cell)
    }

    private col_13_super_art(cell: cheerio.Element) {
        return this.col__int(cell)
    }

    // FIXME: split values into array
    private col_14_properties(cell: cheerio.Element) {
        return this.col__string(cell, true)
    }

    // FIXME: convert break tags to newlines
    private col_15_misc(cell: cheerio.Element) {
        return this.col__string(cell)
        // const $cell = this.$(cell)
    }

    // =========================================================================
    // Input
    // =========================================================================

    private col_1_input(cell: cheerio.Element) {
        const $cell = this.$(cell)
        const images = $cell.find("img")
        const inputs: TInput[] = []

        for (const image of images.toArray()) {
            const src = image.attribs["src"].trim()
            const input = IMG_SRC_NAMES[src]
            if (input == null) {
                console.log(src)
            }
            inputs.push(IMG_SRC_NAMES[src])
        }
        return inputs
    }
}

const ASTERISK_I_GUESS = "※"

const IMG_SRC_NAMES: Record<string, TInput> = {
    "/6/assets/images/common/controller/icon_punch_l.png": "LP",
    "/6/assets/images/common/controller/icon_kick_l.png":  "LK",
    "/6/assets/images/common/controller/icon_punch_m.png": "MP",
    "/6/assets/images/common/controller/icon_kick_m.png":  "MK",
    "/6/assets/images/common/controller/icon_punch_h.png": "HP",
    "/6/assets/images/common/controller/icon_kick_h.png":  "HK",

    "/6/assets/images/common/controller/icon_punch.png": "P",
    "/6/assets/images/common/controller/icon_kick.png":  "K",

    "/6/assets/images/common/controller/key-dl.png":     "1",
    "/6/assets/images/common/controller/key-d.png":      "2",
    "/6/assets/images/common/controller/key-dr.png":     "3",
    "/6/assets/images/common/controller/key-l.png":      "4",
    "/6/assets/images/common/controller/key-nutral.png": "5",
    "/6/assets/images/common/controller/key-r.png":      "6",
    "/6/assets/images/common/controller/key-ul.png":     "7",
    "/6/assets/images/common/controller/key-u.png":      "8",
    "/6/assets/images/common/controller/key-ur.png":     "9",
    "/6/assets/images/common/controller/key-circle.png": "360",
    "/6/assets/images/common/controller/key-dc.png":     "[2]",
    "/6/assets/images/common/controller/key-lc.png":     "[4]",

    "/6/assets/images/common/controller/key-plus.png": "+",
    "/6/assets/images/common/controller/arrow_3.png":  ">",
    "/6/assets/images/common/controller/key-or.png":   "/",
}
