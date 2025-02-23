import { QuestionDTO, QuestionService } from "@/services"
import { useQuery } from "@tanstack/react-query"

export const GET_QUESTIONS_BY_QUIZ_ID = () => "GET_QUESTIONS_BY_QUIZ_ID"

export default function useGetQuestionsByQuizId(quizId: number) {
    return useQuery({
        queryKey: [GET_QUESTIONS_BY_QUIZ_ID()],
        queryFn: async (): Promise<QuestionDTO[]> => {
            const response = await QuestionService.getApiV1QuestionsByQuizId({ quizId })
            return response
        },
        enabled: !!quizId,
    })
}
