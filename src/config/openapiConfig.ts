import { OpenAPI } from "@/services"

export const applyOpenApiConfig = () => {
    OpenAPI.BASE = "http://localhost:5000"
    OpenAPI.WITH_CREDENTIALS = true
    OpenAPI.TOKEN = String(localStorage.getItem("access_token"))
}
