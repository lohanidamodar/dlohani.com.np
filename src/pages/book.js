import React, { useEffect } from 'react'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

function Contact() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    useEffect(() => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute(
          'src',
          'https://assets.calendly.com/assets/external/widget.js'
        );
        head.appendChild(script);
      }, []);
    
    return (
        <Layout
            title={`Contact ${siteConfig.title}`}
            description="contact details">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">Book Now</h1>
                    <p>These meetings are for paid consultation. If you have other requests reach out to me on <Link to="/contact">socials</Link></p>
                </div>
            </header>
            <main>
                <div class="calendly-inline-widget" data-url="https://calendly.com/lohanidamodar?hide_landing_page_details=1&hide_gdpr_banner=1" style={{minWidth:320, height:630}}></div>
            </main>

        </Layout>
    );
}

export default Contact;