import type { CharacterNameClean } from "./types"
import { Parser } from "./Parser"

export const parse = async () => {
    for (const character of ALL_CHARACTER_NAMES) {
        await new Parser(character).parse()
    }
}

const ALL_CHARACTER_NAMES: CharacterNameClean[] = [
    "aki",
    "blanka",
    "cammy",
    "chunli",
    "deejay",
    "dhalsim",
    "ehonda",
    "guile",
    "jamie",
    "jp",
    "juri",
    "ken",
    "kimberly",
    "lily",
    "luke",
    "manon",
    "marisa",
    "rashid",
    "ryu",
    "zangief",
]
