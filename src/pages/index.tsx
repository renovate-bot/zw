// @ts-nocheck
import React from 'react';
import clsx from 'clsx';
import FeaturesList from '@site/src/components/FeaturesList';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Image from '@theme/IdealImage';

function SocialHome() {
  return (
    <div className={styles.SocialHome}>
      <p>
        <Link href='https://github.com/z-shell/community/discussions'>
          <Image className="ScreenViewSmall" img='https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.discussions.svg' alt='Discussions' />
        </Link>
      </p>
      <p>
        <Link href='https://twitter.com/zshell_zi'>
          <Image className="ScreenViewSmall" img='https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.tweets.svg' alt='Tweets' />
        </Link>
      </p>
      <p>
      <Link href='https://dev.to/tag/zsh'>
        <Image className="ScreenViewSmall" img='https://raw.githubusercontent.com/z-shell/.github/main/metrics/plugin.dev.tag.zsh.rss.svg' alt='RSS-DEV-TAG-ZSH' />
      </Link>
      </p>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h3 className="hero__title">{siteConfig.title}</h3>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            <Translate id="homepage.button" description="The homepage button to wiki introduction">
              &#128162; Make it work, make it right, make it Fast &#128162;
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.tagline}`} description="The Open Source Society with Link passion for Zsh <head />">
      <HomepageHeader />
      <main>
        <FeaturesList />
        <SocialHome />
      </main>
    </Layout>
  );
}
