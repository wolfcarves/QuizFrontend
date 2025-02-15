import { Button, Card } from "@/components/ui"

const CreateQuizCard = () => {
    return (
        <>
            <Card>
                <Card.Title>Quiz Aquino</Card.Title>
                <Card.Description>
                    This quiz app is open for all means that you can answer
                    quizzes that were created by other user and you can create
                    on your own as well.
                </Card.Description>

                <Button
                    title="Create one"
                    variant="outline"
                    className="w-max"
                    size="xs"
                    rounded="xl"
                />
            </Card>
        </>
    )
}

export default CreateQuizCard
