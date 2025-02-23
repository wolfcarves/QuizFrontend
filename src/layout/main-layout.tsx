import { ComponentProps } from "react"
import { Header } from "@/components/block"
import { Outlet } from "react-router"
import withAuthGuard from "@/higher-order/withAuthGuard"

type MainLayoutProps = ComponentProps<"main">

const MainLayout = ({ className, ...props }: MainLayoutProps) => {
    return (
        <main
            {...props}
            className={`bg-background-light dark:bg-foreground min-h-screen ${className}`}
        >
            <Header />

            <div className="container lg:container">
                <div className="py-10">
                    <div className="w-full max-w-xl mx-auto space-y-2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default withAuthGuard(MainLayout)
