module.exports = {
  title: 'Damodar Lohani',
  tagline: 'Mentor, Trainer & Tech Consultant',
  url: 'https://dlohani.com.np',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.svg',
  organizationName: 'lohanidamodar',
  projectName: 'lohanidamodar.github.io',
  themeConfig: {
    navbar: {
      title: 'Damodar Lohani',
      hideOnScroll: true,
      logo: {
        alt: 'Damodar Lohani',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'projects', label: 'Projects', position: 'left' },
        { to: 'talks', label: 'Talks', position: 'left' },
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
        gtag: {
          trackingID: 'G-NR1FQ09LP2',
          anonymizeIP: true,
        }
      },
    ],
  ],
};
