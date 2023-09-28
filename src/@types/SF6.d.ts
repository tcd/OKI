export declare global {
    export namespace SF6 {

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
            | "LP"
            | "MP"
            | "HP"
            | "LK"
            | "MK"
            | "HK"
            | "P"
            | "K"
            | "+"
            | "arrow"
            | "c4"
            | "c2"

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

        export type OkiRowNumber =
            | "1"
            | "2"
            | "3"
            | "4"
            | "5"
            | "6"
            | "7"

        export interface IOkiRow {
            name?: string
            startFrame?: number
            rowNumber?: OkiRowNumber
        }

        export interface IColumns {
            /** NO RECOVERY */
            "KD ADV": any
            /** NORMAL RECOVERY */
            "KDR ADV": any
            /** BACK RECOVERY */
            "KDBR ADV": any
            /** name */
            "Move": any
            /** input */
            "Command": any
            "Startup": any
            "Active": any
            "Recovery": any
            "Hit Advantage": any
            "CH hit adv.": any
            "Block Advantage": any
            "Damage": any
            "Stun": any
            "CH Damage": any
            "CH Stun": any
            "Chip": any
            "Total": any
            "Hitstop": any
            "Attack Level": any
            "Cancel Ability": any
            "KD Adv.": any
            "KDR Adv.": any
            "KDRB Adv.": any
            "Note": any
        }

        export interface IColumns2 {
            "TOTAL"
            "Move"
            "Command"
            "Startup"
            "Active"
            "Recovery"
            "Total"
            "Hit Advantage"
            "CH hit adv."
            "Block Advantage"
            "Damage"
            "Stun"
            "KD Adv."
            "KDR Adv."
            "KDRB Adv."
            "Note"
        }
    }
}
