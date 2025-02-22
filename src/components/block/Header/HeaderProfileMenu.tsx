import { Avatar, Button, Typography } from "@/components/ui"
import useLogoutUserMutation from "@/hooks/mutations/useLogoutUserMutation"
import { useState } from "react"
import { RiArrowDownSLine } from "react-icons/ri"

const HeaderProfileMenu = () => {
    const { mutateAsync: logoutUser } = useLogoutUserMutation()

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

    const handleLogout = async () => {
        // navigate("/login")
        await logoutUser()
        setIsDropdownOpen(false)
    }

    return (
        <div className="relative">
            <button
                className="flex gap-x-4 items-center hover:opacity-90"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
                <div className="flex gap-x-1.5 items-center">
                    <Avatar size="lg" />
                    <Typography.Span
                        title="Rodel Crisosto"
                        weight="semibold"
                        size="sm"
                    />
                </div>
                <RiArrowDownSLine className="mt-1" />
            </button>

            {isDropdownOpen && (
                <div className="absolute top-14 end-0 w-[15rem] bg-background border border-muted/20 rounded-xl shadow-sm p-2">
                    <Button
                        title="Profile"
                        variant="ghost"
                        className="w-full"
                        textCenter={false}
                        rounded="lg"
                        onClick={handleLogout}
                    />

                    <Button
                        title="Logout"
                        variant="ghost"
                        className="w-full"
                        textCenter={false}
                        rounded="lg"
                        onClick={handleLogout}
                    />
                </div>
            )}
        </div>
    )
}

export default HeaderProfileMenu
