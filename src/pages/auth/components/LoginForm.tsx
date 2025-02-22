import { Button, Input } from "@/components/ui"
import useLoginUserMutation from "@/hooks/mutations/useLoginUserMutation"
import { ApiError } from "@/services"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { z } from "zod"

const loginSchema = z.object({
    username: z.string({ required_error: "Please enter your username" }),
    password: z.string({ required_error: "Please enter your password" }),
})

export type LoginSchema = z.infer<typeof loginSchema>

const LoginForm = () => {
    const navigate = useNavigate()

    const { mutateAsync: loginUser, isPending: isLoginPending } =
        useLoginUserMutation()

    const {
        handleSubmit,
        control,
        formState: { errors },
        setError,
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
            username: "cazcade",
            password: "awdawd123",
        },
    })

    const handleSubmitForm = async (data: LoginSchema) => {
        try {
            const response = await loginUser(data)
            if (response) navigate("/")
        } catch (error) {
            if (error instanceof ApiError) {
                const errorMessage = error.body.message
                if (errorMessage === "Username or password is incorrect") {
                    setError("username", { message: errorMessage })
                    setError("password", { message: errorMessage })
                }
            }
        }
    }

    return (
        <form className="space-y-7" onSubmit={handleSubmit(handleSubmitForm)}>
            <div>
                <Input
                    name="username"
                    control={control}
                    label="Username"
                    errorMessage={errors.username?.message}
                />
                <Input
                    name="password"
                    control={control}
                    type="password"
                    label="Password"
                    errorMessage={errors.password?.message}
                />
            </div>
            <div className="space-y-2">
                <Button
                    type="submit"
                    title="Login"
                    className="w-full"
                    size="lg"
                    isLoading={isLoginPending}
                    disabled={isLoginPending}
                />
                <Button
                    title="Create an account"
                    variant="ghost"
                    className="w-full"
                    size="lg"
                    onClick={() => navigate("/signup")}
                />
            </div>
        </form>
    )
}

export default LoginForm
