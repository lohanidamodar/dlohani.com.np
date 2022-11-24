import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from '../styles.module.css'
import Link from "@docusaurus/Link";

function Hero() {
    return (<section className={clsx('hero hero--primary')}>
        <div className="container">
            <div className="row row--align-center">
                <div className="col col--6 text--right">
                    <img className={styles.bookImageLarge} src={useBaseUrl('img/projects/taking-flutter-to-web.jpg')} alt="Taking Flutter to Web" />
                </div>

                <div className="col col--6 text--left">
                    <h1 className="hero__title">Taking Flutter To Web</h1>
                    <p className="hero__subtitle">
                    <ul>
                        <li>Flutter Web</li>
                        <li>Navigator 2.0</li>
                        <li>Riverpod and MVVM</li>
                        <li>Appwrite Integration</li>
                        <li>Firebase Integration</li>
                        <li>and more</li>
                    </ul>

                    </p>
                    <a href="https://www.amazon.in/Taking-Flutter-Web-cross-platform-platforms/dp/1801817715"
                        target="_blank"
                        className={clsx(
                            'button button--secondary button--lg',
                            styles.getStarted,
                        )}>
                        Get Your Copy
                    </a>
                </div>
            </div>
        </div>
    </section>);
}

export default Hero;