import { Typography } from "@/components/ui"
import SignupForm from "../components/SignupForm"

const SignupPage = () => {
    return (
        <>
            <div className="flex flex-col text-center space-y-4">
                <Typography.H3 title="Create account" weight="bold" />
                <SignupForm />
            </div>
        </>
    )
}

export default SignupPage
