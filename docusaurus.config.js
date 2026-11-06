// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes: prismThemes} = require('prism-react-renderer');
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

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

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
        // The docs/ and blog/ folders only hold the Docusaurus sample content,
        // so they are turned off and not published. To use them, replace
        // `false` with a settings object, e.g.
        //   docs: { sidebarPath: require.resolve('./sidebars.js') },
        //   blog: { showReadingTime: true },
        docs: false,
        blog: false,
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
                label: 'ALPHA2',
                to: 'projects/alpha2',
              },
              {
                label: 'AERO',
                to: 'projects/AERO',
              },
              {
                label: 'AQUA',
                to: 'projects/AQuA',
              },
              {
                label: 'FAITHBRIDGE',
                to: 'projects/faithbridge',
              },
              {
                label: 'FLEXTRANS',
                to: 'projects/flextrans',
              },
              {
                label: 'LYNX',
                to: 'projects/lynx',
              },
              {
                label: 'SCRIPTURE FORGE',
                to: 'projects/scriptureforge'
              },
              {
                label: 'SERVAL',
                to: 'projects/serval'
              },
            ]
          },
          {
            position: 'left',
            label: 'DATASETS',
            type: 'dropdown',
            items: [
              {
                label: 'BLOOM',
                to: 'datasets/bloom',
              },
              {
                label: 'EBIBLE',
                to: 'datasets/ebible',
              }
            ]
          },
          {
            to: 'ethics',
            label: 'ETHICS',
            position: 'left',
          },
          {
            to: '/contact',
            label: 'CONTACT US',
            position: 'left',
          },
          {
            to: 'https://www.classy.org/give/623739/#!/donation/checkout',
            label: 'DONATE',
            position: 'right',
            className: 'button custom-button'
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