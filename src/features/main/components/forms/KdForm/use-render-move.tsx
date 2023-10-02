import {
    Autocomplete,
    AutocompleteOwnerState,
    AutocompleteProps,
    AutocompleteRenderOptionState,
    Box,
} from "@mui/material"

import { getCharacterFrameData } from "@app/data"
import { InputDisplay } from "@app/features/shared"

export type RenderFunc = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: any,
    state: AutocompleteRenderOptionState,
    ownerState: AutocompleteOwnerState<any, false, false, false, "div">
) => React.ReactNode

export const useRenderMove = (character: SF6.CharacterNameClean): RenderFunc => {

    const allMoves = getCharacterFrameData(character)


    const renderFunc: RenderFunc = (props, option, { selected }) => {
        const move = allMoves.find((x) => x.name == option)

        return (
            <li {...props}>
                <Box
                >
                    {option}
                    <br />
                    <InputDisplay inputs={move?.input} />
                    <br />
                </Box>
            </li>
        )
    }
    return renderFunc
}

// const renderOption = (props, option, { selected }): React.ReactNode => {
//     return (
//         <li {...props}>
//             <Box
//             >
//                 {option}
//
//             </Box>
//         </li>
//     )
// }
