import { Spinner, SpinnerContainer } from "./styles";

interface LoadingProps {
    message?: string;
}

export function Loading({ message }: LoadingProps) {
    return (
        <SpinnerContainer>
            <Spinner />
            {message && <span style={{ marginLeft: 10 }}>{message}</span>}
        </SpinnerContainer>
    );
}