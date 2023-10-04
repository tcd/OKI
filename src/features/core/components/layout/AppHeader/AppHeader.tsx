import { useDispatch } from "react-redux"

import { Link, type LinkProps } from "@app/features/shared"
import { Actions } from "@app/state"
import { InternalLink } from "./InternalLink"

export const AppHeader = (): JSX.Element => {

    const dispatch = useDispatch()

    const $links = links.map((link, i) => (
        <li key={i}><Link {...link}/></li>
    ))

    return (
        <>
            <ul>
                {$links}
                <InternalLink
                    text="Help"
                    onClick={() => dispatch(Actions.Core.openModal("help"))}
                />
                <InternalLink
                    text="OKI"
                    onClick={() => dispatch(Actions.Core.openModal("oki"))}
                />
            </ul>
        </>
    )
}

// =============================================================================

const frameDataLinks: LinkProps[] = [
    {
        title: "StreetFighter.com",
        url: "https://www.streetfighter.com/6/character/ryu/frame",
    },
]

const links: LinkProps[] = [
    {
        title: "SFV OKI LOL",
        url: "http://toolassisted.github.io/OKI",
    },
    ...frameDataLinks,
    // {
    //     title: "Tutorial: Tool Assisted OKI Calculator + Frame Kill (With Pictures)",
    //     url: "https://www.reddit.com/r/StreetFighter/comments/5zrq81/tutorial_tool_assisted_oki_calculator_frame_kill/",
    // },
    // {
    //     title: "Guide to tool assisted's oki calculator: How to use ToolAssisted's oki calculator",
    //     url: "https://twitter.com/PleaseWest/status/807021911309893632",
    // },
    // {
    //     title: "SFV: Tutorial on Toolassisted's Okizeme Calculator and Frametrapped Hitboxes",
    //     url: "https://twitter.com/Arlieth/status/743024207689351168",
    // },
    // {
    //     title: ".@gootecks helps a student integrate throws into his Rashid game with the help of the @TOOLASSlSTED oki calc.",
    //     url: "https://twitter.com/CrossCounter_TR/status/804478738532626434",
    // },
    // {
    //     title: ".@gootecks shows a Zangief player how to use @TOOLASSlSTED oki calculator to figure out what to do after...",
    //     url: "https://twitter.com/CrossCounter_TR/status/817237914128158720",
    // },
    // {
    //     title: "An intentionally brief tutorial on how to use @TOOLASSlSTED 's okizeme calculator in SFV.",
    //     url: "https://twitter.com/AutoMattock/status/857438211903193091",
    // },
    // {
    //     title: "SFV OKI BETA LOL FAT DATA",
    //     url: "https://twitter.com/TOOLASSlSTED/status/1133627609852653568",
    // },
]
