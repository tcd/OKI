import type { CharacterNameClean } from "../util"
import { Converter } from "./Converter"

export const convert = async () => {
    for (const character of ALL_CHARACTER_NAMES) {
        await new Converter(character).convert()
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
