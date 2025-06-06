import { createContext, ReactNode, useState } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextProps {
  signed: boolean;
  user: UserProps | null;
  loadingAuth: boolean;
  loading: boolean;
  signUpEnterPrise: (email: string, cnpj: string, senha: string) => Promise<void>;
  signUpEmployee: (email: string, senha: string) => Promise<void>;
  signInEnterprise: (email: string, senha: string, cnpj: string) => Promise<void>;
  signInEmployee: (email: string, senha: string) => Promise<void>;
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

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({children}: AuthProviderProps) {
    // const [user, setUser] = useState<UserProps | null>(null);

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
}