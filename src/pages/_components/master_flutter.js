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
                        <p>Learn Effective. Master Dart & Flutter. Become Flutter Developer. A one stop no-nonsense guide to learn Dart &amp; Flutter. Project based, self-taught guide.</p>
                        <p>
                            <a
                                className={clsx(
                                    'button button--outline button--primary button--md',
                                    styles.getStarted,
                                )}
                                target="_blank"
                                href="https://flutter.appwriters.dev/subscribe">
                                Get Early Access
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TakingFlutterToWeb;