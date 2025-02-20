import { Button, Input } from "@/components/ui"
import useLoginUser from "@/hooks/post/useLoginUser"
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
    const { mutateAsync } = useLoginUser()

    const {
        handleSubmit,
        control,
        formState: { errors },
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
        await mutateAsync(data)
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
