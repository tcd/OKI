import range from "lodash/range"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { Actions } from "@app/state"

export const ExtraRow2 = (): JSX.Element => {
    const numbers = range(1, 120)

    const $numbers = numbers.map((i) => <Number key={i} fullNumber={i}/>)

    return (
        <Box>
            {$numbers}
        </Box>
    )
}

type NumberProps = {
    fullNumber: number
}

const Number = (props: NumberProps): JSX.Element => {

    const dispatch = useDispatch()

    const {
        fullNumber,
    } = props

    const shortNumber = getShortNumber(fullNumber)
    const isTen = fullNumber % 10 == 0

    const sx: SxProps = {
        color: isTen ? "#fff" : "#ccc",
        "&:hover": {
            cursor: "pointer",
            color: "#000",
            backgroundColor: "#999900",
        },
    }

    const handleClick = () => {
        dispatch(Actions.Main.handleExtra2Click({ frame: fullNumber }))
    }

    return (
        <Box
            component="span"
            sx={sx}
            title={fullNumber.toString()}
            onClick={handleClick}
        >
            {shortNumber}
        </Box>
    )
}

const getShortNumber = (num: number): string => {
    if (num < 10) {
        return num.toString()
    }
    return num.toString()[num.toString().length - 1]
}
