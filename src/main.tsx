import "./styles/globals.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Router from "./navigation/router"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router />
    </StrictMode>,
)
