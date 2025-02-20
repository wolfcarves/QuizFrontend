import { ComponentProps } from "react"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import Typography from "./Typography"
import { PiWarningCircleLight } from "react-icons/pi"
import { theme } from "@/theme/theme"

interface InputProps<T extends FieldValues> extends ComponentProps<"input"> {
    label: string
    name: Path<T>
    control: Control<T>
    errorMessage?: string
}

const Input = <T extends FieldValues>({
    name,
    control,
    label,
    errorMessage,
    ...props
}: InputProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <>
                    <div className="relative">
                        <input
                            id={name}
                            className="block rounded-xl px-2.5 pb-2.5 pt-5 w-full border border-[#e6e6e6] focus:outline-none focus:ring-0 focus:border-primary peer font-[InterRegular]"
                            placeholder=""
                            {...field}
                            value={field.value ?? ""}
                            {...props}
                        />

                        <label
                            htmlFor={name}
                            className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-[17px] z-10 origin-[0] start-3 text-placeholder peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-[InterMedium]"
                        >
                            {label}
                        </label>

                        <div className="flex gap-x-1 items-center py-1.5">
                            {errorMessage && (
                                <>
                                    <PiWarningCircleLight
                                        color={theme["destructive"]}
                                    />
                                    <Typography.Span
                                        title={errorMessage}
                                        size="xs"
                                        color="destructive"
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
        />
    )
}

export default Input
