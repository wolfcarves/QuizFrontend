import { ComponentProps } from "react"
import Header from "@/components/modules/Header/Header"
import { Outlet } from "react-router"

type MainLayoutProps = ComponentProps<"main">

const MainLayout = ({ className, ...props }: MainLayoutProps) => {
    return (
        <main {...props} className={`bg-background dark:bg-foreground min-h-screen ${className}`}>
            <Header />
            <Outlet />
        </main>
    )
}

export default MainLayout
