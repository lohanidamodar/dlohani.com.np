import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import skills from '../data/skills';
import socials from '../data/socials';
import projects from '../data/projects';
import testimonials from '../data/testimonials';
import Project from './projects/components/project';
import BlogOne from '../featured/why-flutter.mdx';

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
            Checkout My Blog
          </Link>
          <Link
            className={clsx(
              'button button--outline button--primary button--lg margin-left--md',
              styles.getStarted,
            )}
            to={useBaseUrl('contact')}>
            Schedule a Meeting
          </Link>
        </p>
      </div>
    </section>
  );
}

function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
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
            Schedule a Call
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
      title={`${siteConfig.title} | ${siteConfig.tagline}r`}
      description="Description will go into a meta tag in <head />">
      <Hero />
      <main>
        <section className={clsx('bg--primary', styles.intro, styles.section)}>
          <div className="container">
            <h2>Why Do You Need a Tech Consultant?</h2>
            <p>World of tech is challenging, may it be a career choice or it is a decision to build new application. Choosing the right technology, following the right patterns and architecture can be difficult. This is where I come, with my 10+ years of experience in self learning, building small and large projects. I can help you in planning your career in tech. I can guide you with proper tech stack and architecture while getting started with your application and I can guide you when you get stuck during development of your project.</p>
          </div>
        </section>
        {skills && skills.length > 0 && (
          <section className={clsx(styles.skills, styles.section)}>
            <div className="container text--center">
              <h2>Why Hire Me?</h2>
              <p>I've been in the technology field for over 10 years now. I was heavely interested and always learning even befor that. I have been working with wide range of clients for varieties of projects using tons of different technologies, platforms, frameworks and languages. I love to figure out best solution the problem and best technology to use to solve the problem. I'm always experimenting with various technologies and always learning.</p>
              <div className="row row--align-center">
                {skills.map((props, idx) => (
                  <Skill key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={clsx(styles.section, 'bg--primary')}>
          <div className="container padding-vert--xl">
            <div className="row">
              <div className="col col--6">
                <BlogOne />
              </div>
              <div className="col col--6">
                <BlogOne />
              </div>
            </div>
          </div>

        </section>


        {/* {projects && projects.length > 0 && (
          <RecentProjects />
        )} */}

        {/* {testimonials && testimonials.length > 0 && (
          <Testimonials />
        )} */}

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
