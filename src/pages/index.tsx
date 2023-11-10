import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className="container">
        <h2 className={clsx("hero__subtitle", styles.gradientText)}>{siteConfig.tagline}</h2>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/page/courses">
            Learn
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout 
      title={`Hello from ${siteConfig.title}`}
      description="Learn, Follow, Support">
      <HomepageHeader/>
      <main>
      </main>
    </Layout>
  );
}
