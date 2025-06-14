import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";

interface PrivateProps {
    children: ReactNode;
}

export function PrivateRoute({ children }: PrivateProps) {
    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return null;
    }

    if(!signed) {
        return <Navigate to='/' replace />
    }

    return children;
}