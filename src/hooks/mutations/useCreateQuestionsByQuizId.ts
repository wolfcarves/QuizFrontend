import { useMutation } from "@tanstack/react-query"
import { QuestionCreateDTO, QuestionService } from "@/services"

const CREATE_QUESTIONS_BY_QUIZ_ID_KEY = () => "CREATE_QUESTIONS_BY_QUIZ_ID_KEY"

export default function useCreateQuestionsByQuizId() {
    return useMutation({
        mutationKey: [CREATE_QUESTIONS_BY_QUIZ_ID_KEY()],
        mutationFn: async (data: { quizId: number; requestBody?: Array<QuestionCreateDTO> }) => {
            const response = await QuestionService.postApiV1CreateQuestion(data)
            return response
        },
        onSuccess: async () => {},
    })
}
