
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function Project({ title, description, image, tech }) {
    return (

        <div className={clsx("container padding-bottom--xl")}>
            <img
                src={image}
                alt={title}
            ></img>
            <div className="row padding-top--md">
                <div className="col">
                    <h2>{title}</h2>
                    <p>{tech}</p>
                </div>
                <div className="col">
                    <p>{description}</p>
                </div>
            </div>
        </div>

    );
}

export default Project;
