module.exports = {
  title: 'Damodar Lohani',
  tagline: 'Mobile and Web Developer',
  url: 'https://dlohani.com.np',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'lohanidamodar', // Usually your GitHub org/user name.
  projectName: 'dlohani.com.np', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Damodar Lohani',
      hideOnScroll: true,
      /* logo: {
        alt: 'Damodar Lohani',
        src: 'img/logo.svg',
      }, */
      items: [
        /* {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        }, */
        { to: 'projects', label: 'Projects', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'contact', label: 'Contact', position: 'left' },
        {
          href: 'https://github.com/lohanidamodar',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Damodar Lohani, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
