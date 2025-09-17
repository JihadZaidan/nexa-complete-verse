interface FooterProps {
    url: string;
    label: string;
    hideInNavbar?: boolean;
    published?: boolean;
}

export const footer : FooterProps[] = [
    {
        url: "/two-land",
        label: "Awards",
        published: true
    },
    {
        url: "/three-land",
        label: "Branding",
        published: true
    },
    {
        url: "work-two",
        label: "Careers",
        published: true
    },
    {
        url: "work-three",
        label: "Inquiries",
        published: true
    },
    {
        url: "/secpertise",
        label: "Contact Us",
        published: true
    }
] 
