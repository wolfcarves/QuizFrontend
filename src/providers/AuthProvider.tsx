import { applyOpenApiConfig } from "@/config/openapiConfig"
import useGetSessionQuery from "@/hooks/queries/useGetSessionQuery"
import { getSession } from "@/redux/slices/userSessionSlice"
import { ReactNode, useEffect } from "react"
import { TbBrandNodejs } from "react-icons/tb"
import { useDispatch } from "react-redux"

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        applyOpenApiConfig()
    }, [])

    const { data, isLoading, isPending } = useGetSessionQuery()

    useEffect(() => {
        if (data && !isLoading && !isPending) {
            dispatch(getSession(data))
        }
    }, [data, dispatch, isLoading, isPending])

    if (isLoading || isPending)
        return (
            <div className="absolute w-max h-max inset-0 m-auto animate-pulse ">
                <TbBrandNodejs size={40} />
            </div>
        )

    return <>{children}</>
}

export default AuthProvider
