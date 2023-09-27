import { Link, type LinkProps } from "@app/features/shared"

export const SecondMenu = (): JSX.Element => {

    const $links = links.map((link, i) => (
        <li key={i}><Link {...link}/></li>
    ))

    return (
        <>
            <ul>
                {$links}
            </ul>
        </>
    )
}


const links: LinkProps[] = [
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
