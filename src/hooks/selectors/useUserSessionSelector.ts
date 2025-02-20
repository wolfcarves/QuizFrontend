import { AppRootState } from "@/redux/store"
import { useSelector } from "react-redux"

export default function useUserSessionSelector() {
    return useSelector((state: AppRootState) => state.userSession)
}
