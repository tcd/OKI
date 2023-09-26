import { FeatureKeys } from "@app/util"

import { CoreActions } from "@app/features/core"
import { GameActions } from "@app/features/game"
import { NotificationsActions } from "@app/features/notifications"

export type AppActions = {
    [FeatureKeys.Core]:          typeof CoreActions
    [FeatureKeys.Game]:          typeof GameActions
    [FeatureKeys.Notifications]: typeof NotificationsActions
}

export const Actions: AppActions = {
    Core:          CoreActions,
    Game:          GameActions,
    Notifications: NotificationsActions,
}
