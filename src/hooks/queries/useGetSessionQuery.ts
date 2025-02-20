import { getSession } from "@/redux/slices/userSessionSlice"
import { AuthService } from "@/services"
import { useQuery } from "@tanstack/react-query"
import { useDispatch } from "react-redux"

const GET_USER_SESSION_KEY = () => "GET_USER_SESSION_KEY"

export default function useGetSessionQuery() {
    const dispatch = useDispatch()

    return useQuery({
        queryKey: [GET_USER_SESSION_KEY()],
        queryFn: async () => {
            const response = await AuthService.getApiV1AuthSession()

            console.log("response", response)

            if (response) dispatch(getSession(response))

            return response
        },
        staleTime: 1000 * 60 * 3,
    })
}
