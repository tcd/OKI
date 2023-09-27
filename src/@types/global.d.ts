import type { Location } from "react-router-dom"
import DataObjectIcon from "@mui/icons-material/DataObject"

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
}
