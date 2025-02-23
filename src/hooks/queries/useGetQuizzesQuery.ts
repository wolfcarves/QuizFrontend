import { QuizDTO, QuizService } from "@/services"
import { useQuery } from "@tanstack/react-query"

export const GET_QUIZZES_QUERY_KEY = () => "GET_QUIZZES_QUERY_KEY"

export default function useGetQuizzesQuery() {
    return useQuery({
        queryKey: [GET_QUIZZES_QUERY_KEY()],
        queryFn: async (): Promise<QuizDTO[]> => {
            const response = await QuizService.getApiV1GetQuizzes()
            return response
        },
    })
}
