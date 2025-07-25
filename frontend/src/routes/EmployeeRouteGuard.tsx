import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export function EmployeeRouteGuard() {
    const { user } = useContext(AuthContext);

    if(!user?.employed) {
        return <Navigate to={'/funcionario/pendente'} replace />
    }

    return <Outlet />
};