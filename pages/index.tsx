import Head from 'next/head';
import Layout,{siteTitle} from '../components/layout';
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { blue } from '@mui/material/colors';
const name = 'Dragon-RH';
// const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
// onClick={preventDefault} クリックしたとき、ページ遷移を防ぐ
export default function Home() {
  return (
    <>
      <Layout home={1}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <Box component="section" 
      sx={{
        color: blue[500],
        fontSize: "2rem",
        padding: "1rem",
      }}>
        Hello! <br />
        this is my introduction page.
      </Box>
      <Box sx={{
        fontSize: "1.5rem",
        padding: "1rem",
      }}>
        what I learned? <br />
        <Link href="/other/learn" underline="hover">
        Read More
      </Link>
      </Box>
      
      <Box sx={{
        fontSize: "1.5rem",
        padding: "1rem",
      }}>
        what I did? <br />
        <Link href="/other/did" underline="hover" >
        Read More
      </Link>
      </Box>
      
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
