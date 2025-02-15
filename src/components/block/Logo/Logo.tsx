import { Link } from "react-router"
import { GiMaterialsScience } from "react-icons/gi"
import Typography from "@/components/ui/Typography"
import { theme } from "@/theme/theme"

const Logo = () => {
    return (
        <Link to="/" className="flex items-center gap-1.5">
            <GiMaterialsScience color={theme["secondary"]} size={34} />
            {/* <Typography.Span title="Quiz Aquino" weight="semibold" /> */}
        </Link>
    )
}

export default Logo
