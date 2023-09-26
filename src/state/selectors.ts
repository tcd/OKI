import { FeatureKeys } from "@app/util"

import { CoreSelectors } from "@app/features/core"
import { MainSelectors } from "@app/features/main"
import { NotificationsSelectors } from "@app/features/notifications"

// import Meta from "./meta-selectors"

export type AppSelectors = {
    [FeatureKeys.Core]:          typeof CoreSelectors
    [FeatureKeys.Main]:          typeof MainSelectors
    [FeatureKeys.Notifications]: typeof NotificationsSelectors
}

export const Selectors: AppSelectors = {
    // Meta,
    Core:          CoreSelectors,
    Main:          MainSelectors,
    Notifications: NotificationsSelectors,
}
