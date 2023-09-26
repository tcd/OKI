import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { store, persistor } from "@app/state"

import { AppThemeProvider } from "./AppThemeProvider"
import { AppLayout } from "@app/features/core"

export const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppThemeProvider>
                    <AppLayout />
                </AppThemeProvider>
            </PersistGate>
        </Provider>
    )
}
