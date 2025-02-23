import { useMutation, useQueryClient } from "@tanstack/react-query"
import { QuizCreateDTO, QuizService } from "@/services"
import { GET_QUIZZES_QUERY_KEY } from "../queries/useGetQuizzesQuery"

const CREATE_QUIZ_MUTATION_KEY = () => "CREATE_QUIZ_MUTATION_KEY"

export default function useCreateQuizMutation() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: [CREATE_QUIZ_MUTATION_KEY()],
        mutationFn: async (requestBody: QuizCreateDTO) => {
            const response = await QuizService.postApiV1CreateQuiz({ requestBody })
            return response
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [GET_QUIZZES_QUERY_KEY()] })
        },
    })
}
