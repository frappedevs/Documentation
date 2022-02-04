import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
    '/guidelines/': [
        {
            text: 'General',
            children: [
                '/guidelines/general/verify/'
            ]
        },
        {
            text: 'Develop',
            children: [
                {
                    text: 'Main',
                    link: '/guidelines/develop/main'
                },
                {
                    text: 'Coding',
                    link: '/guidelines/develop/code/',
                    children: [
                        {
                            text: 'Styleguides',
                            link: '/guidelines/develop/code/styleguides/',
                            children: [
                                '/guidelines/develop/code/styleguides/lua/',
                            ]
                        }
                    ]
                }
            ]
        },
        {
            text: 'Branding',
            children: [
                '/guidelines/brand/'
            ]
        }
    ]
}