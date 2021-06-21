const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Fathym',
  tagline: 'More Technology. More Accessible. To More People.',
  url: 'https://www.fathym.com',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fathym', // Usually your GitHub org/user name.
  projectName: 'public-web-blog', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    navbar: {
      // title: 'Fathym',
      logo: {
        alt: 'Fathym',
        src: 'img/Fathym-logo-white-01.png',
      },
      items: [
        {
          href: '/',
          label: 'Home',
          position: 'left',
          target: '_top',
        },
        {
          href: '/docs',
          label: 'Docs',
          position: 'right',
          target: '_top',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Next Steps',
          items: [
            // {
            //   label: 'Getting Started',
            //   to: 'https://www.iot-ensemble.com/dashboard',
            // },
            // {
            //   label: 'Pricing',
            //   to: 'https://www.iot-ensemble.com/pricing',
            // },
            {
              label: 'Support',
              to: '/docs/introduction/support',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/fathym',
            },
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/fathym',
            //},
            {
              label: 'Twitter',
              href: 'https://twitter.com/fathym',
            },
          ],
        },
        {
          title: 'Powered by Fathym',
          items: [
            {
              label: 'Learn More',
              href: 'https://www.fathym.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fathym, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
