// import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Box from "@mui/material/Box";
import { blue } from '@mui/material/colors';
import Link from "@mui/material/Link";

export default function Learn() {
  return (
      <Layout home={0}>
        <Head>
          <title>what I learned?</title>
        </Head>
        
        <Box
        component={TrendingUpIcon}
        sx={{ color: "green", fontSize: 25, verticalAlign: "sub" }}
        />
        <Box
          sx={{
            color: "green",
            display: "inline",
            fontWeight: "medium",
            mx: 1,
            fontSize: 30,
          }}
        >
          what I learned?
        </Box>
        <Box 
        sx={{
          padding: "1rem",
          fontSize: "1.5rem",
        }}>
          Python
        </Box>
        <Box
        sx={{
          padding: "1rem",
          color:  blue[500],
          fontSize: "1.5rem",
        }}>I can write a code in Python. and I learned AI technology and algolismn!</Box>
        <Box
        sx={{
          padding: "1rem",
          fontSize: "1.5rem",
        }}>
          <Link href="https://github.com/Doragon-RH/supporta-z_vol.6_API" underline="hover">
              This is what I did.
          </Link>
        </Box>
        <Box
        sx={{
          padding: "1rem",
          fontSize: "1.5rem",
        }}>And I also use Python to play AtCoder!</Box>
        <Box
        sx={{
          padding: "1rem",
          color:  blue[500],
          fontSize: "1.5rem",
        }}>
          <Link href="https://atcoder.jp/users/ryuuhon" underline="hover">
              This is My profile.
          </Link>
        </Box>
        <Box
        sx={{
          padding: "1rem",
          fontSize: "1.5rem",
        }}>
          HTML, CSS
        </Box>
        <Box
        sx={{
          padding: "1rem",
          color:  blue[500],
          fontSize: "1.5rem",
        }}
        >
          I leaned html and css!
        </Box>
        <Box
        sx={{
          padding: "1rem",
          color:  blue[500],
          fontSize: "1.5rem",
        }}>
          <Link href="https://github.com/Doragon-RH/homepage" underline="hover">
              This is what I did!
          </Link>
        </Box>
        <Box
        sx={{
          padding: "1rem",
          fontSize: "1.5rem",
        }}>
            JavaScript
        </Box>
        <Box
        sx={{
          padding: "1rem",
          color:  blue[500],
          fontSize: "1.5rem",
        }}>I Learned js and its framework, React.js and React's framework, Next.js!</Box>
        <Box
        sx={{
          padding: "1rem",
          fontSize: "1.5rem",
        }}>
          <Link 
          href="https://github.com/Doragon-RH/learnReact" 
          underline="hover">
            This is what I learned about React!
          </Link ><br />
          <Link 
          href="https://introduction-ctfzhuho4-honbinryus-projects.vercel.app/" 
          underline="hover">
            This is what I learned about Next.js!
          </Link>
        </Box>
        </Layout>
    );
}