import { useDispatch, useSelector } from "react-redux"
import {
    Box,
} from "@mui/material"

import { Actions, Selectors } from "@app/state"
import type { ISxProps as SxProps } from "@app/theme"

const skips = [
    "section",
    "Combo Scaling",
    "Properties",
    "Miscellaneous",
    "driveGain_hit",
    "driveDrain_block",
    "driveDrain_punishCounter",
    "superGain",
]

export const Table1 = (): JSX.Element => {

    const dispatch = useDispatch()

    const frameData = useSelector(Selectors.Main.frameData.character1)

    const columns = Object.keys(frameData[0]).filter(x => !skips.includes(x))

    const $headers = columns.map((col, i) => (
        <td key={i}>{col}</td>
    ))

    const $rows = frameData.map((row, i) => (
        <tr
            key={i}
            onClick={() => dispatch(Actions.Main.clickMove(row.name))}
        >
            {columns.map((col, j) => (
                <td key={j}>
                    {row[col] ?? ""}
                </td>
            ))}
        </tr>
    ))

    return (
        <Box sx={rootSx}>
            <Box component="table" sx={tableSx}>
                <thead>
                    <tr>
                        {$headers}
                    </tr>
                </thead>
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
    fontSize: "10px",
    "& thead": {
        backgroundColor: "#111111",
        "& tr > td": {
            textAlign: "center",
            fontWeight: "bold",
        },
    },
    "& tbody": {
        backgroundColor: "#333333",
        textAlign: "center",
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
