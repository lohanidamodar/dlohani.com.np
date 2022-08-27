import React from "react";
import clsx from "clsx";
import styles from '../styles.module.css'

export default function RecentProjects() {
    return (
      <section className={clsx(styles.section, 'padding-vert--xl padding-horiz--lg container')}>
        <h2 className="text--center">Projects</h2>
        <p className="text--center margin-bottom--lg">Some of my recent projects</p>
        {projects.slice(0, 3).map((project, idx) => <Project key={idx} {...project} />)}
      </section>
    );
  }