import "./styles/globals.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Router from "./navigation/router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./redux/store"
import ConfigProvider from "./providers/ConfigProvider"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 3,
        },
        mutations: {},
    },
})

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ConfigProvider>
            <Router />
        </ConfigProvider>
    </StrictMode>,
)
