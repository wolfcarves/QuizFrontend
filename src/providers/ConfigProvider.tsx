import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "../redux/store"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false,
        },
        mutations: {},
    },
})

const ConfigProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ReduxProvider>
    )
}

export default ConfigProvider
