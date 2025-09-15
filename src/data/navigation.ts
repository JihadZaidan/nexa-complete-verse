interface NavigationProps {
    url: string;
    label: string;
    published?: boolean;
}

export const navigation: NavigationProps[] = [
    {
        url: "/",
        label: "Landing Page 1",
        published: true
    },
    {
        url: "/two-land",
        label: "Landing Page 2",
        published: true
    },
    {
        url: "/three-land",
        label: "Landing Page 3",
        published: true
    },
    {
        url: "/works",
        label: "Works 1",
        published: true
    }, 
    {
        url: "/work-two",
        label: "Works 2",
        published: true
    }
]