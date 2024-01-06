import Head from 'next/head';
import Layout,{siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';

const name = 'Dragon-RH';

export default function Home() {
  return (
    <>
    
      <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Button variant="contained">Hello world</Button>
      <section className={utilStyles.headingMd}>
        <p>Hello!</p>
        <p>
          this is my introduction page.
        </p>
      </section>
      <h3>
        <Link href="/other/learn">
          what I learned?<br />
        <br />
          Read More
        </Link><br /><br /><br />
        
      </h3>
      <Button variant="contained">
        <Link href="/other/did">
            what I did?       <br />
            Read More
        </Link>
      </Button>
      <Button variant="contained">Hello world</Button>
      </Layout>
      
             <footer>
               <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
              </a>
            </footer>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
            />

            <style jsx>{`
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
            `}</style>
    </>
  );
}
