import React from "react"
import { Typography } from "@/components/ui"
import { theme } from "@/theme/theme"
import { ComponentProps, useState } from "react"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

const Choice = (props: ComponentProps<"div">) => {
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 w-full" {...props} />
}

interface ChoiceItemProps extends ComponentProps<"button"> {
    title: string
    center?: boolean
}

const ChoiceItem = ({ title, center, onClick, disabled }: ChoiceItemProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)

    const handleChoiceClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick?.(event)
        setIsSelected(true)
    }

    return (
        <button
            className={`${center ? "md:col-span-2 md:w-[50%] md:mx-auto" : ""} relative border border-muted/50 rounded-2xl text-center hover:bg-muted/5 p-2.5 md:p-4`}
            onClick={handleChoiceClick}
            disabled={disabled}
        >
            <Typography.H6
                title={title}
                className={`${isSelected ? "opacity-0" : ""} duration-200`}
            />

            <IoMdCheckmarkCircleOutline
                className={`${isSelected ? "rotate-0" : "rotate-180 opacity-0"} absolute inset-0 m-auto duration-500`}
                color={theme["muted"]}
                size={24}
            />
        </button>
    )
}

Choice.Item = ChoiceItem

export default Choice
