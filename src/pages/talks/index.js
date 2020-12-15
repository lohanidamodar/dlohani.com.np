
import React from 'react';
import Layout from '@theme/Layout';

import talks from '../../data/talks';
import Talk from './components/talk';

const TITLE = 'Community Activities';
const DESCRIPTION =
    'Some of my recent talks and community activities';

function Talks() {
    return (
        <Layout title={TITLE} description={DESCRIPTION}>
            <main className="margin-bottom--lg">
                <div className="hero text--center margin-bottom--xl">
                    <div className="container">
                        <h1 className="hero__title" >{TITLE}</h1>
                        <p className="hero__subtitle">{DESCRIPTION}</p>
                    </div>
                </div>
                {talks && talks.length > 0 && (
                    <div className="container">
                        {talks.map(talk =>
                            (
                                <Talk {...talk} />
                            )
                        )}
                    </div>
                )}
            </main>
        </Layout>
    );
}

export default Talks;
