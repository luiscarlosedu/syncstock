import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";

interface PrivateProps {
    children: ReactNode;
}

export function PrivateRoute({ children }: PrivateProps) {
    const { signed } = useContext(AuthContext);

    if(!signed) {
        return <Navigate to='/' replace />
    }

    return children;
}