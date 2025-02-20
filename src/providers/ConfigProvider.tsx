import { ReactNode, useEffect } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "../redux/store"
import { applyOpenApiConfig } from "@/config/openapiConfig"

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

const ConfigProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        applyOpenApiConfig()
    }, [])

    return (
        <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ReduxProvider>
    )
}

export default ConfigProvider
