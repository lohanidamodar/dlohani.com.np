import React from 'react'
import clsx from 'clsx';
import styles from '../styles.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from "@docusaurus/Link";

function TakingFlutterToWeb() {
    return (
        <section className={clsx(styles.section, 'padding-vert--xl padding-horiz--lg')}>
            <div className='container'>
                <div className="row row--align-center">
                    <div className="col col--3 text--right">
                        <img className={styles.bookImage} src={useBaseUrl('img/projects/taking-flutter-to-web.jpg')} alt="Taking Flutter to Web" />
                    </div>
                    <div className="col col--4">
                        <h2>Taking Flutter to Web</h2>
                        <p>A web developer's guide to using Flutter for building responsive and adaptive web UIs using Flutter. Dive in deep into web application development using Flutter framework.</p>
                        <p>
                            <Link
                                className={clsx(
                                    'button button--outline button--primary button--md',
                                    styles.getStarted,
                                )}
                                to={useBaseUrl('flutter-web')}>
                                Learn more
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TakingFlutterToWeb;