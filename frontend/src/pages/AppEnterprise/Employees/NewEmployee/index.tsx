import { FormEvent, useContext, useState } from "react";
import { Container, EmployeesContentContainer } from "../styles";
import { EmployeeTitle, EmployeeTitleContainer, InputLabel, RegisterBtn, RegisterDescription, RegisterEmployeeContent, RegisterForm, RegisterInput } from "./styles";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router";
import api from "../../../../services/api";
import { AxiosError } from "axios";

export default function NewEmployeeEnterprise() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    async function registerEmployee(e: FormEvent) {
        e.preventDefault();

        try {
            await api.post("/employee/approve", {
                email,
            });

            alert("Funcionário registrado na empresa!");
            navigate("/empresa/funcionarios")
        } catch (err) {
            const error = err as AxiosError<{ error: string }>;

            if (error.response && error.response.data && error.response.data.error) {
                alert(`${error.response.data.error}`);
            } else {
                alert("[ERRO] Erro ao cadastrar funcionário na empresa.");
            };
        }
    };

    if (!user) {
        return <Navigate to={"/"} replace />
    }

    return (
        <Container>
            <EmployeesContentContainer>
                <EmployeeTitleContainer>
                    <EmployeeTitle>Cadastrar funcionário</EmployeeTitle>
                </EmployeeTitleContainer>

                <RegisterEmployeeContent>
                    <RegisterDescription>
                        Insira o e-mail de um usuário que ainda não está vinculado a uma empresa. Certifique-se de entrar em contato com ele antes de concluir o cadastro na plataforma.
                    </RegisterDescription>
                    <RegisterForm
                        onSubmit={registerEmployee}
                    >
                        <InputLabel htmlFor="email">Email do funcionário</InputLabel>
                        <RegisterInput 
                            id="email"
                            type="email"
                            placeholder="Ex: teste@teste.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <RegisterBtn
                            type="submit"
                        >
                            Cadastrar
                        </RegisterBtn>
                    </RegisterForm>
                </RegisterEmployeeContent>
            </EmployeesContentContainer>
        </Container>
    );
}