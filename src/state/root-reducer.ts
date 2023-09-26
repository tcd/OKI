import { combineReducers } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/util"

import { CoreSlice } from "@app/features/core"
import { GameSlice } from "@app/features/game"
import { NotificationsSlice } from "@app/features/notifications"

export const rootReducer = combineReducers({
    [FeatureKeys.Core]:          CoreSlice.reducer,
    [FeatureKeys.Game]:          GameSlice.reducer,
    [FeatureKeys.Notifications]: NotificationsSlice.reducer,
})
