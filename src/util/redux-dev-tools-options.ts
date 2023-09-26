import type { EnhancerOptions } from "@redux-devtools/extension"

import { Actions } from "@app/state/actions"
import { CONFIG } from "./config"

const blacklist: string[] = [
    "persist/PERSIST",
    "persist/REHYDRATE",
    "Core/clearPageTitle",
    "Core/setPageTitle",
]

const whitelist: string[] = [
]

const buildSortedActions = (actions: typeof Actions): typeof Actions => {
    // @ts-ignore: next-line
    const sortedActions: typeof Actions = {}
    for (const key of Object.keys(actions).sort()) {
        sortedActions[key] = actions[key]
    }
    return sortedActions
}

export const reduxDevToolsOptions: EnhancerOptions = {
    name: CONFIG.appName,

    // @ts-ignore: next-line
    actionCreators: buildSortedActions(Actions),

    actionsDenylist: blacklist,
    // actionsAllowlist: whitelist,

    // // https://github.com/reduxjs/redux-devtools-extension/blob/master/docs/Troubleshooting.md#excessive-use-of-memory-and-cpu
    // actionSanitizer: (action, _id) => {
    //     return action
    // },
}
