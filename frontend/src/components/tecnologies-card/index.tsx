import { IconType } from "react-icons";

interface TecnologiesCardProps {
    name: string;
    Icon: IconType;
}

export function TecnologiesCard({name, Icon}: TecnologiesCardProps) {
    return (
        <div>
            <h1>{name}</h1>
            <Icon/>
        </div>
    );
}