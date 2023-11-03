// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hasan Sofian',
  tagline: 'Learn, Build, Ship',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hasansufian.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HasanSufian', // Usually your GitHub org/user name.
  projectName: 'hasansufian.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

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
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Hasan Sofian',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Apps',
            to: '/page/apps',
            position: 'right',
          },
          {
            label: 'Projects',
            to: '/page/projects',
            position: 'right',
          },
          {
            label: 'Courses',
            to: '/page/courses',
            position: 'left',
          },
          {
            label: 'Donate',
            to: '/page/donate',
            position: 'right',
          },
          {
            label: 'About me',
            to: '/page/about',
            position: 'right',
          },
          {
            label: 'Contact me',
            to: '/page/contact',
            position: 'right',
          },
          
          {
            href: 'https://github.com/HasanSufian/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Follow me on',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/hasansofian',
              },
            ],
          },
          {
            title: 'Support me',
            items: [
              {
                label: 'Buy Me a Coffee',
                href: 'https://www.buymeacoffee.com/HassanSofyan',
              },

            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/HasanSufian/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hasan Sofian.`,
        
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
