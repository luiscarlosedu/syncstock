import { EmployeeWarn, EmployeeWarnLink } from "./styles";

export function EmployeeLengthWarn() {
    return (
        <EmployeeWarn>
            Sua empresa não possui funcionários! <EmployeeWarnLink to='/empresa/home'>Deseja adicionar?</EmployeeWarnLink>
        </EmployeeWarn>
    );
}