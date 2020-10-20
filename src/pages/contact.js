import React from 'react'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './styles.module.css';

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
                // google forms embed
            </main>

        </Layout>
    );
}

export default Contact;