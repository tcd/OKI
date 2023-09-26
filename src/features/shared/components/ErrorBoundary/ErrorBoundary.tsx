import { Component } from "react"

import { FallbackComponent } from "./FallbackComponent"

export type ErrorBoundaryProps = {
    name: string
    children: React.ReactNode
}

type ErrorBoundaryState = {
    hasError: boolean
}

/**
 * See the [error boundary docs](https://reactjs.org/docs/error-boundaries.html).
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(_error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <FallbackComponent name={this.props.name} />
        }

        return (
            <>
                {this.props.children && this.props.children}
            </>
        )
    }
}
