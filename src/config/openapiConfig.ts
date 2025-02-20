import { OpenAPI } from "@/services"

export const applyOpenApiConfig = () => {
    OpenAPI.BASE = "http://localhost:5000/api/v1"
    OpenAPI.WITH_CREDENTIALS = true
}
