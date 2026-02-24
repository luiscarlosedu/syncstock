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
    signUpEnterprise: (nome: string, cnpj: string, email: string, senha: string, endereco: string, telefone: string, file: File) => Promise<void>;
    signUpEmployee: (nome: string, email: string, senha: string, file?: File) => Promise<void>;
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
    createdAt: string;
    enterprise_id?: string;
    enterprise_nome?: string;
    enterprise_foto?: string;
    telefone?: string;
    endereco?: string;
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

                const data = response.data;

                const UserData: UserProps = {
                    id: data.id ?? "",
                    nome: data.nome,
                    email: data.email,
                    cnpj: data.cnpj ?? undefined,
                    tipo: typeUser,
                    foto: data.foto ?? undefined,
                    createdAt: data.createdAt,
                    endereco: data?.endereco ?? undefined,
                    telefone: data?.telefone ?? undefined,
                    employed: data.employed ?? undefined,
                    enterprise_id: data.empresa?.id ?? undefined,
                    enterprise_nome: data.empresa?.nome ?? undefined,
                    enterprise_foto: data.empresa?.foto ?? undefined,
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

    async function signUpEnterprise(
        nome: string, 
        cnpj: string, 
        email: string, 
        senha: string, 
        endereco: string, 
        telefone: string, 
        file: File,
    ) {
        setLoadingAuth(true);
        try {
            const data = new FormData();
            data.append("nome", nome);
            data.append("cnpj", cnpj);
            data.append("email", email);
            data.append("senha", senha);
            data.append("endereco", endereco);
            data.append("telefone", telefone);
            data.append("file", file);

            const response = await api.post("/enterprise", data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            const { token, id, nome: userNome, email: userEmail, cnpj: userCnpj, foto, createdAt, telefone: userTelefone, endereco: userEndereco } = response.data;

            localStorage.setItem("@tokenWeb", token);
            localStorage.setItem("@typeWeb", "empresa");

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setUser({
                id,
                nome: userNome,
                email: userEmail,
                cnpj: userCnpj,
                foto,
                tipo: "empresa",
                createdAt,
                telefone: userTelefone,
                endereco: userEndereco
            });

            setLoadingAuth(false);
            
        } catch (error) {
            console.error("Erro ao cadastrar empresa:", error);
            setLoadingAuth(false);
            throw error;
        }
    }

    async function signInEnterprise(email: string, cnpj: string, senha: string) {
        setLoadingAuth(true);

        try {
            const response = await api.post("/enterprise/session", {
                email,
                cnpj,
                senha
            });
            const { token, id, nome, email: userEmail, cnpj: userCnpj, foto, createdAt, endereco: userEndereco, telefone: userTelefone } = response.data;

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
                createdAt,
                endereco: userEndereco,
                telefone: userTelefone
            });

        } catch (err) {
            console.log('[ERRO!] Erro ao fazer login da empresa');
            console.error(err);
        } finally {
            setLoadingAuth(false);
        }
    }

    async function signUpEmployee(nome: string, email: string, senha: string, file?: File) {
        setLoadingAuth(true);
        try {
            const data = new FormData();
            data.append("nome", nome);
            data.append("email", email);
            data.append("senha", senha);

            if (file) {
                data.append("file", file);
            };

            const response = await api.post("/employee", data, {
                headers: {  
                    'Content-Type': 'multipart/form-data',
                }
            });

            const { id, nome: userNome, email: userEmail, foto, employed, token, createdAt, empresa } = response.data;

            localStorage.setItem("@tokenWeb", token);
            localStorage.setItem("@typeWeb", "funcionario");

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setUser({
                id,
                nome: userNome,
                email: userEmail,
                foto,
                employed,
                tipo: "funcionario",
                createdAt,
                enterprise_id: empresa?.id ?? undefined,
                enterprise_nome: empresa?.nome ?? undefined,
                enterprise_foto: empresa?.foto ?? undefined,
            });

            setLoadingAuth(false);

        } catch (err) {
            console.error("Erro ao cadastrar funcionário:", err);
            setLoadingAuth(false);
            throw err;
        }
    }

    async function signInEmployee(email: string, senha: string) {
        setLoadingAuth(true);

        try {
            const response = await api.post("/employee/session", {
                email,
                senha
            });
            const { id, nome, email: userEmail, employed, foto, token, createdAt, empresa } = response.data;

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
                createdAt,
                enterprise_id: empresa?.id ?? undefined,
                enterprise_nome: empresa?.nome ?? undefined,
                enterprise_foto: empresa?.foto ?? undefined,
            });

            setLoadingAuth(false);

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