import { useSelector } from "react-redux"
import {
    Box,
} from "@mui/material"

import { Selectors } from "@app/state"
import type { ISxProps as SxProps } from "@app/theme"

export const Table1 = (): JSX.Element => {

    const character1 = useSelector(Selectors.Main.character1)
    const frameData = useSelector(Selectors.Main.frameData.character1)

    console.log(frameData)

    const columns = Object.keys(frameData[0])

    const $headers = columns.map((col, i) => (
        <td key={i}>{col}</td>
    ))

    const $rows = frameData.map((row, i) => (
        <tr key={i}>
            {columns.map((col, j) => (
                <td key={j}>
                    {row[col] ?? ""}
                </td>
            ))}
        </tr>
    ))

    return (
        <Box sx={rootSx}>
            <table>
                <thead>
                    <tr>
                        {$headers}
                    </tr>
                </thead>
                <tbody>
                    {$rows}
                </tbody>
            </table>
        </Box>
    )
}

// =============================================================================

const rootSx: SxProps = {
    display: "block",
    p: 2,
}
