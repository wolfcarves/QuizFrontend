import { axiosInstance } from "@/api/axiosIntance"
import { LoginSchema } from "@/pages/auth/components/LoginForm"
import { login } from "@/redux/slices/userSessionSlice"
import { UserDTO } from "@/services"
import { useMutation } from "@tanstack/react-query"
import { useDispatch } from "react-redux"

interface LoginUserResponse extends UserDTO {
    token: string
}

const LOGIN_USER_KEY = () => "LOGIN_USER_KEY"

export default function useLoginUser() {
    const dispatch = useDispatch()

    return useMutation({
        mutationKey: [LOGIN_USER_KEY()],
        mutationFn: async (requestBody: LoginSchema) => {
            const response = await axiosInstance.post(
                "/auth/login",
                requestBody,
            )

            const reponseData = response.data as LoginUserResponse

            if (reponseData) dispatch(login(reponseData))

            return response
        },
    })
}
