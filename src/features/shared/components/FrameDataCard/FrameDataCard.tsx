import { Box } from "@mui/material"

import { DescriptionList, type DLDetail } from "../DescriptionList"
import { InputDisplay } from "../InputDisplay"

export type FrameDataCardProps = {
    frameData: SF6.ICharacterFrameData
}

export const FrameDataCard = (props: FrameDataCardProps): JSX.Element => {

    const { frameData } = props

    const details: DLDetail[] = [
        { term: "Name", details: frameData.name },
        { term: "Input", details: <InputDisplay inputs={frameData.input} /> },
    ]

    return (
        <Box>
            <DescriptionList items={details} />
        </Box>
    )
}
