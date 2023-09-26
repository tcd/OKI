import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from "react-redux"

import type {
    RootState,
    AppDispatch,
} from "../types"

/**
 * @see https://redux.js.org/usage/usage-with-typescript#define-typed-hooks
 */
export const useAppDispatch: () => AppDispatch = useDispatch
/**
 * @see https://redux.js.org/usage/usage-with-typescript#define-typed-hooks
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
