import { useContext, useEffect, useState } from "react";
import { EnterpriseInfo } from "./EnterpriseInfo";
import { EnterpriseStatus } from "./EntepriseStatus";
import { EnterpriseEmployees } from "./EnterpriseEmployees";
import { ChangeInfo, ChangeInfoItem, Container, MyStoreContentContainer } from "./styles";
import { MyEnterpriseHeader } from "./components/my-enterprise-header";
import { AuthContext } from "../../../contexts/AuthContext";
import { Navigate } from "react-router";
import api from "../../../services/api";
import { Loading } from "../../../components/loading";

export interface EnterpriseData {
    nome: string;
    email: string;
    foto: string;
    telefone: string;
    endereco: string;
    createdAt: string;
    productsCount: number;
    categoriesCount: number;
    funcionarios: {
        id: string;
        nome: string;
        email: string;
        foto?: string;
        createdAt: string;
    }[];
}

export default function EnterpriseEmployee() {
    const { user } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState("info");
    const [enterpriseData, setEnterpriseData] = useState<EnterpriseData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadStorage() {
            try {
                const response = await api.get("/employee/enterprise", {
                    params: {
                        enterprise_id: user?.enterprise_id,
                    }
                });
                setEnterpriseData(response.data);
                setIsLoading(false);
            } catch (err) {
                console.log("[ERRO]", err);
                setIsLoading(false);
            }
        };

        if (user?.enterprise_id) {
            loadStorage();
        };
    }, [user]);

    if (!user) {
        return <Navigate to={"/"} replace />
    };

    if (isLoading) {
        return (
            <Container>
                <Loading message="Carregando informações..." />
            </Container>
        );
    };

    return (
        <Container>
            <MyStoreContentContainer>
                {enterpriseData && (
                    <MyEnterpriseHeader 
                        data={enterpriseData}
                    />
                )}

                <ChangeInfo>
                    <ChangeInfoItem
                        className={activeTab === 'info' ? 'active' : ''}
                        onClick={() => setActiveTab('info')}
                    >
                        Informações
                    </ChangeInfoItem>
                    <ChangeInfoItem
                        className={activeTab === 'status' ? 'active' : ''}
                        onClick={() => setActiveTab('status')}
                    >
                        Status
                    </ChangeInfoItem>
                    <ChangeInfoItem
                        className={activeTab === 'employees' ? 'active' : ''}
                        onClick={() => setActiveTab('employees')}
                    >
                        Funcionários
                    </ChangeInfoItem>
                </ChangeInfo>

                {enterpriseData && activeTab === 'info' && <EnterpriseInfo data={enterpriseData} />}
                {enterpriseData && activeTab === 'status' && <EnterpriseStatus data={enterpriseData} />}
                {enterpriseData && activeTab === 'employees' && <EnterpriseEmployees data={enterpriseData.funcionarios} />}
                
            </MyStoreContentContainer>
        </Container>
    );
};