import React from "react";
import clsx from "clsx";
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../styles.module.css'
import Link from "@docusaurus/Link";

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
                        to={useBaseUrl('blog')}>
                        Checkout My Blog
                    </Link>
                    <Link
                        className={clsx(
                            'button button--outline button--primary button--lg margin-left--md',
                            styles.getStarted,
                        )}
                        to={useBaseUrl('book')}>
                        Schedule a Meeting
                    </Link>
                </p>
            </div>
        </section>
    );
}

export default CallToAction;