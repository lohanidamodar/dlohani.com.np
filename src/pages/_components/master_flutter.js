import React from 'react'
import clsx from 'clsx';
import styles from '../styles.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl';

function TakingFlutterToWeb() {
    return (
        <section className={clsx(styles.section, 'padding-vert--xl padding-horiz--lg')}>
            <div className='container'>
                <div className="row row--align-center">
                    <div className="col col--3 text--right">
                        <img className={styles.masterFlutter} src={useBaseUrl('img/projects/master-flutter.png')} alt="Master Flutter" />
                    </div>
                    <div className="col col--4">
                        <h2>Master Flutter</h2>
                        <p>Introducing Master Flutter - the ultimate guide to learning Dart and Flutter through practical projects and comprehensive resources. Whether you're a seasoned developer or just getting started, our project-based approach covers everything you need to know about building high-quality, cross-platform mobile and web applications.</p>
                        <p>
                            <a
                                className={clsx(
                                    'button button--outline button--primary button--md',
                                    styles.getStarted,
                                )}
                                target="_blank"
                                href="https://masterfultter.appwriters.dev">
                                Start Learning
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TakingFlutterToWeb;