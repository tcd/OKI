import { Box, type BoxProps } from "@mui/material"

export type ImgProps = BoxProps<"img">

export const Img = (props: ImgProps): JSX.Element => {
    return (
        <Box component="img" {...props} />
    )
}
