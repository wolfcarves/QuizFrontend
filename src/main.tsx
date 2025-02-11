import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import IndexPage from "./pages"
import "./styles/globals.css"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<IndexPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
