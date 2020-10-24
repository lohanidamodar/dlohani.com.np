module.exports = {
  title: 'Damodar Lohani',
  tagline: 'Mobile and Web Developer',
  url: 'https://dlohani.com.np',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.svg',
  organizationName: 'lohanidamodar', // Usually your GitHub org/user name.
  projectName: 'lohanidamodar.github.io', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'G-NR1FQ09LP2',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'Damodar Lohani',
      hideOnScroll: true,
      logo: {
        alt: 'Damodar Lohani',
        src: 'img/logo.svg',
      },
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
          title: 'Socials',
          items: [
            {
              label: 'Youtube',
              href: 'https://youtube.com/c/reactbits',
            },
            {
              label: 'Github',
              href: 'https://github.com/lohanidamodar',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lohanidamodar',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Projects',
              to: 'projects',
            },
            {
              label: 'Contact',
              to: 'contact',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Damodar Lohani`,
    },
    prism: {
      additionalLanguages: ['dart', 'yaml'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/lohanidamodar/dlohani.com.np/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
