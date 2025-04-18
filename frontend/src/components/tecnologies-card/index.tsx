import { IconType } from "react-icons";
import { TecCardContainer, TecCardIcon, TecCardName } from "./styles";

interface TecnologiesCardProps {
    name: string;
    Icon: IconType;
}

export function TecnologiesCard({name, Icon}: TecnologiesCardProps) {
    return (
        <TecCardContainer>
            <TecCardIcon><Icon size={20} /></TecCardIcon>
            <TecCardName>{name}</TecCardName>
        </TecCardContainer>
    );
}