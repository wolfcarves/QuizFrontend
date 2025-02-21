import { applyOpenApiConfig } from "@/config/openapiConfig"
import useGetSessionQuery from "@/hooks/queries/useGetSessionQuery"
import { ReactNode, useEffect } from "react"
import { TbBrandNodejs } from "react-icons/tb"

const AuthProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        applyOpenApiConfig()
    }, [])

    const { data, isLoading, isPending } = useGetSessionQuery()

    if (isLoading || isPending)
        return (
            <div className="absolute w-max h-max inset-0 m-auto animate-pulse ">
                <TbBrandNodejs size={40} />
            </div>
        )

    return <>{children}</>
}

export default AuthProvider
