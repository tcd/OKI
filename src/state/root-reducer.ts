import { combineReducers } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/util"

import { CoreSlice } from "@app/features/core"
import { MainSlice } from "@app/features/main"
import { NotificationsSlice } from "@app/features/notifications"

export const rootReducer = combineReducers({
    [FeatureKeys.Core]:          CoreSlice.reducer,
    [FeatureKeys.Main]:          MainSlice.reducer,
    [FeatureKeys.Notifications]: NotificationsSlice.reducer,
})
