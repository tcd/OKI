import type { Location } from "react-router-dom"
import DataObjectIcon from "@mui/icons-material/DataObject"

// import type { PathParam } from "@app/util/constants/PathParams"

export declare global {
    export type IconComponent = typeof DataObjectIcon

    export interface ILinkData {
        title: string
        path: string
        children?: ILinkData[]
    }

    // =========================================================================
    // Routing
    // =========================================================================

    export type LocationChangePayload = {
        pathParams: Partial<Record<PathParam, string>>
        location: Location
        previousLocation?: LocationChangePayload
        hash?: string
    }

    // =========================================================================
    // Wheels
    // =========================================================================

    export declare namespace Wheels {

        export type TPlayerSide =
            | "1"
            | "2"

        export type HeroId = [
            playerSide: TPlayerSide,
            heroSide: TPlayerSide
        ]

        export type TPhase =
            | "setup" // pick heroes
            | "spin" // spin wheels
            | "build" // apply xp, charge, & bulwark
            | "act" // heroes act
            | "review" // bomb, add charge for actions

        export type TEnergy =
            | "Diamond"
            | "Empty"
            | "Square"
            | "Hammer"

        export type THero =
            | "Warrior"
            | "Mage"
            | "Archer"
            | "Engineer"
            | "Assassin"
            | "Priest"

        export type THeroLevel =
            | "Bronze"
            | "Silver"
            | "Gold"

        export interface IGameHero {
            type: THero
            charge: number
            /** 1-6 */
            xp: number
            level: THeroLevel
        }

        export interface IHeroStats {
            // hero
            // level
            /** charge required for the hero to act */
            energy: number
            /** damage done to the crown */
            vsCrown?: number
            /** damage done to the bulwark */
            vsBulwark?: number
            /** energy stolen to delay enemy hero */
            vsHero?: number
            /** hp recovered to crown */
            forCrown?: number
            /** bulwark added */
            forBulwark?: number
            /** charge added to friendly hero */
            forHero?: number
        }

        export type THeroStat = keyof Omit<IHeroStats, "energy">

        export type AllHeroStats = Record<
            Wheels.THero,
            Record<
                Wheels.THeroLevel,
                Wheels.IHeroStats
            >
        >

        export interface IWheelFace {
            wheelType: TEnergy
            special: boolean
            /** 1-3(4?) */
            multiplier: number
            weight?: number
        }

        export interface IWheels {
            wheel1: IWheelFace
            wheel2: IWheelFace
            wheel3: IWheelFace
            wheel4: IWheelFace
            wheel5: IWheelFace
        }

        export interface IPlayerState {
            /** 0-5 */
            bulwark: number
            /** 0 or above */
            crowns: number
            /** 0-3 */
            spins: number
            hero1: IGameHero
            hero2: IGameHero
            spinning: boolean
            locked: number[]
            wheels: IWheels
        }
    }
}
