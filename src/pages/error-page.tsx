import { Button, Typography } from "@/components/ui"
import { useNavigate } from "react-router"

interface ErrorPageProps {
    title: string
    subtitle: string
}

const ErrorPage = ({ title, subtitle }: ErrorPageProps) => {
    const navigate = useNavigate()

    return (
        <div className="absolute w-max h-max inset-0 m-auto text-center pb-10">
            <Typography.H1 title={title} weight="bold" />
            <Typography.H6 title={subtitle} weight="medium" />

            <Button
                onClick={() => navigate("/login")}
                variant="outline-solid"
                className="mt-5"
                size="xs"
            >
                Take me back to the first time I knew you
            </Button>
        </div>
    )
}

export default ErrorPage
