import { BrowserRouter, Route, Routes } from "react-router"
import MainLayout from "@/layout/main-layout"
import HomePage from "../pages/home/home"
import LoginPage from "../pages/auth/login"
import SignupPage from "@/pages/auth/signup"
import AuthLayout from "@/layout/auth-layout"
import QuizPage from "@/pages/quiz/QuizPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                </Route>

                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="quiz/create" element={<HomePage />} />
                    <Route path="quiz/:quizId" element={<QuizPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
