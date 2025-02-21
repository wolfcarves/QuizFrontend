import useGetSessionQuery from "@/hooks/queries/useGetSessionQuery"
import ErrorPage from "@/pages/error-page"
import { type ComponentType } from "react"

const withAuthGuard = <T extends object>(Component: ComponentType<T>) => {
    const NewComponent = (props: T) => {
        const { data, isLoading, isPending } = useGetSessionQuery()

        if (!data && !isLoading && !isPending)
            return <ErrorPage title="401" subtitle="Unauthorized" />

        return <Component {...props} />
    }

    return NewComponent
}

export default withAuthGuard
