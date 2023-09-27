import { PATHS } from "./paths"

export const scrape = async () => {
    console.log(PATHS.PROJECT_ROOT)
}

// `https://www.streetfighter.com/6/en-us/character/${character}/frame`
const buildUrl = (character: CharacterNameClean) => `https://www.streetfighter.com/6/character/${character}/frame`

type CharacterNameClean =
    | "aki"
    | "rashid"
    | "cammy"
    | "lily"
    | "zangief"
    | "jp"
    | "marisa"
    | "manon"
    | "deejay"
    | "ehonda"
    | "dhalsim"
    | "blanka"
    | "ken"
    | "juri"
    | "kimberly"
    | "guile"
    | "chunli"
    | "jamie"
    | "luke"
    | "ryu"

interface ICharacterTableRow {
    "Move Name"
    // Frame
    "Start-up"
    "Active"
    "Recovery"
    // // Recovery
    // "Hit"
    // "Block"
    //
    "Cancel"
    "Damage"
    "Combo Scaling"
    // Drive Gauge Increase
    "Hit"
    // Drive Gauge Decrease
    "Block"
    "Punish Counter"
    //
    "Super Art Gauge Increase"
    "Properties"
    "Miscellaneous"
}
