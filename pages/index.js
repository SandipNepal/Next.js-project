import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa turpis, sodales eu dictum sed, aliquam non dui. Duis fermentum, velit nec lacinia lobortis, purus diam aliquet turpis, sed facilisis arcu ipsum nec tortor. Vestibulum non pretium ligula. Pellentesque iaculis augue vitae lacinia dictum. Maecenas accumsan, quam id bibendum pulvinar, mi risus fermentum erat, ut hendrerit elit justo vitae nisi. Nulla sem tellus, tristique vel leo at, convallis consectetur tellus. In bibendum dignissim odio, eu pulvinar odio tempor eu. Proin auctor augue dui, sit amet mollis nulla imperdiet nec. Nulla iaculis sodales mi facilisis rutrum</p>
        <p>
          (This is a sample website - my real website{' '}
          <a href="https://sandipnepal.com.np">Sandip Nepal</a>.)
        </p>
      </section>
    </Layout>
  );
}