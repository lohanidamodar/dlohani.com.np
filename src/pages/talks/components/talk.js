
import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


function Talk({ title, description, slide, link, code, date }) {

    return (

        <div className="card margin-bottom--lg">
            <div className="card__header">
                <h3 className="card__title">{title}</h3>
                <p className="">{new Date(date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                })}</p>
            </div>
            <div className="card__body">
                <p>{description}</p>
            </div>
            <div className="card__footer">
                <div className={styles.links}>
                    {code && <a title="github" href={code} target="_blank">
                        <img alt="github" src={useBaseUrl('img/github.svg')} className={styles.iconsm} />
                    </a>}
                    {link && <a title="website" href={link} target="_blank">
                        <img alt="website" src={useBaseUrl("img/web.svg")} className={styles.iconsm} />
                    </a>}
                    {slide && <a title="slide" href={slide} target="_blank">
                        <img alt="slide" src={useBaseUrl("img/slide.svg")} className={styles.iconsm} />
                    </a>}
                </div>
            </div>
        </div>
    );
}

export default Talk;
