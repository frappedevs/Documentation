import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { navbar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
	base: '/',

	head: [
		['meta', { name: 'application-name', content: 'Frappé Documentation'}],
		['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
		['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com'}],
		['link', { href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap', rel: 'stylesheet' }]
	],

	locales: {
		'/': {
			lang: 'en-US',
			title: 'Docs',
			description: 'Documentation for Frappé'
		}
	},

	themeConfig: {
		logo: '/images/logo.png',
		logoDark: '/images/logo_dark.png',
		docsRepo: 'frappedevs/docs',
		docsDir: 'src/',
		
		locales: {
			'/': {
				navbar: navbar.en,
				editLinkText: 'Edit this page on GitHub'
			}
		}
	},
	dest: 'public'
})
