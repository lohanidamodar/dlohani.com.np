import React from 'react'
import clsx from 'clsx';
import clients from '../../data/clients';
import styles from '../styles.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl';


function Client({ name, techStack, logo, link}) {
    return(
        <div>
            <img src={useBaseUrl(logo)} alt={name} />
            <p>{name}</p>
        </div>
    );
}

function Clients() {
    return (
        <section className={clsx(styles.section, 'padding-vert--xl padding-horiz--lg container')}>
            <h2 className="text--center">Recent Clients</h2>

            <div className={styles.clients}>
                {clients.slice(0, 3).map((client, idx) => <Client {...client} /> )}
            </div>
        </section>
    );
}

export default Clients;