import { AuthService } from "@/services"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { GET_USER_SESSION_KEY } from "../queries/useGetSessionQuery"

const LOGOUT_USER_KEY = () => "LOGOUT_USER_KEY"

export default function useLogoutUserMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: [LOGOUT_USER_KEY()],
        mutationFn: async () => {
            const response = await AuthService.deleteApiV1AuthLogout()

            localStorage.removeItem("access_token")

            return response
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: [GET_USER_SESSION_KEY()],
            })
        },
    })
}
