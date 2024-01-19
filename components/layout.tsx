// import Head from 'next/head';
import Image from 'next/image';
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { blue } from '@mui/material/colors';

const name = 'Doragon-RH';
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
          margin: "50px",
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
        
          {home ? (
            <>
              <Avatar
              alt="My picture"
                src="/images/profile.jpg"
                sx={{ width: 200, height: 200 }}
              />
              <Box component="h1" 
              sx={{
                color: blue[500],
              }}>{name}</Box>
            </>
          ) : (
            <>
              <Link href="/" >
              <Avatar
              alt="My picture"
                src="/images/profile.jpg"
                sx={{ width: 150, height: 150 }}
              />
              </Link>
              <Link href="/" underline="hover">
                <Box component="h2" 
                sx={{
                  color: blue[500],
                }}>{name}
                </Box>
              </Link>
            </>
          )}
        <Box component="section"
        sx={{
          padding: "20px",
        
        }}>{children}</Box>
        {!home && ( //0,null,false,undefined,NaN,""はfalseとして扱われる
          <Box
          sx={{
            padding: "20px",
          }}>
            <Link href="/" underline="hover">← Back to home</Link>
          </Box>
        )}
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 1,
              minWidth: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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