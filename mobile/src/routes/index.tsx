import AuthRoutes from "./auth.routes";
import EmployeeRoutes from "./employee.routes";
import EnterpriseRoutes from "./enterprise.routes";

export default function Routes() {
    const user = {
        nome: 'José',
        tipo: 'empresa'
    };
    const signed = true; 
        
    if (!signed) {
        return <AuthRoutes />
    };

    if (user?.tipo === 'empresa') {
        return <EnterpriseRoutes />
    };

    if (user?.tipo === 'funcionario') {
        return <EmployeeRoutes />
    };

    return <AuthRoutes />
}