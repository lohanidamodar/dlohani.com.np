import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MDXContent from '@theme/MDXContent';
import styles from './styles.module.css';
import ToC from '../featured/flutter-web-toc.mdx';
import Hero from './_components/hero_flutter_web';


function Home() {
  return (
    <Layout
      title="Flutter Web Book"
      description="Flutter web, Flutter Firebase, Appwrite Integration, Navigator 2 and more book">
        <Head>
        <meta name="keywords" content="flutter, flutter web, book, flutter for web, navigator, riverpod" />
        <meta property="og:image" content="img/projects/taking-flutter-to-web.jpg" />
      </Head>
      <Hero />
      <main>
        <section className={clsx(styles.section, 'bg--primary')}>
          <div className="container padding-vert--xl">
            <div className="row row--align-center">
              <div className="col col--6 text--left">
                <MDXContent>
                  <ToC />
                </MDXContent>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
