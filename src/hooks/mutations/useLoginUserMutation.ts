import { LoginSchema } from "@/pages/auth/components/LoginForm"
import { AuthService } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { GET_USER_SESSION_KEY } from "../queries/useGetSessionQuery"

const LOGIN_USER_KEY = () => "LOGIN_USER_KEY"

export default function useLoginUserMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: [LOGIN_USER_KEY()],
        mutationFn: async (requestBody: LoginSchema) => {
            const response = await AuthService.postApiV1AuthLogin({
                requestBody,
            })

            return response
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: [GET_USER_SESSION_KEY()],
            })
        },
    })
}
