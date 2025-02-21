import { applyOpenApiConfig } from "@/config/openapiConfig"
import { AuthService, UserDTO } from "@/services"
import { useQuery } from "@tanstack/react-query"

export const GET_USER_SESSION_KEY = () => "GET_USER_SESSION_KEY"

export default function useGetSessionQuery() {
    return useQuery({
        queryKey: [GET_USER_SESSION_KEY()],
        queryFn: async (): Promise<UserDTO | null> => {
            applyOpenApiConfig()

            try {
                const response = await AuthService.getApiV1AuthSession()
                return response
            } catch {
                return null
            }
        },
        staleTime: 1000 * 60 * 5,
    })
}
