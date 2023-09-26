import { FeatureKeys } from "@app/util"

import { CoreSelectors } from "@app/features/core"
import { GameSelectors } from "@app/features/game"
import { NotificationsSelectors } from "@app/features/notifications"

// import Meta from "./meta-selectors"

export type AppSelectors = {
    // Meta:                        typeof Meta,
    [FeatureKeys.Core]:          typeof CoreSelectors
    [FeatureKeys.Game]:          typeof GameSelectors
    [FeatureKeys.Notifications]: typeof NotificationsSelectors
}

export const Selectors: AppSelectors = {
    // Meta,
    Core:          CoreSelectors,
    Game:          GameSelectors,
    Notifications: NotificationsSelectors,
}
