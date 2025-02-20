import { type ComponentType } from "react"

const withAuthGuard = <T extends object>(Component: ComponentType<T>) => {
    const NewComponent = (props: T) => {
        return <Component {...props} />
    }

    return NewComponent
}

export default withAuthGuard
