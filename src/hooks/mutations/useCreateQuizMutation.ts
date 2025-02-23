import { useMutation } from "@tanstack/react-query"
import { QuizCreateDTO, QuizService } from "@/services"

const CREATE_QUIZ_MUTATION_KEY = () => "CREATE_QUIZ_MUTATION_KEY"

export default function useCreateQuizMutation() {
    return useMutation({
        mutationKey: [CREATE_QUIZ_MUTATION_KEY()],
        mutationFn: async (requestBody: QuizCreateDTO) => {
            const response = await QuizService.createQuiz({ requestBody })
            return response
        },
        onSuccess: async () => {},
    })
}
