import React from "react"
import clsx from "clsx"
import styles from '../styles.module.css';
import testimonials from "../../data/testimonials";

function Testimonials() {
  return (<section className={clsx(styles.section, 'padding-vert--xl padding-horiz--lg container--fluid')}>
    <div className="container">
      <div className="row">
        {testimonials.slice(0, 2).map((testimonial, idx) => <div className="col col--6">
          <div class="avatar avatar--vertical">
            {testimonial.image && <img
              class={clsx(styles.testimonialAvatar, 'avatar__photo avatar__photo--xl')}
              src={testimonial.image}
            />}
            <div class="avatar__intro">
              <h4 class="avatar__name">{testimonial.name}</h4>
              <small class="avatar__subtitle">
                {testimonial.position && testimonial.position} {testimonial.company}
              </small>
            </div>
          </div>
          <p className="padding-top--md text--center">{testimonial.testimonial}</p>
        </div>)}
      </div>
    </div>
  </section>)
}

export default Testimonials;