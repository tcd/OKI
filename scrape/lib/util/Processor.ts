import type { CharacterNameClean } from "./types"
import { PATHS } from "./paths"

export class Processor {

    public character: CharacterNameClean

    constructor(character: CharacterNameClean) {
        this.character = character
    }

    public get htmlFilePath()   { return PATHS.TMP_FOLDER.join("html", "street-fighter-dotcom", `${this.character}.html`)}
    public get jsonFilePathV1() { return PATHS.TMP_FOLDER.join("json", "street-fighter-dotcom", "v1", `${this.character}.json`)}
    public get jsonFilePathV2() { return PATHS.TMP_FOLDER.join("json", "street-fighter-dotcom", "v2", `${this.character}.json`)}
}
