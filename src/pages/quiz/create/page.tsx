import { Input, Typography } from "@/components/ui"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const quizCreateSchema = z.object({
    title: z.string(),
    description: z.string(),
})

type QuizCreateSchema = z.infer<typeof quizCreateSchema>

const QuizCreatePage = () => {
    const { control } = useForm<QuizCreateSchema>({
        resolver: zodResolver(quizCreateSchema),
    })

    return (
        <>
            <Typography.H4 title="Create Quiz" weight="semibold" />

            <Input label="Title" name="title" control={control} />
            <Input label="Description" name="description" control={control} />
        </>
    )
}

export default QuizCreatePage
