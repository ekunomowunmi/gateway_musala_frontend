export type Menu = {
    name: string, 
    icon: string, 
    active: boolean,
    url: string,
    submenu?: { name: string, url: string, active?: boolean }[]
}