import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { Actions } from "@app/state"
import { titleCase } from "@app/util"

export type THeadProps = {
    player: SF6.TPlayerNumber
    columns: (keyof SF6.ICharacterFrameData)[]
}

export const THead = (props: THeadProps): JSX.Element => {

    const {
        player,
        columns,
    } = props

    const dispatch = useDispatch()

    const $headers = columns.map((col, i) => (
        <td
            key={i}
            // onClick={() => { dispatch(Actions.Main.clickTableHeader({ player, column: col }))}}
        >
            {titleCase(col)}
        </td>
    ))

    return (
        <thead>
            <tr>
                {$headers}
            </tr>
        </thead>
    )
}
