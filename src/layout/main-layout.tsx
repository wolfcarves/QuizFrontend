import { ComponentProps } from "react"
import { Header } from "@/components/block"
import { Outlet } from "react-router"

type MainLayoutProps = ComponentProps<"main">

const MainLayout = ({ className, ...props }: MainLayoutProps) => {
    return (
        <main
            {...props}
            className={`bg-background-light dark:bg-foreground min-h-screen ${className}`}
        >
            <Header />

            <div className="container lg:container">
                <Outlet />
            </div>
        </main>
    )
}

export default MainLayout
