import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MDXContent from '@theme/MDXContent';
import styles from './styles.module.css';
import BlogTwo from '../featured/should-you-choose-flutter.mdx';
import Hero from './_components/hero_flutter_web';


function Home() {
  const context = useDocusaurusContext();
  return (
    <Layout
      title="Flutter Web Book"
      description="Flutter web, Flutter Firebase, Appwrite Integration, Navigator 2 and more book">
      <Hero />
      <main>
        <section className={clsx('bg--primary', styles.intro, styles.section)}>
          <div className="container">
            <h2>What's Inside?</h2>
            <ul>
                <li>Flutter Web</li>
                <li>Navigator 2.0</li>
                <li>Riverpod and MVVM</li>
                <li>Appwrite Integration</li>
                <li>Firebase Integration</li>
                <li>and more</li>
            </ul>
          </div>
        </section>

      </main>
    </Layout>
  );
}

export default Home;
