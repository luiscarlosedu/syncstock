import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextProps {
    signed: boolean;
    user: UserProps | null;
    //   loadingAuth: boolean;
    //   loading: boolean;
    signUpEnterprise: (email: string, cnpj: string, senha: string) => /*Promise<void>*/ void;
    signUpEmployee: (email: string, senha: string) => /*Promise<void>*/ void;
    signInEnterprise: (email: string, cnpj: string, senha: string, ) => /*Promise<void>*/ void;
    signInEmployee: (email: string, senha: string) => /*Promise<void>*/ void;
    signOut: () => void;
}

interface UserProps {
    id: string;
    nome: string;
    email: string;
    tipo: "empresa" | "funcionario";
    foto?: string;
    employed?: boolean;
}

/* eslint-disable react-refresh/only-export-components */
export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null);

    useEffect(() => {
        const testUser: UserProps = {
            id: "2",
            nome: "Jonas",
            email: "jonastop@gmail.com",
            tipo: "funcionario",
            employed: true,
        }    

        setUser(testUser);
    }, []);

    function signUpEnterprise(email: string, cnpj: string, senha: string) {
        console.log("Cadastrou uma empresa");
        console.log(email, cnpj, senha)
    }
    
    function signInEnterprise(email: string, cnpj: string, senha: string) {
        console.log("Entrou uma empresa");
        console.log(email, cnpj, senha);
    }

    function signUpEmployee(email: string, senha: string) {
        console.log("Cadastrou um funcionario");
        console.log(email, senha);
    }

    function signInEmployee(email: string, senha: string) {
        console.log("Entrou um funcionario");
        console.log(email, senha);
    }

    function signOut() {
        console.log("desconectou");
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
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