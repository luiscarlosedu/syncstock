import { IconType } from "react-icons";
import { TecCardContainer, TecCardIcon } from "./styles";

interface TecnologiesCardProps {
    name: string;
    Icon: IconType;
}

export function TecnologiesCard({name, Icon}: TecnologiesCardProps) {
    return (
        <TecCardContainer>
            <TecCardIcon><Icon size={20} /></TecCardIcon>
            <div>{name}</div>
        </TecCardContainer>
    );
}