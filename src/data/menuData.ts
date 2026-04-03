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
        key: "home",
        path: "/#inicio",
        matchPaths: ["/", "/index-2"],
    },
    {
        label: "Nosotros",
        key: "about",
        path: "/#nosotros",
    },
    {
        label: "Servicios",
        key: "services",
        path: "/#servicios",
    },
    {
        label: "Clientes",
        key: "clients",
        path: "/#clientes",
    },
    {
        label: "Contacto",
        key: "contact",
        path: "/#contacto",
    },
    {
        label: "Portal del Cliente",
        key: "portal",
        path: "/portal",
    },
];
