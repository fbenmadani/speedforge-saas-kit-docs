import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Build MVP',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        SpeedForge is a full-stack boilerplate with guidelines to build MVPs in days and scale your product for years.Speed up your SaaS development with SpeedForge Saas Kit.
      </>
    ),
  },
  {
    title: 'Start a SaaS',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        SpeedForge lets you focus on your business logic, and we&apos;ll do the chores. Go
        ahead and build your SaaS.
      </>
    ),
  },
  {
    title: 'Powered by Laravel 13',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Speed Forge is built on top of cutting-edge technology :Laravel 13 + Livewire 4 + Tailwind CSS + Alpine.js + Flux UI
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
