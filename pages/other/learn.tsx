import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function Learn() {
  return (
      <Layout home={0}>
        <Head>
          <title>what I learned?</title>
        </Head>
        
        <h1>what I learned?</h1>
        <br />
        <h2>
            <a>Python</a>
        </h2>
        I can write a code in Python. and I learned AI technology and algolismn!<br />
        <h3>
          <a href="https://github.com/Doragon-RH/supporta-z_vol.6_API">
              This is what I did.
          </a>
        </h3>
        And I also use Python to play AtCoder!<br />
        <h3>
          <a href="https://atcoder.jp/users/ryuuhon">
              This is My profile.
          </a>
        </h3>
        <h3>
            <a>HTML, CSS</a>
        </h3>
        I leaned html and css!<br />
        <h3>
          <a href="https://github.com/Doragon-RH/homepage">
              This is what I did!
          </a>
        </h3>
        <h3>
            <a>JavaScript</a>
        </h3>
        I Learned js and its framework, React.js and React's framework, Next.js!<br />
          <h3>
              <a href="https://github.com/Doragon-RH/learnReact">
                  This is what I learned about React!
              </a><br /><br />
              <a href="">
                  This is what I learned about Next.js!
              </a><br /><br />
              And this page is what I learning now! maybe...
          </h3>

        
        </Layout>
    );
}