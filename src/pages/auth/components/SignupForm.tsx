import { Button, InputFloatingLabel } from "@/components/ui"
import useSignupUserMutation from "@/hooks/mutations/useSignupUserMutation"
import { ApiError } from "@/services"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"
import { z } from "zod"

const signupSchema = z
    .object({
        username: z.string().min(3, "Username must be at least 3 characters long"),
        firstname: z.string().min(1, "First name is required"),
        lastname: z.string().min(1, "Last name is required"),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters long")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[0-9]/, "Password must contain at least one number")
            .regex(/[\W_]/, "Password must contain at least one special character"),
        confirm_password: z.string(),
    })
    .refine((data) => data.password === data.confirm_password, {
        message: "Passwords must match",
        path: ["confirm_password"],
    })

export type SignupSchema = z.infer<typeof signupSchema>

const SignupForm = () => {
    const navigate = useNavigate()
    const { mutateAsync: signupUser, isPending: isSignupUserPending } = useSignupUserMutation()

    const {
        control,
        formState: { errors },
        handleSubmit,
        setError,
    } = useForm<SignupSchema>({
        resolver: zodResolver(signupSchema),
    })

    const handleSubmitForm = handleSubmit(async (data) => {
        try {
            await signupUser(data)
            toast.success("Account created successfully!")
            navigate("/login")
        } catch (error) {
            if (error instanceof ApiError) {
                const errorMessage = error.body.message

                if (errorMessage === "Username already taken.") {
                    setError("username", { message: errorMessage })
                }
            }
        }
    })

    return (
        <form className="space-y-4" onSubmit={handleSubmitForm}>
            <InputFloatingLabel
                name="username"
                control={control}
                placeholder="Username"
                errorMessage={errors.username?.message}
            />
            <InputFloatingLabel
                name="firstname"
                control={control}
                placeholder="Firstname"
                errorMessage={errors.firstname?.message}
            />
            <InputFloatingLabel
                name="lastname"
                control={control}
                placeholder="Lastname"
                errorMessage={errors.lastname?.message}
            />
            <InputFloatingLabel
                name="password"
                control={control}
                type="password"
                placeholder="Password"
                errorMessage={errors.password?.message}
            />
            <InputFloatingLabel
                name="confirm_password"
                control={control}
                type="password"
                placeholder="Confirm Password"
                errorMessage={errors.confirm_password?.message}
            />

            <div className="space-y-2 pt-5">
                <Button
                    type="submit"
                    title="Create account"
                    className="w-full"
                    isLoading={isSignupUserPending}
                />

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
