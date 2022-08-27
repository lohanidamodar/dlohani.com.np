import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from '../styles.module.css'
import Link from "@docusaurus/Link";

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
                        to={useBaseUrl('book')}>
                        Schedule a Call
                    </Link>
                </div>
            </div>
        </div>
    </header>);
}

export default Hero;