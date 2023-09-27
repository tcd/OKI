import { Help } from "./Help"
import { AboveTable } from "./AboveTable"

export const MainPage = (): JSX.Element => {
    return (
        <>
            <h1>Main Page</h1>
            <AboveTable />
            <Help />
        </>
    )
}

