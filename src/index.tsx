import { createRoot } from "react-dom/client"

import { App } from "./App"

import { CONFIG } from "./util"
console.log(CONFIG.toJSON())

const container = document.getElementById("root")
const root = createRoot(container)

root.render(<App />)
