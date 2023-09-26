import { FeatureKeys } from "@app/util"

import { CoreActions } from "@app/features/core"
import { MainActions } from "@app/features/main"
import { NotificationsActions } from "@app/features/notifications"

export type AppActions = {
    [FeatureKeys.Core]:          typeof CoreActions
    [FeatureKeys.Main]:          typeof MainActions
    [FeatureKeys.Notifications]: typeof NotificationsActions
}

export const Actions: AppActions = {
    Core:          CoreActions,
    Main:          MainActions,
    Notifications: NotificationsActions,
}
