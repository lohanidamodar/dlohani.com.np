
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function Project({ title, description, image, tech, playStore, appStore, web, github }) {
    return (

        <div className={clsx("container padding-bottom--xl")}>
            <img
                src={image}
                alt={title}
            ></img>
            <div className="row padding-top--md">
                <div className="col">
                    <h2>{title}</h2>
                    <p>{tech}</p>
                    <div className={styles.links}>
                        {github && <a title="github" href={github} target="_blank">
                            <img alt="github" src="img/github.svg" className={styles.icon} />
                        </a>}
                        {web && <a title="website" href={web} target="_blank">
                            <img alt="website" src="img/web.svg" className={styles.icon} />
                        </a>}
                        {playStore && <a title="play store" href={playStore} target="_blank">
                            <img alt="play store" src="img/playstore.svg" className={styles.icon} />
                        </a>}
                        {appStore && <a title="app store" href={appStore} target="_blank">
                            <img alt="app store" src="img/appstore.svg" className={styles.icon} />
                        </a>}
                    </div>
                </div>
                <div className="col">
                    <p>{description}</p>
                </div>
            </div>
        </div>

    );
}

export default Project;
