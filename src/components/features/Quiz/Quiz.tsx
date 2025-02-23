import { Avatar, Typography } from "@/components/ui"
import { theme } from "@/theme/theme"
import { MdArrowRightAlt } from "react-icons/md"
import { Link } from "react-router"
import { QuizDTO } from "@/services"
import { format } from "date-fns"

const Quiz = ({ id, title, description, created_at, user }: QuizDTO) => {
    const fullname = `${user?.firstname} ${user?.lastname}`
    const createdAt = format(new Date(created_at!), "PPpp")

    return (
        <Link to={`/quiz/${id}`}>
            <div className="py-5 border-b border-muted/20 cursor-pointer hover:opacity-90">
                <div className="flex gap-x-2 items-center pb-3">
                    <Avatar name={`${user?.firstname[0]}${user?.lastname[0]}`} />

                    <Typography.Span
                        title={`Published by ${fullname}`}
                        size="sm"
                        className="pb-0.5"
                    />
                </div>

                <div>
                    <Typography.H4 title={title} weight="bold" />
                    <Typography.H6 title={description} color="muted" />
                </div>

                <div className="flex justify-between pt-5">
                    <div className="flex items-center gap-x-4">
                        <Typography.Span title={createdAt} size="xs" color="muted" />

                        {/* <div className="flex gap-x-1">
                            <MdOutlineEmojiPeople color={theme["muted"]} />
                            <Typography.Span title="52" size="xs" color="muted" />
                        </div>

                        <div className="flex gap-x-1">
                            <IoCheckmarkCircleSharp color={theme["muted"]} />
                            <Typography.Span title="10" size="xs" color="muted" />
                        </div> */}
                    </div>

                    <div className="flex items-center gap-x-2">
                        <Typography.Span
                            title="Take quiz"
                            size="xs"
                            color="secondary"
                            weight="semibold"
                        />
                        <MdArrowRightAlt color={theme["secondary"]} size={22} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Quiz
