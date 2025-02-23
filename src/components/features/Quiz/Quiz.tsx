import { Avatar, Typography } from "@/components/ui"
import { theme } from "@/theme/theme"
import { MdOutlineEmojiPeople, MdArrowRightAlt } from "react-icons/md"
import { IoCheckmarkCircleSharp } from "react-icons/io5"
import { Link } from "react-router"

const Quiz = () => {
    return (
        <Link to="/quiz/1">
            <div className="py-5 border-b border-muted/20 cursor-pointer hover:opacity-90">
                <div className="flex gap-x-2 items-center pb-3">
                    <Avatar />

                    <Typography.Span
                        title="Published by Rodel Crisosto"
                        size="sm"
                        className="pb-0.5"
                    />
                </div>

                <div>
                    <Typography.H4 title="Data Structure and Algorithm" weight="bold" />
                    <Typography.H6
                        title="Let' see how good you are in data structure and algorithm."
                        color="muted"
                    />
                </div>

                <div className="flex justify-between pt-5">
                    <div className="flex items-center gap-x-4">
                        <Typography.Span title="June 18, 2000" size="xs" color="muted" />

                        <div className="flex gap-x-1">
                            <MdOutlineEmojiPeople color={theme["muted"]} />
                            <Typography.Span title="52" size="xs" color="muted" />
                        </div>

                        <div className="flex gap-x-1">
                            <IoCheckmarkCircleSharp color={theme["muted"]} />
                            <Typography.Span title="10" size="xs" color="muted" />
                        </div>
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
