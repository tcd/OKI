import type { CheerioAPI } from "cheerio"
import * as cheerio from "cheerio"

import type { CharacterNameClean, ICharacterTableRow } from "./types"
import { PATHS } from "./paths"

export class Parser {

    public character: CharacterNameClean
    public $: CheerioAPI

    constructor(character: CharacterNameClean) {
        this.character = character
    }

    public async parse() {
        const html = await this.htmlFilePath().read()
        this.$ = cheerio.load(html)
        debugger
    }

    public htmlFilePath() { return PATHS.TMP_FOLDER.join("html", `${this.character}.html`)}
}
