import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Language is essential to human life.',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The languages we speak or sign are at the very core of our human identity and integral 
        to our ability to flourish in life.
      </>
    ),
  },
  {
    title: 'SIL International',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        SIL is a global, faith-based nonprofit that works with 
        local communities around the world to develop language solutions that expand possibilities for a better life.
      </>
    ),
  },
  {
    title: 'Our Vision for AI',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We long to see people flourishing in community as the benefits of AI and Natural Language Processing (NLP) 
        extend to local language speakers desiring to engage in the digital sphere.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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
