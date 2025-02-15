import Logo from "../Logo/Logo"
import HeaderProfileMenu from "./HeaderProfileMenu"

const Header = () => {
    return (
        <header className="flex justify-between items-center min-h-20 w-full bg-background border-b border-b-muted/20 px-8">
            <Logo />
            <HeaderProfileMenu />
        </header>
    )
}

export default Header
