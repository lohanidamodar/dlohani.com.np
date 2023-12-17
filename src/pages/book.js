import React, { useEffect } from 'react'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";
import Cal, { getCalApi } from "@calcom/embed-react";

function Contact() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;


    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal.ns["30min"]("ui", { "styles": { "branding": { "brandColor": "#a21432" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

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

                <Cal namespace="30min"
                    calLink="lohanidamodar/30min"
                    style={{ width: "100%", height: "100%", overflow: "scroll", marginTop: "20px" }}
                    config={{ layout: 'month_view' }}


                />
            </main>

        </Layout>
    );
}

export default Contact;