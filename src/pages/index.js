import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import skills from '../data/skills';
import socials from '../data/socials';

function Skill({ title, icon }) {
  const imgUrl = useBaseUrl(icon);
  return (

    <div className={styles.skillImage}>
      <img src={imgUrl} alt={title} />
    </div>

  );
}

function CallToAction() {
  return (
    <section className={clsx('bg--primary', styles.cta, styles.section)}>
      <div className="container text--center">
        <h2>Ready to Get Started</h2>
        <p>Now that you know all about me and my works, tell me about you.</p>
        <p>
          <Link
            className={clsx(
              'button button--outline button--primary button--lg',
              styles.getStarted,
            )}
            to={useBaseUrl('contact')}>
            Check Out My Work
          </Link>
          <Link
            className={clsx(
              'button button--outline button--primary button--lg margin-left--md',
              styles.getStarted,
            )}
            to={useBaseUrl('contact')}>
            Shoot Me a Message
          </Link>
        </p>
      </div>
    </section>
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
          <section className={clsx(styles.skills, styles.section)}>
            <div className="container text--center">
              <h2>Skills</h2>
              <p>Over 8 years of development experience using these platforms, frameworks and languages</p>
              <div className="row row--align-center">
                {skills.map((props, idx) => (
                  <Skill key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        {CallToAction()}

        {socials && socials.length > 0 && (
          <section className={clsx(styles.socials, styles.section)}>
            <div className="container text--center padding--lg">
              <h2>Follow Me On</h2>

              <div className="row row--align-center">
                {socials.map(({ label, link }, idx) => (
                  <a className="padding-bottom-sm padding-left--md" href={link} target="_blank">{label}</a>
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
