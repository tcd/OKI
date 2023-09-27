import type { CheerioAPI } from "cheerio"
import * as cheerio from "cheerio"

import type { CharacterNameClean, ICharacterTableRow } from "./types"
import { Processor } from "./Processor"

export class Parser extends Processor {

    public $: CheerioAPI

    constructor(character: CharacterNameClean) {
        super(character)
    }

    public async parse() {
        const html = await this.htmlFilePath().read()
        this.$ = cheerio.load(html)
        const $table = this.$("#framearea > div > table")?.first()
        if (!$table) {
            throw new Error(`unable to parse html for ${this.character}`)
        }
        debugger
    }
}
