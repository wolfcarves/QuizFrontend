import { Button, Input, InputFloatingLabel, Typography } from "@/components/ui"
import useCreateQuizMutation from "@/hooks/mutations/useCreateQuizMutation"
import { QuestionCreateDTO } from "@/services"
import { theme } from "@/theme/theme"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlinePlus } from "react-icons/ai"
import { FaRegCircleCheck } from "react-icons/fa6"
import { IoCloseSharp } from "react-icons/io5"
import { MdClose } from "react-icons/md"
import { useNavigate } from "react-router"
import { z } from "zod"

const choiceSchema = z.object({
    text: z.string().min(1, "Choice text cannot be empty"),
    is_correct: z.boolean(),
})

const questionSchema = z.object({
    text: z.string().min(1, "Question text cannot be empty"),
    choices: z
        .array(choiceSchema)
        .min(2, "Each question must have at least 2 choices")
        .refine((choices) => choices.some((choice) => choice.is_correct), {
            message: "At least one choice must be marked as correct",
        }),
})

const questionsSchema = z.array(questionSchema)

const quizCreateSchema = z.object({
    title: z
        .string({ required_error: "Quiz title is required." })
        .min(1, { message: "Quiz title is required." }),
    description: z.string().max(100, { message: "Description is too long" }).optional(),
})

export type QuizCreateSchema = z.infer<typeof quizCreateSchema>

type ZodInputError =
    | z.ZodFormattedError<
          {
              text: string
              choices: {
                  text: string
                  is_correct: boolean
              }[]
          }[],
          string
      >
    | undefined

const QuizCreateForm = () => {
    const navigate = useNavigate()

    const baseQuestion = useMemo(
        () => ({
            text: "",
            choices: [
                {
                    text: "string",
                    is_correct: true,
                },
            ],
        }),
        [],
    )

    const [questionsInput, setQuestionsInput] = useState<QuestionCreateDTO[]>([baseQuestion])
    const [inputErrors, setInputErrors] = useState<ZodInputError>()

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<QuizCreateSchema>({
        resolver: zodResolver(quizCreateSchema),
        // defaultValues: {
        //     title: "Example1",
        //     description: "Desc",
        // },
    })

    const handleAddQuestion = () => {
        setQuestionsInput((prev) => {
            return [...prev, baseQuestion]
        })
    }

    const handleRemoveQuestion = (questionIdx: number) => {
        setQuestionsInput((prev) => {
            const updated = prev.filter((_, idx) => idx !== questionIdx)
            return updated
        })
    }

    const handleAddChoice = (questionIdx: number) => {
        setQuestionsInput((prev) => {
            const updated = structuredClone(prev)
            updated[questionIdx].choices?.push({
                text: "",
                is_correct: false,
            })
            return updated
        })
    }

    const handleRemoveChoice = (questionIdx: number, choiceIdx: number) => {
        setQuestionsInput((prev) => {
            const updated = structuredClone(prev)
            updated[questionIdx].choices = updated[questionIdx].choices?.filter(
                (_, idx) => idx !== choiceIdx,
            )
            return updated
        })
    }

    const handleSelectCorrectAnswer = (questionIdx: number, choiceIdx: number) => {
        setQuestionsInput((prev) => {
            const updated = structuredClone(prev)

            updated[questionIdx].choices = updated[questionIdx].choices?.map((choice, idx) => ({
                ...choice,
                is_correct: idx === choiceIdx,
            }))

            return updated
        })
    }

    const { mutateAsync: createQuiz, isPending: isCreateQuizPending } = useCreateQuizMutation()

    const handleSubmitForm = async (createQuizData: QuizCreateSchema) => {
        const result = await questionsSchema.safeParseAsync(questionsInput)

        if (!result.success) {
            const errors = result.error?.format()
            setInputErrors(errors)
            return
        }

        createQuiz(createQuizData)
    }

    const handleCancel = () => {
        const confirmed = window.confirm("Are you sure to discard?")
        if (confirmed) navigate(-1)
    }

    // useEffect(() => {
    //     const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    //         if (true!) {
    //             event.preventDefault()
    //             event.stopPropagation()
    //             return ""
    //         }
    //     }

    //     window.addEventListener("beforeunload", handleBeforeUnload)

    //     return () => window.removeEventListener("beforeunload", handleBeforeUnload)
    // }, [])

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className="pb-10">
            <div>
                <Typography.H5 title="Create Quiz" weight="semibold" />
            </div>

            <div className="py-10 space-y-2">
                <InputFloatingLabel
                    label="Quiz Title"
                    placeholder="Title"
                    name="title"
                    control={control}
                    errorMessage={errors.title?.message}
                />

                <InputFloatingLabel
                    label="Description"
                    placeholder="Description"
                    name="description"
                    control={control}
                    errorMessage={errors.description?.message}
                />
            </div>

            <div className="h-[1px] w-full bg-muted/20" />

            <div className="pt-10">
                <Typography.H6 title="Quiz Items" weight="semibold" />
            </div>

            <div className="space-y-5">
                {questionsInput.map((item, qIdx) => {
                    return (
                        <div key={qIdx} className="relative border-b border-b-muted/20 py-10">
                            {qIdx !== 0 && (
                                <Button
                                    variant="ghost"
                                    className="absolute end-0 top-0"
                                    size="xs"
                                    onClick={() => handleRemoveQuestion(qIdx)}
                                >
                                    Remove Question <IoCloseSharp />
                                </Button>
                            )}

                            <div className="space-y-2">
                                <Input
                                    label="Question"
                                    size="base"
                                    placeholder="Add your question here"
                                    errorMessage={inputErrors?.[qIdx]?.text?._errors?.[0]}
                                    onChange={(event) => {
                                        const value = event.target.value
                                        setQuestionsInput((prev) => {
                                            const updated = structuredClone(prev)
                                            updated[qIdx].text = value
                                            return updated
                                        })
                                        setInputErrors((prev) => {
                                            if (!prev) return prev
                                            const updatedErrors = structuredClone(prev)
                                            delete updatedErrors[qIdx]?.text
                                            return updatedErrors
                                        })
                                    }}
                                />
                            </div>

                            <div key={qIdx} className="rounded-xl p-4 space-y-4 mt-4">
                                <Typography.Span title="Choices" size="sm" weight="semibold" />

                                {item.choices?.map((choice, cIdx) => {
                                    return (
                                        <div key={cIdx} className="flex gap-x-2 items-start w-full">
                                            <Button
                                                size="sm"
                                                variant={choice.is_correct ? "primary" : "ghost"}
                                                rounded="xl"
                                                className="h-[2.4rem] w-[2.4rem] aspect-square"
                                                onClick={() =>
                                                    handleSelectCorrectAnswer(qIdx, cIdx)
                                                }
                                                style={{ padding: 0 }}
                                            >
                                                <FaRegCircleCheck size={12} />
                                            </Button>

                                            <Input
                                                placeholder="Type choice"
                                                size="base"
                                                errorMessage={
                                                    inputErrors?.[qIdx]?.choices?._errors?.[cIdx]
                                                }
                                                onChange={(event) => {
                                                    const value = event.target.value

                                                    setQuestionsInput((prev) => {
                                                        const updated = structuredClone(prev)
                                                        if (
                                                            updated[qIdx].choices &&
                                                            updated[qIdx].choices[cIdx]
                                                        ) {
                                                            updated[qIdx].choices[cIdx].text = value
                                                        }
                                                        return updated
                                                    })

                                                    setInputErrors((prev) => {
                                                        if (!prev) return prev
                                                        const updatedErrors = structuredClone(prev)
                                                        delete updatedErrors[qIdx]?.choices
                                                            ?._errors?.[cIdx]
                                                        return updatedErrors
                                                    })
                                                }}
                                            />

                                            {cIdx !== 0 ? (
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    rounded="full"
                                                    className="h-9 w-9 aspect-square"
                                                    style={{ padding: 0 }}
                                                    onClick={() => handleRemoveChoice(qIdx, cIdx)}
                                                >
                                                    <MdClose size={16} color={theme["muted"]} />
                                                </Button>
                                            ) : (
                                                <div className="w-11" />
                                            )}
                                        </div>
                                    )
                                })}

                                <Button
                                    variant="ghost"
                                    size="xs"
                                    onClick={() => handleAddChoice(qIdx)}
                                >
                                    <AiOutlinePlus color={theme["muted"]} />
                                    <Typography.Span
                                        title="Add choice"
                                        weight="medium"
                                        color="muted"
                                        size="sm"
                                    />
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <Button variant="outline" className="w-full my-5" onClick={handleAddQuestion}>
                Add question
            </Button>

            <div className="flex gap-x-2 justify-end items-center fixed bottom-0 w-full max-w-xl mx-auto bg-background-light border-t border-muted/20 py-3">
                <Button variant="outline" onClick={handleCancel}>
                    Cancel
                </Button>

                <Button type="submit" isLoading={isCreateQuizPending}>
                    Publish
                </Button>
            </div>
        </form>
    )
}

export default QuizCreateForm
