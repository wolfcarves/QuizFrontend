import useUserSessionSelector from "@/hooks/selectors/useUserSessionSelector"
import ErrorPage from "@/pages/error-page"
import { type ComponentType } from "react"

const withAuthGuard = <T extends object>(Component: ComponentType<T>) => {
    const NewComponent = (props: T) => {
        const { isAuthenticated } = useUserSessionSelector()

        if (!isAuthenticated)
            return <ErrorPage title="401" subtitle="Unauthorized" />

        return <Component {...props} />
    }

    return NewComponent
}

export default withAuthGuard
