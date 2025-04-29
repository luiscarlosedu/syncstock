import { Navigate, Outlet } from "react-router";

export function EmployeeRouteGuard() {
    const funcionario = {
        nome: "arnaldo",
        email: "eduardo@teste.com",
        employed: true
    };

    if(!funcionario.employed) {
        return <Navigate to={'/funcionario/pendente'} replace/>
    }

    return <Outlet />
};