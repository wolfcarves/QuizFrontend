import { ComponentProps } from "react"
import Typography, { TypographyProps } from "./Typography"

type CardProps = ComponentProps<"div">

const Card = ({ ...props }: CardProps) => {
    return (
        <div
            className="flex flex-col bg-card w-full border border-muted/30 space-y-3 text-start rounded-3xl p-5"
            {...props}
        />
    )
}

export const CardTitle = (props: TypographyProps) => {
    return <Typography.H5 weight="semibold" {...props} />
}

export const CardDescription = (props: TypographyProps) => {
    return <Typography.H5 weight="normal" size="sm" {...props} />
}

Card.Title = CardTitle
Card.Description = CardDescription

export default Card
