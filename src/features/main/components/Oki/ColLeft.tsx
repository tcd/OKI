import { useDispatch, useSelector } from "react-redux"
import { Box } from "@mui/material"

import type { ISxProps as SxProps } from "@app/theme"
import { Actions, Selectors } from "@app/state"

export const ColLeft = (): JSX.Element => {

    const activeNumber = useSelector(Selectors.Main.activeRowNumber)

    return (
        <Box sx={{
            display: "flex",
            flexFlow: "column nowrap",
            color: "#fff",
        }}>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>KD</span>
            <OkiButton rowNumber="1" active={activeNumber == "1"} />
            <OkiButton rowNumber="2" active={activeNumber == "2"} />
            <OkiButton rowNumber="3" active={activeNumber == "3"} />
            <OkiButton rowNumber="4" active={activeNumber == "4"} />
            <OkiButton rowNumber="5" active={activeNumber == "5"} />
            <OkiButton rowNumber="6" active={activeNumber == "6"} />
            <OkiButton rowNumber="7" active={activeNumber == "7"} />
            <span>&nbsp;</span>
            <span>&nbsp;</span>
        </Box>
    )
}

type OkiButtonProps = {
    rowNumber: SF6.OkiRowNumber
    active: boolean
}

const OkiButton = (props: OkiButtonProps): JSX.Element => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(Actions.Main.setActiveRow(props.rowNumber))
    }

    const sx: SxProps = {
        pr: 1,
        "&:hover": {
            cursor: "pointer",
        },
        backgroundColor: props.active ? "#002200" : "#000",
    }

    return (
        <Box
            component="span"
            onClick={handleClick}
            sx={sx}
        >
            OKI{props.rowNumber}
        </Box>
    )
}
