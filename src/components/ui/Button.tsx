import { theme } from "@/theme/theme"
import { cva, VariantProps } from "cva"
import * as React from "react"
import { AiOutlineLoading } from "react-icons/ai"

const button = cva("flex gap-x-3 items-center", {
    variants: {
        variant: {
            primary:
                "bg-primary text-background-light hover:bg-primary/90 duration-100",
            ghost: "bg-opacity-0 hover:bg-muted/10 duration-100 ",
            outline: "border border-foreground/20 hover:bg-foreground/5",
            "outline-solid": "border border-primary hover:bg-foreground/5",
            disabled: "bg-muted opacity-50 cursor-not-allowed",
        },
        size: {
            xxs: "px-[14px] py-[6px] text-sm",
            xs: "px-[14px] py-[8px] text-sm",
            sm: "px-[14px] py-[10px] text-sm",
            base: "px-[14px] py-[12px] text-sm",
            lg: "px-[16px] py-[16px] text-sm",
        },
        weight: {
            light: "font-[InterLight]",
            normal: "font-[InterRegular]",
            medium: "font-[InterMedium]",
            semibold: "font-[InterSemiBold]",
            bold: "font-[InterBold]",
            black: "font-[InterBlack]",
        },
        rounded: {
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            full: "rounded-full",
        },
        textCenter: {
            true: "justify-center",
            false: "justify-start",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "base",
        weight: "medium",
        rounded: "2xl",
        textCenter: true,
    },
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {
    isLoading?: boolean
    visible?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            weight,
            rounded,
            isLoading = false,
            title,
            children,
            type,
            textCenter,
            disabled,
            ...props
        },
        ref,
    ) => {
        return (
            <button
                type={type ?? "button"}
                className={button({
                    className,
                    variant: disabled ? "disabled" : variant,
                    rounded,
                    size,
                    weight,
                    textCenter,
                })}
                ref={ref}
                disabled={disabled ?? isLoading}
                {...props}
            >
                {!isLoading ? (
                    <>{children ?? title}</>
                ) : (
                    <AiOutlineLoading
                        color={theme["background"]}
                        className="animate-spin"
                        size={24}
                    />
                )}
            </button>
        )
    },
)
Button.displayName = "Button"

export default Button
