
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


function ClientDetails({ key, name, link, techStack, description}) {

    return (
        <a href={useBaseUrl('projects/' + slug)} className={styles.link} >
            <div className="card margin-bottom--lg">
                <div className="card__image">
                    <img
                        src={useBaseUrl(image)}
                        alt={title}
                    ></img>
                </div>
                <div className="card__body">
                    <h3>{title}</h3>
                    <p>{tech}</p>
                </div>
                <div className="card__footer">
                    <div className={styles.links}>
                        {github && <a title="github" href={github} target="_blank">
                            <img alt="github" src={useBaseUrl('img/github.svg')} className={styles.iconsm} />
                        </a>}
                        {web && <a title="website" href={web} target="_blank">
                            <img alt="website" src={useBaseUrl("img/web.svg")} className={styles.iconsm} />
                        </a>}
                        {playStore && <a title="play store" href={playStore} target="_blank">
                            <img alt="play store" src={useBaseUrl('img/playstore.svg')} className={styles.iconsm} />
                        </a>}
                        {appStore && <a title="app store" href={appStore} target="_blank">
                            <img alt="app store" src={useBaseUrl('img/appstore.svg')} className={styles.iconsm} />
                        </a>}
                    </div>
                </div>
            </div>
        </a>

    );
}

export default ClientDetails;
