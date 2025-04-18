import { IconType } from "react-icons";
import { FaIcons, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiPrisma, SiPostgresql, SiStyledcomponents, SiTypescript, SiExpo, SiJsonwebtokens } from "react-icons/si";
import { TbBrandReactNative, TbBrandVite, TbIconsFilled, TbRouteSquare } from "react-icons/tb";
import { FaCloudArrowUp } from "react-icons/fa6";
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
                name: "TypeScript",
                icon: SiTypescript
            },
            {
                name: "Vite",
                icon: TbBrandVite
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
                name: "TypeScript",
                icon: SiTypescript
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
            },
            {
                name: "Multer",
                icon: FaCloudArrowUp
            },
            {
                name: "JWT",
                icon: SiJsonwebtokens
            },
        ]
    },
    {
        category: "mobile",
        tecnologies: [
            {
                name: "React Native",
                icon: TbBrandReactNative
            },
            {
                name: "Expo",
                icon: SiExpo
            },
            {
                name: "Styled Components",
                icon: SiStyledcomponents
            },
            {
                name: "React Vector Icons",
                icon: TbIconsFilled
            },
        ]
    }
];