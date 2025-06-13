import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export function EnterpriseRouteGuard() {
    const { user } = useContext(AuthContext);

    if(user?.tipo !== 'empresa') {
        return <Navigate to={'/funcionario/pendente'} replace />
    }

    return <Outlet />
};