import React, { ComponentProps, useId } from "react"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import Typography from "./Typography"
import { PiWarningCircleLight } from "react-icons/pi"
import { theme } from "@/theme/theme"

interface BaseInputFloatingLabelProps extends ComponentProps<"input"> {
    label?: string
    placeholder?: string
    errorMessage?: string
}

const BaseInputFloatingLabel = React.forwardRef<HTMLInputElement, BaseInputFloatingLabelProps>(
    ({ label, placeholder, errorMessage, ...props }: BaseInputFloatingLabelProps, ref) => {
        const randomId = useId()

        return (
            <div className="space-y-4">
                <Typography.Span title={label} size="sm" weight="semibold" />

                <div className="relative">
                    <input
                        ref={ref}
                        id={`${label}-${randomId}`}
                        className="block rounded-xl px-2.5 pb-2.5 pt-5 w-full border border-[#e6e6e6] focus:outline-none focus:ring-0 focus:border-primary peer font-[InterRegular]"
                        placeholder=""
                        {...props}
                    />

                    <label
                        htmlFor={`${label}-${randomId}`}
                        className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-[17px] z-10 origin-[0] start-3 text-placeholder peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-[InterMedium]"
                    >
                        {placeholder}
                    </label>

                    <div className="flex gap-x-1 items-center py-1.5">
                        {errorMessage && (
                            <>
                                <PiWarningCircleLight color={theme["destructive"]} />
                                <Typography.Span
                                    title={errorMessage}
                                    size="xs"
                                    color="destructive"
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        )
    },
)

interface InputFloatingLabelProps<T extends FieldValues> extends BaseInputFloatingLabelProps {
    name?: Path<T>
    control?: Control<T>
}

const InputFloatingLabel = <T extends FieldValues>({
    name,
    control,
    label,
    placeholder,
    errorMessage,
    ...props
}: InputFloatingLabelProps<T>) => {
    if (!name && !control) {
        return (
            <BaseInputFloatingLabel
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
                    <BaseInputFloatingLabel
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

export default InputFloatingLabel
