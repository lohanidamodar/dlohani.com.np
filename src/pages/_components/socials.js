import React, { Fragment } from "react"
import socials from "../../data/socials"
import clsx from "clsx"
import styles from '../styles.module.css'

export default function Socials(){
    return (
        <Fragment>
            {socials && socials.length > 0 && (
                <section className={clsx(styles.socials, styles.section)}>
                    <div className="container text--center padding--lg">
                        <h2>Follow Me On</h2>
                        <p>I would love to connect with you.</p>
                        <div className="row row--align-center">
                            {socials.map(({ label, link }, idx) => (
                                <a key={idx} className="padding-bottom-sm padding-left--md" href={link} target="_blank">{label}</a>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </Fragment>
    )
}
