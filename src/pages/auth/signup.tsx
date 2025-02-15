import { Typography } from "@/components/ui"
import SignupForm from "./components/SignupForm"

const SignupPage = () => {
    return (
        <>
            <div className="flex flex-col text-center">
                <Typography.H3 title="Create account" weight="bold" />
            </div>

            <SignupForm />
        </>
    )
}

export default SignupPage
