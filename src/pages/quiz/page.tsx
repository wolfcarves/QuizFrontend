import { QuizItem } from "@/components/features"
import { Loading, Typography } from "@/components/ui"
import withAuthGuard from "@/higher-order/withAuthGuard"
import useGetQuestionsByQuizId from "@/hooks/queries/useGetQuestionsByQuizId"
import { useState } from "react"
import { useParams } from "react-router"

const QuizPage = () => {
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
                <>
                    <Typography.H4 weight="medium">
                        Congratulation you finish the quiz !
                    </Typography.H4>
                    <Typography.H4 weight="medium">
                        {score}/{questions?.length}
                    </Typography.H4>
                </>
            )}
        </div>
    )
}

export default withAuthGuard(QuizPage)
