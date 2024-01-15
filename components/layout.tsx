import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const name = 'Dragon-RH';
export const siteTitle = 'introduction';
export default function Layout({ children, home }) {
    return (
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.paper",
          height: "auto",
          margin: "20px",
        }}>
        {/* <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
            />
            <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
                siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head> */}
        <header className={styles.header}>
          {home ? (
            <>
              <Avatar
              alt=""
                src="/images/profile.jpg"
                sx={{ width: 200, height: 200 }}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
              <Avatar
              alt=""
                src="/images/profile.jpg"
                sx={{ width: 150, height: 150 }}
              />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && ( //0,null,false,undefined,NaN,""はfalseとして扱われる
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 1,
              p: 2,
              minWidth: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px",
            }}
          > 
          Powered by{' '}
          <Image 
          src="/vercel.svg" 
          alt="Vercel"
          width ={80}
          height={80}
          />
        </Box>
        </Link>
      </Box>
    );
}