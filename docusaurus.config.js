// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Metaperson documentation',
  tagline: 'Documentation for Metaperson avatars',
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
        {name: 'description', content: 'Bringing Realism to the Metaverse: The Avatar SDK\'s AI-Driven 3D Avatar Creation'},
        {name: 'og:type', content: 'website'},
		{name: 'article:tag', content: 'metaverse'},
		{name: 'article:tag', content: '3D avatar creation'},
		{name: 'article:tag', content: 'realistic avatar'},
		{name: 'article:tag', content: 'selfie-based'},		
		{name: 'article:tag', content: 'virtual representation'},
		{name: 'article:tag', content: 'lifelike avatars'},
		{name: 'article:tag', content: 'create avatar from photo'},		
		{name: 'article:tag', content: 'realistic full body avatar creator'},
		{name: 'article:tag', content: 'avatar app'},
		{name: 'article:tag', content: 'custom avatar'},		
		{name: 'article:tag', content: 'vrchat avatar creator'},
		{name: 'article:tag', content: 'vrchat model maker'}
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
            label: 'Metaperson Creator',
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
            title: 'Github',
            items: [
              {
                label: 'Unity',
                href: 'https://github.com/avatarsdk/metaperson-loader-unity',
              },
              {
                label: 'Android',
                href: 'https://github.com/avatarsdk/metaperson-android-sample',
              },
			  {
                label: 'Oculus',
                href: 'https://github.com/avatarsdk/metaperson-vr-quest-sample',
              },
			  {
                label: 'iOS',
                href: 'https://github.com/avatarsdk/metaperson-ios-sample',
              },
			  {
                label: 'Unreal Engine',
                href: 'https://github.com/avatarsdk/metaperson-ue-sample',
              },
            ],
          },
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
