import Typography from "./Typography"

interface AvatarProps {
    name?: string
    size?: "base" | "lg"
}

const Avatar = ({ name, size = "base" }: AvatarProps) => {
    return (
        <div
            className={`${size === "base" ? "w-7 h-7" : "w-10 h-10"} flex border border-muted/20 bg-muted/10 rounded-full`}
        >
            <Typography.Span title={name} size={size === "base" ? "xs" : "sm"} className="m-auto" />
        </div>
    )
}

export default Avatar
