export const AppHeader = (): JSX.Element => {

    const $links = links.map((link, i) => <HeaderLink key={i} {...link} />)

    return (
        <>
            <ul>
                {$links}
            </ul>
        </>
    )
}

// =============================================================================

const links: HeaderLinkProps[] = [
    {
        title: "SFV OKI LOL",
        url: "http://toolassisted.github.io/OKI",
    },
]

// =============================================================================

type HeaderLinkProps = {
    title: string
    url: string
}

const HeaderLink = (props: HeaderLinkProps): JSX.Element => {
    return (
        <li>
            <a href={props.url}>
                {props.title}
            </a>
        </li>
    )
}
