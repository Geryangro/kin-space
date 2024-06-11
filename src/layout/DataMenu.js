import { IconBriefcase, IconFileUpload, IconUserSquare, IconFileDescription } from '@tabler/icons-react'
import { IconBrandWhatsapp, IconBrandGoogleFilled, IconBrandInstagram } from '@tabler/icons-react';

const DataMenu = [
    {
        name: 'Offers',
        icon: <IconBriefcase />,
        url: '/offers',
    },
    {
        name: 'My Application',
        icon: <IconFileDescription />,
        url: '/my-application',
    },
    {
        name: 'Document Upload',
        icon: <IconFileUpload />,
        url: '/document-upload',
    },
    {
        name: 'Profile',
        icon: <IconUserSquare />,
        url: '/profile'
    }
];

const LinkPageDataLeft = [
    { name: "Shop", href: "/" },
    { name: "Play", href: "/" },
    { name: "Learn", href: "/" },
]

const LinkPageDataRight = [
    { name: "About Kin", href: "/about" },
    { name: "Contact Us", href: "/" },
]

const LinkPageDataFull = [
    { name: "Shop", href: "/" },
    { name: "Play", href: "/" },
    { name: "Learn", href: "/" },
    { name: "About Kin", href: "/about" },
    { name: "Contact Us", href: "/" },
]

const FooterNavigation = {
    main: LinkPageDataLeft,
    social: [
        {
            name: "Instagram",
            href: "https://www.instagram.com/kinspace.id",
            icon: <IconBrandInstagram className="w-6 h-6" />,
            icon_mobile: <IconBrandInstagram className="w-8 h-8" />,
        },
        {
            name: "Email",
            href: "#",
            icon: <IconBrandGoogleFilled className="w-6 h-6" />,
            icon_mobile: <IconBrandGoogleFilled className="w-8 h-8" />,
        },
        {
            name: "Whatsapp",
            href: "#",
            icon: <IconBrandWhatsapp className="w-6 h-6" />,
            icon_mobile: <IconBrandWhatsapp className="w-8 h-8" />,
        },
    ],
};

export { DataMenu, LinkPageDataLeft, LinkPageDataRight, LinkPageDataFull, FooterNavigation }