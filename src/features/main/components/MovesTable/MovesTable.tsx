import { useDispatch, useSelector } from "react-redux"
import {
    Box,
} from "@mui/material"

import { Actions, Selectors } from "@app/state"
import type { ISxProps as SxProps } from "@app/theme"
import { filterColumns } from "./shared"
import { THead } from "./THead"
import { Cell } from "./Cell"

export type MovesTableProps = {
    player: SF6.TPlayerNumber
}

export const MovesTable = (props: MovesTableProps): JSX.Element => {

    const {
        player,
    } = props

    const dispatch = useDispatch()

    const frameData = useSelector(Selectors.Main.frameData.character1)
    const activeMove = useSelector(Selectors.Main.activeMove)

    const columns = filterColumns(frameData)

    const $rows = frameData.map((row, i) => (
        <tr
            key={i}
            onClick={() => dispatch(Actions.Main.clickMove(row.name))}
            style={{
                backgroundColor: (row.name == activeMove?.name) ? "#006600" : undefined,
            }}
        >
            {columns.map((col, j) => (
                <Cell
                    key={j}
                    player={player}
                    row={row}
                    column={col}
                    active={row.name == activeMove?.name}
                />
            ))}
        </tr>
    ))

    return (
        <Box sx={rootSx}>
            <Box component="table" sx={tableSx}>
                <THead player={player} columns={columns}/>
                <tbody>
                    {$rows}
                </tbody>
            </Box>
        </Box>
    )
}

// =============================================================================

const rootSx: SxProps = {
    display: "block",
    p: 2,
}

const tableSx: SxProps = {
    color: "#ccc",
    fontSize: "14px",
    "& td": {
        textAlign: "center",
    },
    "& thead": {
        backgroundColor: "#111111",
        fontWeight: "bold",
        "&:hover": {
            cursor: "pointer",
        },
    },
    "& tbody": {
        backgroundColor: "#333333",
        "& tr": {
            "&:nth-of-type(even)": {
                backgroundColor: "#333333",
            },
            "&:nth-of-type(odd)": {
                backgroundColor: "#111111",
            },
            "&:hover": {
                backgroundColor: "#003300",
            },
        },
    },
}
