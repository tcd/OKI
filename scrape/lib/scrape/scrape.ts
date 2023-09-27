import type { CharacterNameClean } from "../types"
import { Scraper } from "./Scraper"

export const scrape = async () => {
    for (const character of ALL_CHARACTER_NAMES) {
        await new Scraper(character).scrape()
    }
}

const ALL_CHARACTER_NAMES: CharacterNameClean[] = [
    // "aki",
    // "blanka",
    // "cammy",
    // "chunli",
    // "deejay",
    // "dhalsim",
    // "ehonda",
    // "guile",
    // "jamie",
    // "jp",
    // "juri",
    // "ken",
    // "kimberly",
    // "lily",
    // "luke",
    // "manon",
    // "marisa",
    // "rashid",
    "ryu",
    // "zangief",
]
