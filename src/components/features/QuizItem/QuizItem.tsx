import Question from "../Question/Question"
import Choice from "../Choice/Choice"
import { useEffect, useState } from "react"
import { ChoiceDTO, QuestionDTO } from "@/services"

interface QuizItemProps extends QuestionDTO {
    isLoading: boolean
    onAnswered?: () => void
}

const QuizItem = ({ text: question, choices, answer_id, isLoading, onAnswered }: QuizItemProps) => {
    const [disableChoices, setDisableChoices] = useState<boolean>(false)
    const [hasSelected, setHasSelected] = useState<boolean>(false)

    let timeout1: NodeJS.Timeout
    let timeout2: NodeJS.Timeout

    const handleChoiceClick = () => {
        setDisableChoices(true)

        timeout1 = setTimeout(() => {
            setHasSelected(true)
        }, 700)

        timeout2 = setTimeout(() => {
            onAnswered?.()
        }, 1200)
    }

    const clearTimers = () => {
        clearTimeout(timeout1)
        clearTimeout(timeout2)
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
                        title={choice.text!}
                        onClick={handleChoiceClick}
                        disabled={disableChoices}
                    />
                ))}
            </Choice>
        </div>
    )
}

export default QuizItem
