import useGetSessionQuery from "@/hooks/queries/useGetSessionQuery"
import ErrorPage from "@/pages/error-page"
import { useEffect, useMemo, type ComponentType } from "react"
import { useLocation, useNavigate } from "react-router"

const withAuthGuard = <T extends object>(Component: ComponentType<T>) => {
    const NewComponent = (props: T) => {
        const navigate = useNavigate()
        const { pathname } = useLocation()
        const { data, isLoading, isPending } = useGetSessionQuery()
        const isAuthenticated = useMemo(
            () => !data && !isLoading && !isPending,
            [data, isLoading, isPending],
        )

        useEffect(() => {
            if (pathname === "/" && isAuthenticated) {
                navigate("/login")
                return
            }
        }, [isAuthenticated, navigate, pathname])

        if (isAuthenticated) return <ErrorPage title="401" subtitle="Unauthorized" />

        return <Component {...props} />
    }

    return NewComponent
}

export default withAuthGuard
