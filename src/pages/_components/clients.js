import React from 'react'
import clsx from 'clsx';
import clients from '../../data/clients';
import styles from '../styles.module.css'

function Clients() {
    return (
        <section className={clsx(styles.section, 'padding-vert--xl padding-horiz--lg container')}>
            <h2 className="text--center">Clients</h2>
            <p className="text--center margin-bottom--lg">Some of my recent clients</p>
            {clients.slice(0, 3).map((client, idx) => client.name )}
        </section>
    );
}

export default Clients;