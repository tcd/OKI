import { DateTime } from "luxon"

import { CONFIG } from "@app/util"
import type { NotificationsState } from "./state"

export const createNotification = (options: INotificationOptions): INotification => {
    const {
        message,
        timestamp = false,
        variant = "info",
        persist = false,
        autoHideDuration = 5_000,
    } = options
    return {
        message,
        variant,
        dismissed: false,
        id: new Date().getTime() + Math.random(),
        autoHideDuration: persist ? null : autoHideDuration,
        timestamp: !timestamp ? null : DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS),
    }
}

export const notifySuccess = (state: NotificationsState, message: string, options: Partial<INotificationOptions> = {}): NotificationsState => {
    if (options?.devOnly && CONFIG.env != "development") { return state }
    state.notifications.push(createNotification({
        ...options,
        variant: "success",
        message,
    }))
    return state
}

export const notifyError = (state: NotificationsState, message: string, options: Partial<INotificationOptions> = {}): NotificationsState => {
    if (options?.devOnly && CONFIG.env != "development") { return state }
    state.notifications.push(createNotification({
        ...options,
        variant: "error",
        message,
    }))
    return state
}

export const notifyInfo = (state: NotificationsState, message: string, options: Partial<INotificationOptions> = {}): NotificationsState => {
    if (options?.devOnly && CONFIG.env != "development") { return state }
    state.notifications.push(createNotification({
        variant: "info",
        timestamp: true,
        autoHideDuration: 10_000,
        message,
    }))
    return state
}
