import Typography from "./Typography"

interface AvatarProps {
    size?: "base" | "lg"
}

const Avatar = ({ size = "base" }: AvatarProps) => {
    return (
        <div
            className={`${size === "base" ? "w-7 h-7" : "w-10 h-10"} flex border border-muted/20 bg-muted/10 rounded-full`}
        >
            <Typography.Span
                title="RC"
                size={size === "base" ? "xs" : "sm"}
                className="m-auto"
            />
        </div>
    )
}

export default Avatar
