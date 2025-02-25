import { TbBrandNodejs } from "react-icons/tb"

const Loading = () => {
    return (
        <div className="absolute w-max h-max inset-0 m-auto animate-pulse ">
            <TbBrandNodejs size={40} />
        </div>
    )
}

export default Loading
