import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from '../styles.module.css'
import Link from "@docusaurus/Link";

function Hero() {
    return (<header className={clsx('hero hero--secondary', styles.heroBanner, styles.heroBg, styles.heroFlutterWebBg)}>
        <div className="overlay">
            <div className="container--fluid">
                <h1 className="hero__title">Taking Flutter To Web</h1>
                <p className="hero__subtitle">Flutter web and much more.</p>
                <div className={styles.buttons}>
                    <a href="https://www.amazon.in/Taking-Flutter-Web-cross-platform-platforms/dp/1801817715"
                        target="_blank"
                        className={clsx(
                            'button button--primary button--lg',
                            styles.getStarted,
                        )}>
                        Get Your Copy
                    </a>
                </div>
            </div>
        </div>
    </header>);
}

export default Hero;