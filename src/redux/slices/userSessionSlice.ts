import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserSession {
    id: number
    firstname: string
    lastname: string
    username: string
}

interface UserSessionState {
    user: UserSession | null
    isAuthenticated: boolean
}

const initialState: UserSessionState = {
    user: null,
    isAuthenticated: false,
}

const userSessionSlice = createSlice({
    name: "userSessionSlice",
    initialState,
    reducers: {
        login: (
            state,
            action: PayloadAction<{
                id: number
                firstname: string
                lastname: string
                username: string
                token: string
            }>,
        ) => {
            state.user = action.payload
            state.isAuthenticated = true
            localStorage.setItem("accessToken", action.payload.token)
        },
    },
})

export const { login } = userSessionSlice.actions
export default userSessionSlice.reducer
