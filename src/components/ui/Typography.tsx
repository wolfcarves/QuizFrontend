import { cva, VariantProps } from "cva"
import { ComponentProps, ReactNode } from "react"

const typography = cva("", {
    variants: {
        color: {
            primary: "text-primary",
            foreground: "text-foreground dark:text-background",
            background: "text-background dark:text-foreground",

            "primary-light": "text-primary-light",
            "foreground-light": "text-foreground-light",
            "background-light": "text-background-light",
        },
        size: {
            xs: "text-xs",
            sm: "text-sm",
            base: "text-base",
            md: "text-md",
            lg: "text-lg",
            xl: "text-xl",
            "2xl": "text-2xl",
        },
        weight: {
            light: "font-[InterLight]",
            normal: "font-[InterRegular]",
            medium: "font-[InterMedium]",
            semibold: "font-[InterSemiBold]",
        },
    },
    defaultVariants: {
        color: "foreground",
        weight: "normal",
    },
})

interface TypographyProps extends VariantProps<typeof typography> {
    title?: string | number
    className?: ComponentProps<"h1">["className"]
    children?: ReactNode
}

const H1 = ({ title, size, color, weight, className, children }: TypographyProps) => {
    return <h1 className={`text-4xl ${typography({ size, color, weight, className })}`}>{title ?? children}</h1>
}

const H2 = ({ title, size, color, weight, className, children }: TypographyProps) => {
    return <h2 className={`text-3xl ${typography({ size, color, weight, className })}`}>{title ?? children}</h2>
}

const H3 = ({ title, size, color, weight, className, children }: TypographyProps) => {
    return <h3 className={`text-2xl ${typography({ size, color, weight, className })}`}>{title ?? children}</h3>
}

const H4 = ({ title, size, color, weight, className, children }: TypographyProps) => {
    return <h4 className={`text-xl ${typography({ size, color, weight, className })}`}>{title ?? children}</h4>
}

const H5 = ({ title, size, color, weight, className, children }: TypographyProps) => {
    return <h5 className={`text-md ${typography({ size, color, weight, className })}`}>{title ?? children}</h5>
}

const H6 = ({ title, size, color, weight, className, children }: TypographyProps) => {
    return <h6 className={`text-base ${typography({ size, color, weight, className })}`}>{title ?? children}</h6>
}

const P = ({ title, size, color, weight, className, children }: TypographyProps) => {
    return <p className={`text-base ${typography({ size, color, weight, className })}`}>{title ?? children}</p>
}

const Span = ({ title, size, color, weight, className, children }: TypographyProps) => {
    return <span className={`text-base ${typography({ size, color, weight, className })}`}>{title ?? children}</span>
}

export default {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
    Span,
}
