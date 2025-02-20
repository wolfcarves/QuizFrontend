import { UserDTO as BaseUserDTO } from "@/services"
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

interface UserDTO extends BaseUserDTO {
    access_token: string
}

const userSessionSlice = createSlice({
    name: "userSessionSlice",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserDTO>) => {
            state.user = action.payload
            state.isAuthenticated = true
            localStorage.setItem("access_token", action.payload.access_token)
        },
        getSession: (
            state,
            action: PayloadAction<Omit<UserDTO, "access_token">>,
        ) => {
            state.user = action.payload
            state.isAuthenticated = !action.payload
        },
    },
})

export const { login, getSession } = userSessionSlice.actions
export default userSessionSlice.reducer
