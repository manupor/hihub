export interface MenuItem {
    label: string;
    path?: string;
    key: string;
    children?: MenuItem[];
    isHeader?: boolean;
    badge?: string;
    // For path matching logic
    matchPaths?: string[];
}

export const menuData: MenuItem[] = [
    {
        label: "Inicio",
        key: "inicio",
        path: "/#inicio",
        matchPaths: ["/", "/index-2"],
    },
    {
        label: "Nosotros",
        key: "nosotros",
        path: "/#nosotros",
    },
    {
        label: "Servicios",
        key: "servicios",
        path: "/#servicios",
    },
    {
        label: "Clientes",
        key: "clientes",
        path: "/#clientes",
    },
    {
        label: "Contacto",
        key: "contacto",
        path: "/#contacto",
    },
];
