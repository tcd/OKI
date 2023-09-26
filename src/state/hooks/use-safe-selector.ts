import {
    TypedUseSelectorHook,
    useSelector,
} from "react-redux"

import type {
    RootState,
} from "../types"

/**
 * @see https://redux.js.org/usage/usage-with-typescript#define-typed-hooks
 */
export const useSafeSelector: TypedUseSelectorHook<RootState> = (selector) => {
    try {
        const value = useSelector(selector)
        return value
    } catch (error) {
        console.error(error)
        debugger
        return null
    }
}
