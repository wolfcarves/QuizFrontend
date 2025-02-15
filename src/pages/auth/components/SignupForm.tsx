import { Button, Input } from "@/components/ui"
import { useNavigate } from "react-router"

const SignupForm = () => {
    const navigate = useNavigate()

    return (
        <form className="space-y-4">
            <Input placeholder="Username" />
            <Input placeholder="Firstname" />
            <Input placeholder="Lastname" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />

            <div className="space-y-2 pt-5">
                <Button title="Create account" className="w-full" />

                <Button
                    title="Login instead"
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate("/login")}
                />
            </div>
        </form>
    )
}

export default SignupForm
