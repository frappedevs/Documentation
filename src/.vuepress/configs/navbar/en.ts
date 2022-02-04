import type { NavbarConfig } from '@vuepress/theme-default'
export const en: NavbarConfig = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'Guides',
        children: [
            {
                text: 'General',
                children: [
                    '/guidelines/general/verify/'
                ]
            },
            {
                text: 'Develop',
                children: [
                    '/guidelines/develop/main/',
                    '/guidelines/develop/code/',
                ]
            },
            {
                text: 'Branding',
                children: [
                    '/guidelines/brand/'
                ]
            }
        ]
    },
    {
        text: 'Links',
        children: [
            {
                text: 'Roblox',
                link: 'https://www.roblox.com/groups/950346/Frapp'
            },
            {
                text: 'Handbook',
                link: 'https://devforum.roblox.com/t/frapp%C3%A9-main-handbook/320853'
            },
            {
                text: 'Twitter',
                link: 'https://twitter.com/Frappe_Roblox'
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/frappe'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/frappedevs/'
            }
        ]
    }
]