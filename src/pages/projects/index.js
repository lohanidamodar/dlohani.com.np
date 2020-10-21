
import React, { useEffect } from 'react';

// import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';

import clsx from 'clsx';
import styles from './styles.module.css';
import projects from '../../data/projects';

const TITLE = 'Projects';
const DESCRIPTION =
    'Some of my recent projects';

function Showcase() {
    return (
        <Layout title={TITLE} description={DESCRIPTION}>
            <main className="margin-bottom--lg">
                <div className="hero text--center margin-bottom--xl">
                    <div className="container">
                        <h1 className="hero__title" >{TITLE}</h1>
                        <p className="hero__subtitle">{DESCRIPTION}</p>
                    </div>
                </div>
                {projects && projects.length > 0 && (
                    <div className="row">
                        {projects.map(({ title, description, image, tech }) =>
                            (
                                <div class={clsx("container padding-bottom--xl")}>
                                    <img
                                        src={image}
                                        alt={title}
                                    ></img>
                                    <div class="row padding-top--md">
                                        <div className="col">
                                            <h2>{title}</h2>
                                            <p>{tech}</p>
                                        </div>
                                        <div className="col">
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                )}
            </main>
        </Layout>
    );
}

export default Showcase;
