import { Loading } from "@/components/ui"
import { applyOpenApiConfig } from "@/config/openapiConfig"
import useGetSessionQuery from "@/hooks/queries/useGetSessionQuery"
import { ReactNode, useEffect } from "react"
import { TbBrandNodejs } from "react-icons/tb"

const AuthProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        applyOpenApiConfig()
    }, [])

    const { isLoading, isPending } = useGetSessionQuery()

    if (isLoading || isPending) return <Loading />

    return <>{children}</>
}

export default AuthProvider
