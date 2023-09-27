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
    section?: string
    "Move Name"?: any
    "Frame.Start-up"?: any
    "Frame.Active"?: any
    "Frame.Recovery"?: any
    "Recovery.Hit"?: any
    "Recovery.Block"?: any
    "Cancel"?: any
    "Damage"?: any
    "Combo Scaling"?: any
    "Drive Gauge Increase.Hit"?: any
    "Drive Gauge Decrease.Block"?: any
    "Drive Gauge Decrease.Punish Counter"?: any
    "Super Art Gauge Increase"?: any
    "Properties"?: any
    "Miscellaneous"?: any
}
