import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    imgSrc: require('@site/static/img/homepage3.png').default,
    title: 'SIL Global',
    description: (
      <>
        SIL is a global, faith-based nonprofit that works with local communities around the world to develop 
        language solutions that expand possibilities for a better life.
      </>
    ),
  },
  {
    imgSrc: require('@site/static/img/homepage2.png').default,
    title: 'OUR VISION FOR AI',
    description: (
      <>
        We long to see people flourishing in community as the benefits of AI and Natural Language Processing (NLP) 
        extend to local language speakers desiring to engage in the digital sphere.
      </>
    ),
  },
  {
    imgSrc: require('@site/static/img/homepage1.png').default,
    title: 'OUR WORK',
    description: (
      <>
        We partner with language communities to help provide access to & engagement with God's word, catalyze linguistically 
        diverse NLP research, and support all modalities of language (written, spoken, and signed).
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

