import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa";

interface Program {
    name: string;
    icon: IconType; 
}

export const Tecnologies: Program[] = [
    {
        name: "react",
        icon: FaReact
    }
]