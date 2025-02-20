import { QuizItem } from "@/components/features"
import { Typography } from "@/components/ui"
import withAuthGuard from "@/higher-order/withAuthGuard"
import { useState } from "react"

const QUESTIONS = [
    {
        question:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero natus praesentium. Suscipit, eaque quis in quae dolore aspernatur corrupti.",
        choices: ["Until June", "Until June 2"],
        answer: "Until June 2",
    },
    {
        question:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, voluptatibus.",
        choices: ["Rodel", "Crisosto"],
        answer: "Rodel",
    },
    {
        question:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, voluptatibus.",
        choices: ["Rodel", "Crisosto"],
        answer: "Rodel",
    },
    {
        question:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, voluptatibus.",
        choices: ["Rodel", "Crisosto"],
        answer: "Rodel",
    },
    {
        question:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, voluptatibus.",
        choices: ["Rodel", "Crisosto"],
        answer: "Rodel",
    },
    {
        question:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, voluptatibus.",
        choices: ["Rodel", "Crisosto"],
        answer: "Rodel",
    },
]

const QuizPage = () => {
    const [questionIdx, setQuestionIdx] = useState<number>(0)

    const handleOnAnswered = () => {
        setQuestionIdx((prev) => prev + 1)
    }

    return (
        <div className="flex flex-col gap-y-10 justify-center items-center my-auto min-h-[60vh] w-full">
            {QUESTIONS[questionIdx] ? (
                <QuizItem
                    key={questionIdx}
                    question={QUESTIONS[questionIdx].question}
                    choices={QUESTIONS[questionIdx].choices}
                    answer={QUESTIONS[questionIdx].answer}
                    isLoading={true}
                    onAnswered={handleOnAnswered}
                />
            ) : (
                <Typography.H4 weight="medium">
                    Congratulation you finish the quiz !
                </Typography.H4>
            )}
        </div>
    )
}

export default withAuthGuard(QuizPage)
