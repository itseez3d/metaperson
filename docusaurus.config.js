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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {       
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
      },
      footer: {
        style: 'dark',
        links: [          
          {
            title: 'Metaperson',
            items: [
              {
                label: 'Metaperson Creator',
                href: 'https://metaperson.avatarsdk.com/',
              },
              {
                label: 'Metaperson avatars',
                href: 'https://avatarsdk.com/metaperson-creator/',
              },
              {
                label: 'Sign up as Developer',
                href: 'https://accounts.avatarsdk.com/developer/signup',
              },
            ],
          },
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
