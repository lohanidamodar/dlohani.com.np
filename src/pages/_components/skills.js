import React from 'react';
import styles from '../styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


function Skill({ title, icon }) {
    const imgUrl = useBaseUrl(icon);
    return (

        <div className={styles.skillImage}>
            <img src={imgUrl} alt={title} />
        </div>

    );
}

export default Skill;