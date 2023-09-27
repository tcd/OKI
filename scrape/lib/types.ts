export type CharacterNameClean =
    | "aki"
    | "blanka"
    | "cammy"
    | "chunli"
    | "deejay"
    | "dhalsim"
    | "ehonda"
    | "guile"
    | "jamie"
    | "jp"
    | "juri"
    | "ken"
    | "kimberly"
    | "lily"
    | "luke"
    | "manon"
    | "marisa"
    | "rashid"
    | "ryu"
    | "zangief"

export interface ICharacterTableRow {
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
