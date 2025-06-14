import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextProps {
    signed: boolean;
    user: UserProps | null;
    loading: boolean;
    loadingAuth: boolean;
    signUpEnterprise: (email: string, cnpj: string, senha: string) => /*Promise<void>*/ void;
    signUpEmployee: (email: string, senha: string) => /*Promise<void>*/ void;
    signInEnterprise: (email: string, cnpj: string, senha: string, ) => Promise<void>;
    signInEmployee: (email: string, senha: string) => Promise<void>;
    signOut: () => Promise<void>;
}

interface UserProps {
    id: string;
    nome: string;
    email: string;
    cnpj?: string;
    tipo: "empresa" | "funcionario";
    foto?: string;
    employed?: boolean;
}

type TypeUser = "empresa" | "funcionario";

/* eslint-disable react-refresh/only-export-components */
export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
        loadStorage();
    }, []);

    async function loadStorage() {
        const tokenUser = localStorage.getItem("@tokenWeb");
        const typeUser = localStorage.getItem("@typeWeb") as TypeUser | null;
        if (tokenUser && typeUser) {
            
            api.defaults.headers.common["Authorization"] = `Bearer ${tokenUser}`;
            
            try {
                let response;

                if (typeUser === 'empresa') {
                    response = await api.get("/enterprise/detail");
                } else {
                    response = await api.get("/employee/detail");
                }

                const data: UserProps = response.data;

                const UserData: UserProps = {
                    id: data.id ?? "",
                    nome: data.nome,
                    email: data.email,
                    cnpj: data.cnpj ?? undefined,
                    tipo: typeUser,
                    foto: data.foto ?? undefined,
                    employed: data.employed ?? undefined 
                }

                setUser(UserData);
            } catch (err) {
                console.log("[ERRO!]");
                console.error(err);
                setUser(null);
            }
        }

        setLoading(false);
    }

    function signUpEnterprise(email: string, cnpj: string, senha: string) {
        console.log("Cadastrou uma empresa");
        console.log(email, cnpj, senha)
    }
    
    async function signInEnterprise(email: string, cnpj: string, senha: string) {
        setLoadingAuth(true);

        try {
            const response = await api.post("/enterprise/session", {
                email,
                cnpj,
                senha
            });
            const { token, id, nome, email: userEmail, cnpj: userCnpj, foto } = response.data;

            localStorage.setItem("@tokenWeb", token);
            localStorage.setItem("@typeWeb", "empresa");

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setUser({
                id,
                nome,
                email: userEmail,
                cnpj: userCnpj,
                foto,
                tipo: "empresa",
            });

        } catch (err) {
            console.log('[ERRO!]');
            console.error(err);
        } finally {
            setLoadingAuth(false);
        }
    }

    function signUpEmployee(email: string, senha: string) {
        console.log("Cadastrou um funcionario");
        console.log(email, senha);
    }

    async function signInEmployee(email: string, senha: string) {
        setLoadingAuth(true);

        try {
            const response = await api.post("/employee/session", {
                email,
                senha
            });
            const { id, nome, email: userEmail, employed, foto, token } = response.data;

            localStorage.setItem("@tokenWeb", token);
            localStorage.setItem("@typeWeb", "funcionario");

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setUser({
                id,
                nome,
                email: userEmail,
                employed,
                foto,
                tipo: "funcionario",
            });

        } catch (err) {
            console.log('[ERRO!]');
            console.error(err);
        } finally {
            setLoadingAuth(false);
        }
    }

    async function signOut() {
        localStorage.removeItem("@tokenWeb");
        localStorage.removeItem("@typeWeb");
        setUser(null);
        api.defaults.headers.common["Authorization"] = "";
        console.log("[DESCONECTOU]");
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            loading,
            loadingAuth,
            signInEnterprise,
            signUpEnterprise,
            signInEmployee,
            signUpEmployee,
            signOut,
        }}>
            {children}
        </AuthContext.Provider>
    );
}