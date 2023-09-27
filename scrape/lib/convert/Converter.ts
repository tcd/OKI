import type { CheerioAPI } from "cheerio"
import * as cheerio from "cheerio"

import {
    Processor,
    type CharacterNameClean,
    type ICharacterTableRow,
} from "../util"

// FIXME: replace `U+ff08 "（"`
// FIXME: replace `U+ff05 "％"`
export class Converter extends Processor {

    public $: CheerioAPI
    public results: any[]
    public currentSection: string
    public rawData: ICharacterTableRow

    constructor(character: CharacterNameClean) {
        super(character)
        this.results = []
    }

    public async convert() {
        this.rawData = await this.jsonFilePathV1().readJSON<ICharacterTableRow>()
    }

}
