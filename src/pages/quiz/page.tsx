import { QuizItem } from "@/components/features"
import { Typography } from "@/components/ui"
import withAuthGuard from "@/higher-order/withAuthGuard"
import useGetQuestionsByQuizId from "@/hooks/queries/useGetQuestionsByQuizId"
import { useState } from "react"
import { useParams } from "react-router"

const QUESTIONS = [
    {
        question:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero natus praesentium. Suscipit, eaque quis in quae dolore aspernatur corrupti.",
        choices: ["Until June", "Until June 2"],
        answer: "Until June 2",
    },
]

const QuizPage = () => {
    const { quizId } = useParams<{ quizId: string }>()
    const [questionIdx, setQuestionIdx] = useState<number>(0)

    const { data: questions } = useGetQuestionsByQuizId(Number(quizId))

    const handleOnAnswered = () => {
        setQuestionIdx((prev) => prev + 1)
    }

    return (
        <div className="flex flex-col gap-y-10 justify-center text-center my-auto min-h-[60vh] w-full">
            {questions?.[questionIdx] ? (
                <QuizItem
                    key={questionIdx}
                    text={questions[questionIdx].text!}
                    choices={questions[questionIdx].choices}
                    answer_id={questions[questionIdx].answer_id!}
                    isLoading={true}
                    onAnswered={handleOnAnswered}
                />
            ) : (
                <Typography.H4 weight="medium">Congratulation you finish the quiz !</Typography.H4>
            )}
        </div>
    )
}

export default withAuthGuard(QuizPage)
