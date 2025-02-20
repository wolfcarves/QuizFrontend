import { LoginSchema } from "@/pages/auth/components/LoginForm"
import { login } from "@/redux/slices/userSessionSlice"
import { AuthService } from "@/services"
import { useMutation } from "@tanstack/react-query"
import { useDispatch } from "react-redux"

const LOGIN_USER_KEY = () => "LOGIN_USER_KEY"

export default function useLoginUserMutation() {
    const dispatch = useDispatch()

    return useMutation({
        mutationKey: [LOGIN_USER_KEY()],
        mutationFn: async (requestBody: LoginSchema) => {
            const response = await AuthService.postApiV1AuthLogin({
                requestBody,
            })

            if (response) dispatch(login(response))

            return response
        },
    })
}
