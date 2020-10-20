import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const skills = [
  {
    title: "Flutter",
    icon: "img/skills/flutter.svg",
  },
  {
    title: "Firebase",
    icon: "img/skills/firebase.svg",
  },
  {
    title: "Wordpress",
    icon: "img/skills/wordpress.svg",
  },
  {
    title: "React JS",
    icon: "img/skills/react.svg",
  },
  {
    title: "NestJS",
    icon: "img/skills/nestjs.svg",
  },
  {
    title: "HTML",
    icon: "img/skills/html.svg",
  },
  {
    title: "CSS",
    icon: "img/skills/css.png",
  },
  {
    title: "Javascript",
    icon: "img/skills/js.png",
  },
]

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
function Skill({ title, icon }) {
  const imgUrl = useBaseUrl(icon);
  return (

    <div className="text--center">
      <img className={styles.skillImage} src={imgUrl} alt={title} />
    </div>

  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('contact')}>
              Let's Work Together
            </Link>
          </div>
        </div>
      </header>
      <main>
        {skills && skills.length > 0 && (
          <section className={styles.skills}>
            <div className="container text--center">
              <h2>Skills</h2>
              <p>Over 8 years of development experience using these platforms, frameworks and languages</p>
              <div className="row">
                {skills.map((props, idx) => (
                  <Skill key={idx} {...props} />
                ))}
              </div>
              <hr />
            </div>
          </section>
        )}

        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
