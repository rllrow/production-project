import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage/ui/ErrorPage';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line no-unused-vars
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        // You can also log the error to an error reporting service
        // eslint-disable-next-line no-console
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;

        if (hasError) {
            return (
                <Suspense fallback="">
                    <ErrorPage />
                </Suspense>
            );
        }

        // eslint-disable-next-line react/jsx-no-useless-fragment,react/destructuring-assignment
        return <>{this.props.children}</>;
    }
}
export default ErrorBoundary;
