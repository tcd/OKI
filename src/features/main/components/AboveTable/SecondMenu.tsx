import { Box, Stack } from "@mui/material"
import { Link, type LinkProps } from "@app/features/shared"
import { Button } from "./Button"

export const SecondMenu = (): JSX.Element => {

    const buttonPropses: LinkProps[] = [
        {
            title: "RESET OKI",
            url: "#",
        },
        {
            title: "FRAME KILL",
            url: "",
        },
        {
            title: "HELP",
            url: "#help",
        },
        {
            title: "VIEW TOTAL TOP",
            url: "#",
        },
        {
            title: "STICK OKI",
            url: "#",
        },
    ]

    const buttons = buttonPropses.map((btn, i) => (
        <Button key={i} {...btn}/>
    ))

    return (
        <Stack
            direction="row"
            spacing={1}
            // sx={{ mx: 2 }}
        >
            {buttons}
        </Stack>
    )
}

