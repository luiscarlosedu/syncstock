import { useState } from "react";
import { EnterpriseInfo } from "./EnterpriseInfo";
import { EnterpriseStatus } from "./EntepriseStatus";
import { EnterpriseEmployees } from "./EnterpriseEmployees";
import { ChangeInfo, ChangeInfoItem, Container, MyStoreContentContainer } from "./styles";
import { MyEnterpriseHeader } from "./components/my-enterprise-header";

export default function EnterpriseEmployee() {
    const [activeTab, setActiveTab] = useState("info");

    return (
        <Container>
            <MyStoreContentContainer>
                <MyEnterpriseHeader />

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

                {activeTab === 'info' && <EnterpriseInfo/>}
                {activeTab === 'status' && <EnterpriseStatus/>}
                {activeTab === 'employees' && <EnterpriseEmployees/>}
                
            </MyStoreContentContainer>
        </Container>
    );
};