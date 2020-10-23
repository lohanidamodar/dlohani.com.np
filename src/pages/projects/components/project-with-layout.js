import React from 'react'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ProjectDetails from './project-details.js';
import projects from '../../../data/projects';

function ProjectWithLayout({ slug }) {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    const project = projects.find((p) => p.slug == slug);
    return (
        <Layout
            title={`${project.title} | ${siteConfig.title}`}
            description={project.description}>
            <main className="padding-top--lg">
                <ProjectDetails {...project} />
            </main>
        </Layout>
    );
}

export default ProjectWithLayout;