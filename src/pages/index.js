import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import skills from '../data/skills';
import socials from '../data/socials';
import useThemeContext from '@theme/hooks/useThemeContext';
import projects from '../data/projects';
import testimonials from '../data/testimonials';
import Project from './projects/components/project';

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
            to={useBaseUrl('projects')}>
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

function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { isDarkTheme } = useThemeContext();
  return (<header className={clsx('hero hero--secondary', styles.heroBanner, styles.heroBg)}>
    <div className="overlay">
      <div className="container--fluid">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              'button button--primary button--lg',
              styles.getStarted,
            )}
            to={useBaseUrl('contact')}>
            Let's Connect
          </Link>
        </div>
      </div>
    </div>
  </header>);
}

function RecentProjects() {
  return (
    <section className={clsx(styles.section, 'padding-vert--xl padding-horiz--lg container')}>
      <h2 className="text--center">Projects</h2>
      <p className="text--center margin-bottom--lg">Some of my recent projects</p>
      {projects.slice(0, 3).map((project, idx) => <Project key={idx} {...project} />)}
    </section>
  );
}

function Testimonials() {
  return (<section className={clsx(styles.section, 'padding-vert--xl padding-horiz--lg container--fluid')}>
    <div className="container">
      <div className="row">
        {testimonials.slice(0, 2).map((testimonial, idx) => <div className="col col--6">
          <div class="avatar avatar--vertical">
            {testimonial.image && <img
              class={clsx(styles.testimonialAvatar, 'avatar__photo avatar__photo--xl')}
              src={testimonial.image}
            />}
            <div class="avatar__intro">
              <h4 class="avatar__name">{testimonial.name}</h4>
              <small class="avatar__subtitle">
                {testimonial.position && testimonial.position} {testimonial.company}
              </small>
            </div>
          </div>
          <p className="padding-top--md text--center">{testimonial.testimonial}</p>
        </div>)}
      </div>
    </div>
  </section>)
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} | Web and Mobile Developer`}
      description="Description will go into a meta tag in <head />">
      <Hero />
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

        {projects && projects.length > 0 && (
          <RecentProjects />
        )}

        {testimonials && testimonials.length > 0 && (
          <Testimonials />
        )}

        <CallToAction />

        {socials && socials.length > 0 && (
          <section className={clsx(styles.socials, styles.section)}>
            <div className="container text--center padding--lg">
              <h2>Follow Me On</h2>
              <p>I would love to connect with you.</p>
              <div className="row row--align-center">
                {socials.map(({ label, link }, idx) => (
                  <a key={idx} className="padding-bottom-sm padding-left--md" href={link} target="_blank">{label}</a>
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
