import useGetSessionQuery from "@/hooks/queries/useGetSessionQuery"
import { ComponentProps, useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router"

type AuthLayoutProps = ComponentProps<"main">

const AuthLayout = ({ className, ...props }: AuthLayoutProps) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const { data: session, isPending: isSessionPending } = useGetSessionQuery()

    // To send user to homepage if already authenticated
    useEffect(() => {
        if (session && !isSessionPending && (pathname === "/login" || pathname === "/signup")) {
            navigate("/")
        }
    }, [isSessionPending, navigate, pathname, session])

    return (
        <main {...props} className={`bg-background dark:bg-foreground min-h-screen ${className}`}>
            <div className="flex justify-center items-center w-full min-h-screen">
                <div className="space-y-10 w-full max-w-[25rem] px-2">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default AuthLayout
