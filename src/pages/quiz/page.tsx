import { QuizItem } from "@/components/features"
import { Button, Loading, Typography } from "@/components/ui"
import withAuthGuard from "@/higher-order/withAuthGuard"
import useGetQuestionsByQuizId from "@/hooks/queries/useGetQuestionsByQuizId"
import { useState } from "react"
import { useNavigate, useParams } from "react-router"

const QuizPage = () => {
    const navigate = useNavigate()
    const [score, setScore] = useState<number>(0)
    const { quizId } = useParams<{ quizId: string }>()
    const [questionIdx, setQuestionIdx] = useState<number>(0)

    const { data: questions, isPending: isQuestionsPending } = useGetQuestionsByQuizId(
        Number(quizId),
    )

    const handleOnAnswered = (isAnswerCorrect: boolean) => {
        setQuestionIdx((prev) => prev + 1)
        setScore((prev) => (isAnswerCorrect ? (prev += 1) : prev))
    }

    const handleRestartQuiz = () => {
        setScore(0)
        setQuestionIdx(0)
    }

    if (isQuestionsPending) {
        return <Loading />
    }

    return (
        <div className="flex flex-col gap-y-10 justify-center text-center my-auto min-h-[60vh] w-full">
            {questions?.[questionIdx] ? (
                <QuizItem
                    key={questionIdx}
                    text={questions[questionIdx].text!}
                    choices={questions[questionIdx].choices}
                    answer_id={questions[questionIdx].answer_id!}
                    onAnswered={handleOnAnswered}
                />
            ) : (
                <div className="space-y-10">
                    <div className="space-y-2">
                        <Typography.H4 weight="medium">
                            Congratulation you finish the quiz !
                        </Typography.H4>
                        <Typography.H4 weight="medium">
                            {score}/{questions?.length}
                        </Typography.H4>
                    </div>

                    <div className="flex gap-x-2 mx-auto w-max">
                        <Button
                            variant="outline-solid"
                            className="mt-5"
                            size="xs"
                            onClick={handleRestartQuiz}
                        >
                            Restart
                        </Button>

                        <Button
                            variant="outline-solid"
                            className="mt-5"
                            size="xs"
                            onClick={() => {
                                navigate("/")
                                handleRestartQuiz()
                            }}
                        >
                            Go back
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default withAuthGuard(QuizPage)
