// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MetaPerson documentation',
  tagline: 'Documentation for MetaPerson avatars',
  favicon: 'img/favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://docs.metaperson.avatarsdk.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'itseez3d', // Usually your GitHub org/user name.
  projectName: 'metaperson', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
			routeBasePath: '/', // Serve the docs at the site's root
			sidebarPath: './sidebars.js',          
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
	  metadata: [	    
		{property: 'og:type', 	  content: 'article'},
		{property: 'og:title', 	  content: 'Realistic Avatars for the Metaverse World'},
		{property: 'og:site_name', 	  content: 'What is MetaPerson Creator | MetaPerson documentation'},
		{property: 'og:description', 	  content: 'Bringing Realism to the Metaverse: The Avatar SDK&#39;s AI-Driven 3D Avatar Creation'},
		{property: 'og:url', 	  content: 'https://docs.metaperson.avatarsdk.com/'},
        {property: 'description', content: 'Bringing Realism to the Metaverse: The Avatar SDK\'s AI-Driven 3D Avatar Creation'},
        {property: 'og:type', 	  content: 'article'},
		{property: 'article:tag', content: 'metaverse'},
		{property: 'article:tag', content: '3D avatar creation'},
		{property: 'article:tag', content: 'realistic avatar'},
		{property: 'article:tag', content: 'selfie-based'},		
		{property: 'article:tag', content: 'virtual representation'},
		{property: 'article:tag', content: 'lifelike avatars'},
		{property: 'article:tag', content: 'create avatar from photo'},		
		{property: 'article:tag', content: 'realistic full body avatar creator'},
		{property: 'article:tag', content: 'avatar app'},
		{property: 'article:tag', content: 'custom avatar'},		
		{property: 'article:tag', content: 'vrchat avatar creator'},
		{property: 'article:tag', content: 'vrchat model maker'},		
		{property: 'article:published_time', content: '2024-04-02T10:12:10+00:00'},		
		{property: 'article:modified_time', content: '2024-04-03T10:09:50+00:00'},
		{property: 'article:publisher', content: 'https://www.facebook.com/avatarsdk/'},	
		{name: 'twitter:card', content: 'summary'},
		{name: 'twitter:site', content: '@avatarsdk'},		
		{name: 'twitter:domain', content: 'avatarsdk.com'},
		{name: 'twitter:title', content: 'Realistic Avatars for the Metaverse World'},
		{name: 'twitter:description', content: 'Bringing Realism to the Metaverse: The Avatar SDK&#39;s AI-Driven 3D Avatar Creation'},		
		{name: 'twitter:creator', content: '@avatarsdk'},  
      ],
      // Replace with your project's social card 
      image: 'img/metaperson-social-card.png',
      navbar: {       
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-normal@2x.png',
          srcDark: '/img/logo-white-color@2x.png',
        }, items: [
          {
            to: 'https://api.avatarsdk.com/',
            position: 'left',
            label: 'REST API',
          },
		  {
            to: 'https://metaperson.avatarsdk.com/',
            position: 'left',
            label: 'MetaPerson Creator',
          },
		  {
            to: 'https://accounts.avatarsdk.com/developer/signup/',
            position: 'left',
            label: 'Developer sign-up',
          },
		]
      },
      footer: {
        style: 'dark',
        links: [  
          {
            title: 'GitHub',
            items: [
              {
                label: 'Unity',
                href: 'https://github.com/avatarsdk/metaperson-loader-unity',
              },
              {
                label: 'Unreal Engine',
                href: 'https://github.com/avatarsdk/metaperson-ue-sample',
              },
              {
                label: 'Android',
                href: 'https://github.com/avatarsdk/metaperson-android-sample',
              },
              {
                label: 'iOS',
                href: 'https://github.com/avatarsdk/metaperson-ios-sample',
              },
              {
                label: 'Oculus',
                href: 'https://github.com/avatarsdk/metaperson-vr-quest-sample',
              },
            ]
			
          },
		  {
			title: 'Follow Us',
			items: [
				{
					label: 'Video Tutorials',
					href: 'https://youtube.com/playlist?list=PLDdNlBHHu4Dl6zI8ZFNGfFigy9VJeT8on&feature=shared',
        },
        {
					label: 'Blog',
					href: 'https://avatarsdk.com/blog/',
        },
        {
					label: 'Facebook',
					href: 'https://www.facebook.com/avatarsdk/',
        },
        {
					label: 'X',
					href: 'https://x.com/avatarsdk',
        }
			],
		  },
		  {
			title: 'Support',
			items: [
				{
					label: 'support@avatarsdk.com',
					href: 'mailto:support@avatarsdk.com',
                }
			]
		  }
		  
        ],
        copyright: `Copyright © ${new Date().getFullYear()} itSeez3D. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
