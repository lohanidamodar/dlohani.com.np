import React from 'react'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './styles.module.css';
import socials from '../data/socials';

function Contact() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`Contact ${siteConfig.title}`}
            description="contact details">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">Contact</h1>

                </div>
            </header>
            <main>
                {socials && socials.length > 0 && (
                    <div className="container padding-top--lg">
                        {socials.map(({ label, link }, idx) => (
                            <p>
                                <a key={idx} className="padding-bottom-sm padding-left--md" href={link} target="_blank">{label}</a>
                            </p>
                        ))}
                    </div>
                )}
            </main>

        </Layout>
    );
}

export default Contact;