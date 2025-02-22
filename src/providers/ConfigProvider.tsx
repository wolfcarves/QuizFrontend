import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "@/redux/store"

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
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ReduxProvider>
    )
}

export default ConfigProvider
