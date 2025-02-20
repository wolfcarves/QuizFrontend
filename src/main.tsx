import "./styles/globals.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Router from "./navigation/router"
import ConfigProvider from "./providers/ConfigProvider"
import AuthProvider from "./providers/AuthProvider"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ConfigProvider>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </ConfigProvider>
    </StrictMode>,
)
