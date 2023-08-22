// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación',
  tagline: 'Marlon García',
  favicon: 'img/favicon.ico',


  // Set the production url of your site here
  // GitHub pages deployment config.
  url: 'https://clasesucatmarlon.github.io',
  baseUrl: '/documentation-mg',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  organizationName: 'clasesucatmarlon', // Usually your GitHub org/user name.
  projectName: 'documentation-mg', // Usually your repo name.

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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'magmCODE',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo2.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Material',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/clasesucatmarlon',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [

              {
                label: 'Discord',
                href: 'https://discord.gg/2PC9zNqy',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/marlonagarciam/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/garciamarlon',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/clasesucatmarlon',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} magmCODE.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
