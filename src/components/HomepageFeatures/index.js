import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    imgSrc: require('@site/static/img/SIL_logo.png').default,
    title: 'Language is essential to human life.',
    description: (
      <>
        The languages we speak or sign are at the very core of our human identity and integral 
        to our ability to flourish in life.
      </>
    ),
  },
  {
    imgSrc: require('@site/static/img/SIL_logo.png').default,
    title: 'SIL International',
    description: (
      <>
        SIL is a global, faith-based nonprofit that works with 
        local communities around the world to develop language solutions that expand possibilities for a better life.
      </>
    ),
  },
  {
    imgSrc: require('@site/static/img/aqua_map.webp').default,
    title: 'Our Vision for AI',
    description: (
      <>
        We long to see people flourishing in community as the benefits of AI and Natural Language Processing (NLP) 
        extend to local language speakers desiring to engage in the digital sphere.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

