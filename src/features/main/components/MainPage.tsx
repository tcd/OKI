import { Help } from "./Help"
import { AboveTable } from "./AboveTable"
import { Oki } from "./Oki"

export const MainPage = (): JSX.Element => {
    return (
        <>
            <h1>Main Page</h1>
            <AboveTable />
            <Oki />
            <Help />
        </>
    )
}

