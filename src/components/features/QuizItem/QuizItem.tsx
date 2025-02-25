import Question from "../Question/Question"
import Choice from "../Choice/Choice"
import { useEffect, useState } from "react"
import { QuestionDTO } from "@/services"

interface QuizItemProps extends QuestionDTO {
    onAnswered?: (isAnswerCorrect: boolean) => void
}

const QuizItem = ({ text: question, choices, answer_id, onAnswered }: QuizItemProps) => {
    const [disableChoices, setDisableChoices] = useState<boolean>(false)

    let timeout: NodeJS.Timeout

    const handleChoiceClick = (choiceId: number, answerId: number) => {
        setDisableChoices(true)

        timeout = setTimeout(() => {
            onAnswered?.(choiceId === answerId)
        }, 1200)
    }

    const clearTimers = () => {
        clearTimeout(timeout)
    }

    useEffect(() => {
        return clearTimers
    }, [])

    if (!question || !choices || !answer_id) return <></>

    return (
        <div className={`space-y-10 animate-question`}>
            <Question title={question} />

            <Choice>
                {choices.map((choice, idx) => (
                    <Choice.Item
                        key={idx}
                        choiceId={choice.id!}
                        title={choice.text!}
                        onChoiceClick={() => handleChoiceClick(choice.id!, answer_id)}
                        disabled={disableChoices}
                    />
                ))}
            </Choice>
        </div>
    )
}

export default QuizItem
