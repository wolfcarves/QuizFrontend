import { Quiz } from "@/components/modules"
import { Button } from "@/components/ui"

const HomePage = () => {
    return (
        <>
            <div className="flex items-center gap-x-2 py-5">
                <Button
                    title="Create quiz"
                    variant="outline"
                    size="xxs"
                    rounded="full"
                />
            </div>

            <div className="space-y-2">
                <Quiz />
            </div>
        </>
    )
}

export default HomePage
