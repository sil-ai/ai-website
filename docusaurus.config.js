// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SIL AI & NLP',
  tagline: 'AI that supports people flourishing with the languages they value most',
  favicon: 'img/sil-favicon_0.ico',

  // Set the production url of your site here
  url: 'https://ai.sil.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'sil-ai', // Usually your GitHub org/user name.
  // projectName: 'sil-ai-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/sil-ai',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/SIL_logo.png',
      navbar: {
        logo: {
          alt: 'SIL Logo',
          src: 'img/SIL_logo.png',
        },
        items: [
          {
            position: 'left',
            label: 'PROJECTS',
            type: 'dropdown',
            to: 'projects',
            items: [
              {
                label: 'Acts2',
                to: 'projects/acts2',
              },
              {
                label: 'AERO',
                to: 'projects/AERO',
              },
              {
                label: 'AQuA',
                to: 'projects/AQuA',
              },
              {
                label: 'Lynx',
                to: 'projects/lynx',
              },
              {
                label: 'M2 Chat Platform',
                to: 'projects/chat',
              },
              {
                label: 'Scripture Forge',
                to: 'projects/scriptureforge'
              },
              {
                label: 'Serval',
                to: 'projects/serval'
              },
              {
                label: 'tools.bible',
                to: 'projects/bible-tools',
              },
            ]
          },
          {
            position: 'left',
            label: 'DATASETS',
            type: 'dropdown',
            items: [
              {
                label: 'Bloom',
                to: 'datasets/bloom',
              },
              {
                label: 'eBible',
                to: 'datasets/ebible',
              }
            ]
          },
          {
            label: 'NEWS',
            type: 'dropdown',
            items: [
              {
                label: 'Ethics Statement',
                to: 'ethics'
              }
            ]
          },
          {
            //to: '/contact',
            to: '/contact',
            label: 'CONTACT US',
            position: 'left',
          },
          {
            href: 'https://www.sil.org',
            label: 'SIL GLOBAL',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
        ],
        copyright: `COPYRIGHT © ${new Date().getFullYear()} SIL GLOBAL.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;