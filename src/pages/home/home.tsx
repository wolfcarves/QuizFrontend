import { Quiz } from "@/components/modules"
import { Button } from "@/components/ui"

const HomePage = () => {
    return (
        <div className="py-10">
            <div className="w-full max-w-xl mx-auto space-y-2">
                <div className="flex items-center gap-x-2 py-5">
                    <Button
                        title="Create quiz"
                        variant="outline"
                        size="xxs"
                        rounded="full"
                    />
                </div>
                <Quiz />
            </div>
        </div>
    )
}

export default HomePage
