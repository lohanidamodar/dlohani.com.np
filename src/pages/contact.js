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
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf1imMuA15b38x5OGRznJ4kKK9jDZgUIkwmWCQOeRI8ollEMw/viewform?embedded=true" width="100%" height="1700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </main>

        </Layout>
    );
}

export default Contact;