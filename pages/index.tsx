import Head from 'next/head';
import Layout,{siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const name = 'Dragon-RH';

export default function Home() {
  return (
    <>
    
      <Layout home={1}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <p>Hello!</p>
        <p>
          this is my introduction page.
        </p>
      </section>
      <h3>
        <Link href="/other/learn">
          what I learned?<br /><br />
          Read More
        </Link><br /><br />
      </h3>
      <h3>
        <Link href="/other/did">
            what I did?<br /><br />
            Read More
        </Link>
      </h3>
        
      </Layout>
            {/* <style jsx>{`
              main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              footer img {
                margin-left: 0.5rem;
              }
              footer a {
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                color: inherit;
              }
              code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family:
                  Menlo,
                  Monaco,
                  Lucida Console,
                  Liberation Mono,
                  DejaVu Sans Mono,
                  Bitstream Vera Sans Mono,
                  Courier New,
                  monospace;
              }
            `}</style> */}
    </>
  );
}
