import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MDXContent from '@theme/MDXContent';
import styles from './styles.module.css';
import skills from '../data/skills';
import BlogOne from '../featured/why-flutter.mdx';
import BlogTwo from '../featured/should-you-choose-flutter.mdx';
import Clients from './_components/clients';
import Socials from './_components/socials';
import Hero from './_components/hero';
import Skill from './_components/skills';
import CallToAction from './_components/call_to_action'
import TakingFlutterToWeb from './_components/taking_flutter_to_web';


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
            <h2>Do You Need a Tech Consultant?</h2>
            <p>The world of tech is challenging. May it be a career choice or a decision to build a new application. Choosing the right technology and following the correct patterns and architecture can be difficult. This is where I come, with my 10+ years of experience in self-learning and building small to large projects. I can help you in planning your career in tech. I can guide you with the proper tech stack and architecture while getting started with your application, and I can guide you when you get stuck during the development of your project.</p>
          </div>
        </section>
        {skills && skills.length > 0 && (
          <section className={clsx(styles.skills, styles.section)}>
            <div className="container text--center">
              <h2>Why Hire Me?</h2>
              <p>I've been in the technology field for over ten years now. I was heavily interested and continuously learning even before that. I have worked with clients on various projects using multiple technologies, platforms, frameworks, and languages. I love to figure out the best solution to the problem and the best technology to use to solve the problem. I'm always experimenting with various technologies and always learning.</p>
              <div className="row row--align-center">
                {skills.map((props, idx) => (
                  <Skill key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        <TakingFlutterToWeb />

        <section className={clsx(styles.section, 'bg--primary')}>
          <div className="container padding-vert--xl">
            <div className="row row--align-center">
              <div className="col col--6 text--justify">
                <MDXContent>
                  <BlogTwo />
                </MDXContent>
              </div>
            </div>
          </div>
        </section>

        <Clients />

        <CallToAction />

        <Socials />

      </main>
    </Layout>
  );
}

export default Home;
