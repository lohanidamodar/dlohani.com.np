
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


function ProjectDetails({ title, description, image, tech, playStore, appStore, web, github }) {

    return (

        <div className={clsx("container padding-bottom--xl")}>
            <h1>{title}</h1>
            <p>{tech}</p>
            <div className="row">
                <div className="col col--11">
                    <img
                        className={clsx(styles.image)}
                        src={useBaseUrl(image)}
                        alt={title}
                    ></img>
                </div>
                <div className="col col--1">
                    <div className={styles.links, styles.vertical}>
                        {github && <a title="github" href={github} target="_blank">
                            <img alt="github" src={useBaseUrl('img/github.svg')} className={styles.icon} />
                        </a>}
                        {web && <a title="website" href={web} target="_blank">
                            <img alt="website" src={useBaseUrl("img/web.svg")} className={styles.icon} />
                        </a>}
                        {playStore && <a title="play store" href={playStore} target="_blank">
                            <img alt="play store" src={useBaseUrl('img/playstore.svg')} className={styles.icon} />
                        </a>}
                        {appStore && <a title="app store" href={appStore} target="_blank">
                            <img alt="app store" src={useBaseUrl('img/appstore.svg')} className={styles.icon} />
                        </a>}
                    </div>
                </div>
            </div>
            <div className="padding-top--md">
                <p>{description}</p>
            </div>
        </div>

    );
}

export default ProjectDetails;
