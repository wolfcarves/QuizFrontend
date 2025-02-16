import { BrowserRouter, Route, Routes } from "react-router"
import MainLayout from "@/layout/main-layout"
import HomePage from "../pages/page"
import LoginPage from "../pages/auth/login/page"
import SignupPage from "@/pages/auth/signup/page"
import AuthLayout from "@/layout/auth-layout"
import QuizPage from "@/pages/quiz/page"
import QuizCreatePage from "@/pages/quiz/create/page"

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
                    <Route path="quiz/create" element={<QuizCreatePage />} />
                    <Route path="quiz/:quizId" element={<QuizPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
