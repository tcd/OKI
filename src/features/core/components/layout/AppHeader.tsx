import { Link, type LinkProps } from "@app/features/shared"

export const AppHeader = (): JSX.Element => {

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

// =============================================================================

const links: LinkProps[] = [
    {
        title: "SFV OKI LOL",
        url: "http://toolassisted.github.io/OKI",
    },
]

