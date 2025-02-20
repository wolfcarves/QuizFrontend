import { Typography } from "@/components/ui"
import LoginForm from "../components/LoginForm"

const LoginPage = () => {
    return (
        <>
            <div className="flex flex-col text-center">
                <Typography.H3 title="Login as user" weight="bold" />
                <Typography.P
                    title="Welcome back, Please enter your details"
                    color="muted"
                />
            </div>

            <LoginForm />
        </>
    )
}

export default LoginPage
