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
    input?: any
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

export interface ICharacterFrameData {
    section?: string
    name?: any
    input?: any
    startup?: any
    active?: any
    recovery?: any
    "Recovery.Hit"?: any
    "Recovery.Block"?: any
    "cancel"?: any
    damage?: any
    scaling?: any
    driveGain_hit?: any
    driveDrain_block?: any
    driveDrain_punishCounter?: any
    superGain?: any
    properties?: string[]
    notes?: any
}

export type TInput =
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "[2]"
    | "[4]"
    | "LP"
    | "MP"
    | "HP"
    | "LK"
    | "MK"
    | "HK"
    | "P"
    | "K"
    | "+"
    | ">"
    | "arrow"
    | "c4"
    | "c2"
    | "360"
    | "/"
