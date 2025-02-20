import { Typography } from "@/components/ui"

interface ErrorPageProps {
    title: string
    subtitle: string
}

const ErrorPage = ({ title, subtitle }: ErrorPageProps) => {
    return (
        <div className="absolute w-max h-max inset-0 m-auto text-center pb-10">
            <Typography.H1 title={title} weight="bold" />
            <Typography.H6 title={subtitle} weight="medium" />
        </div>
    )
}

export default ErrorPage
