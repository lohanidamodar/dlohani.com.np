
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

import clsx from 'clsx';
import styles from './styles.module.css';
import projects from '../../data/projects';
import Project from './components/project';

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
                    <div className="container">
                        <div className="row">
                            {projects.map(project =>
                                (
                                    <div className="col col--4">
                                        <Project {...project} />
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )}
            </main>
        </Layout>
    );
}

export default Showcase;
