import { isBlank } from "@mlxb/coolkit"

import { CONFIG } from "@app/util"
import type { RootState } from "@app/state"
import { _selectSlice } from "./select-slice"

const selectPageTitle = (s: RootState) => {
    const pageTitle = _selectSlice(s)?.pageTitle
    if (isBlank(pageTitle)) {
        return CONFIG.appName
    } else {
        return `${pageTitle} | ${CONFIG.appName}`
    }
}

// =============================================================================

export default {
    pageTitle: selectPageTitle,
}
