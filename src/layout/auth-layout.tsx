import { ComponentProps } from "react"
import { Outlet } from "react-router"

type AuthLayoutProps = ComponentProps<"main">

const AuthLayout = ({ className, ...props }: AuthLayoutProps) => {
    return (
        <main
            {...props}
            className={`bg-background dark:bg-foreground min-h-screen ${className}`}
        >
            <div className="flex justify-center items-center w-full min-h-screen pb-32">
                <div className="space-y-10 w-full max-w-[25rem] px-2">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default AuthLayout
