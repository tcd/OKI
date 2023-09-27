import type { CharacterNameClean } from "./types"
import { PATHS } from "./paths"

export class Processor {

    public character: CharacterNameClean

    constructor(character: CharacterNameClean) {
        this.character = character
    }

    public htmlFilePath() { return PATHS.TMP_FOLDER.join("html", "street-fighter-dotcom", `${this.character}.html`)}
}
