import { Quiz } from "@/components/features"
import { Button } from "@/components/ui"
import { useNavigate } from "react-router"

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="flex items-center gap-x-2 py-5">
                <Button
                    title="Create quiz"
                    variant="outline"
                    size="xxs"
                    rounded="full"
                    onClick={() => navigate("/quiz/create")}
                />
            </div>

            <div className="space-y-2">
                <Quiz />
            </div>
        </>
    )
}

export default HomePage
