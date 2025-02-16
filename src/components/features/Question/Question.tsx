import { Typography } from "@/components/ui"

const Question = ({ title }: { title: string }) => {
    return (
        <div className="flex flex-col gap-y-3 text-center">
            <Typography.H4 title={title} weight="semibold" />
        </div>
    )
}

export default Question
