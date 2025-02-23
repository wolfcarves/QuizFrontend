import React, { ComponentProps, useId } from "react"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import Typography from "./Typography"
import { PiWarningCircleLight } from "react-icons/pi"
import { theme } from "@/theme/theme"
import { cva, VariantProps } from "cva"

const input = cva(
    "block rounded-xl w-full font-[InterRegular] placeholder:text-sm placeholder:font-[InterMedium]",
    {
        variants: {
            variant: {
                default:
                    "border border-[#e6e6e6] focus:outline-none focus:ring-0 focus:border-primary shadow-sm",
            },
            size: {
                base: "px-2.5 py-2 text-sm",
                lg: "px-2.5 py-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "lg",
        },
    },
)

interface BaseInputProps extends Omit<ComponentProps<"input">, "size">, VariantProps<typeof input> {
    label?: string
    errorMessage?: string
}

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
    ({ label, errorMessage, className, variant, size, ...props }: BaseInputProps, ref) => {
        const randomId = useId()

        return (
            <div className="space-y-3 w-full">
                {label && <Typography.Span title={label} size="sm" weight="semibold" />}

                <input
                    id={`${label}-${randomId}`}
                    ref={ref}
                    className={input({ className, variant, size })}
                    {...props}
                />

                <div className="flex gap-x-1 items-center">
                    {errorMessage && (
                        <>
                            <PiWarningCircleLight color={theme["destructive"]} />
                            <Typography.Span title={errorMessage} size="xs" color="destructive" />
                        </>
                    )}
                </div>
            </div>
        )
    },
)

interface InputProps<T extends FieldValues> extends BaseInputProps {
    name?: Path<T>
    control?: Control<T>
}

const Input = <T extends FieldValues>({
    name,
    control,
    label,
    placeholder,
    errorMessage,
    ...props
}: InputProps<T>) => {
    if (!name && !control) {
        return (
            <BaseInput
                label={label}
                placeholder={placeholder}
                errorMessage={errorMessage}
                {...props}
            />
        )
    }

    return (
        <>
            <Controller
                name={name!}
                control={control}
                render={({ field }) => (
                    <BaseInput
                        label={label}
                        placeholder={placeholder}
                        errorMessage={errorMessage}
                        {...field}
                        value={field.value ?? ""}
                        {...props}
                    />
                )}
            />
        </>
    )
}

export default Input
