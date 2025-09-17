interface NavigationProps {
    url: string;
    label: string;
    hideInNavbar?: boolean;
    published?: boolean;
}

export const navigation: NavigationProps[] = [
    {
        url: "/",
        label: "Home",
        hideInNavbar: false,
        published: true,
    },
    {
        url: "/works",
        label: "Works",
        published: true
    },
    {
        url: "/expertise",
        label: "Expertise",
        published: true
    },
    {
        url: "/about",
        label: "About",
        published: true
    }, 
    {
        url: "/insight",
        label: "Insight",
        published: true
    }
]
