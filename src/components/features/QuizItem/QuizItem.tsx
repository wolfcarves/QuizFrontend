import Question from "../Question/Question"
import Choice from "../Choice/Choice"
import { useEffect, useState } from "react"

interface QuizItemProps {
    question?: string
    choices?: string[]
    answer?: string
    isLoading: boolean
    onAnswered?: () => void
}

const QuizItem = ({
    question,
    choices,
    answer,
    isLoading,
    onAnswered,
}: QuizItemProps) => {
    const [hasSelected, setHasSelected] = useState<boolean>(false)

    let timeout1: NodeJS.Timeout
    let timeout2: NodeJS.Timeout

    const handleChoiceClick = () => {
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

    if (!question || !choices || !answer) return <></>

    return (
        <div className={`space-y-10 animate-question`}>
            <Question title={question} />

            <Choice>
                {choices.map((choice, idx) => (
                    <Choice.Item
                        key={idx}
                        title={choice}
                        onClick={handleChoiceClick}
                    />
                ))}
            </Choice>
        </div>
    )
}

export default QuizItem
