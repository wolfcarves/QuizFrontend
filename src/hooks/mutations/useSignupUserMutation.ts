import { SignupSchema } from "@/pages/auth/components/SignupForm"
import { AuthService, UserSignUpDTO } from "@/services"
import { useMutation } from "@tanstack/react-query"

const SIGNUP_USER_KEY = () => "SIGNUP_USER_KEY"

export default function useSignupUserMutation() {
    return useMutation({
        mutationKey: [SIGNUP_USER_KEY()],
        mutationFn: async (requestBody: UserSignUpDTO) => {
            const response = await AuthService.postApiV1AuthSignup({ requestBody })
            return response
        },
        onSuccess: async () => {},
    })
}
