import "./styles/globals.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Router from "./navigation/router"
import ConfigProvider from "./providers/ConfigProvider"
import AuthProvider from "./providers/AuthProvider"
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ConfigProvider>
            <AuthProvider>
                <Router />
                <Toaster />
            </AuthProvider>
        </ConfigProvider>
    </StrictMode>,
)
