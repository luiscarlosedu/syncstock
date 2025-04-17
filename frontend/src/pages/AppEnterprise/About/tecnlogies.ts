import { IconType } from "react-icons";
import { FaIcons, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiPrisma, SiPostgresql, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { TbRouteSquare } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
interface Program {
    name: string;
    icon: IconType;
}

interface TecnologyCategory {
    category: "frontend" | "backend" | "mobile";
    tecnologies: Program[];
}

export function getByTecnology(category: "frontend" | "backend" | "mobile") {
    const group = Tecnologies.find(group => group.category === category);
    return group ? group.tecnologies : [];
}

export const Tecnologies: TecnologyCategory[] = [
    {
        category: "frontend",
        tecnologies: [
            {
                name: "ReactJs",
                icon: FaReact
            },
            {
                name: "React Router DOM",
                icon: TbRouteSquare
            },
            {
                name: "React Icons",
                icon: FaIcons
            },
            {
                name: "Styled Components",
                icon: SiStyledcomponents
            },
            {
                name: "TypeScript",
                icon: SiTypescript
            },
        ]
    },
    {
        category: "backend",
        tecnologies: [
            {
                name: "NodeJs",
                icon: FaNodeJs
            },
            {
                name: "Express",
                icon: SiExpress
            },
            {
                name: "Prisma ORM",
                icon: SiPrisma
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql
            }
        ]
    },
    {
        category: "mobile",
        tecnologies: [
            {
                name: "React Native",
                icon: RiReactjsLine
            }
        ]
    }
];