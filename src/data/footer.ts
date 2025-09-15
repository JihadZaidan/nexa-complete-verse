interface FooterProps {
    url: string;
    label: string;
    hideInNavbar?: boolean;
    published?: boolean;
}

export const footer : FooterProps[] = [
    {
        url: "/work-three",
        label: "Works 3",
        published: true
    },
    {
        url: "/expertise",
        label: "Expertise 1",
        published: true
    },
    {
        url: "/secpertise",
        label: "Expertise 2",
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