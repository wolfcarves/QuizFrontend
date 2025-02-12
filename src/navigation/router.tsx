import { BrowserRouter, Route, Routes } from "react-router"
import MainLayout from "@/layout/main-layout"

import HomePage from "../pages/home/home"
import LoginPage from "../pages/auth/login"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                </Route>

                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
