import { configureStore } from "@reduxjs/toolkit"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import { getPersistConfig } from "redux-deep-persist"

import { CONFIG } from "@app/util"
import { reduxDevToolsOptions } from "@app/util/redux-dev-tools-options"
import { rootReducer } from "./root-reducer"
import { PERSIST_LIST } from "./persist"

const persistConfig = getPersistConfig({
    rootReducer,
    key: "fta-ui-template",
    version: 1,
    storage: storage,
    // @ts-ignore: next-line
    whitelist: PERSIST_LIST,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

/** Only enable redux dev tools in development */
const devTools = CONFIG.env === "development" ? reduxDevToolsOptions : false

export const store = configureStore({
    reducer: persistedReducer,
    devTools: devTools,
    // @ts-ignore: next-line
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: {
            warnAfter: 500,
            ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
        },
    }),
})

export const persistor = persistStore(store)
