export type NavBarItems = {
    id: string;
    label: string;
    // onClick handlers cannot be passed from server -> client. If needed,
    // handle actions inside the client component (NavBar) or provide
    // a serializable action key that the client component can map to a
    // handler.
    onClick?: never;
};

export const DEFAULT_NAVBAR_ITEMS: NavBarItems[] = [
    {
        id: 'home',
        label: 'Home',
    },
    {
        id: 'about',
        label: 'About',
    },
    {
        id: 'experience',
        label: 'Experience',
    },
    {
        id: 'contact',
        label: 'Contact',
    },
    {
        id: 'lang',
        label: 'Language',
    }
];
