import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function Did() {
    return (
        <>
            <Layout>
                <Head>
                <title>What I did</title>
                </Head>
                
                <h1>What I did</h1>
                <br />
                <h2>
                    <a>2022/04 ～ 2023/02</a>
                </h2>
                <p>
                    I learned algorizumn in piza and I learned html, css!<br />
                </p>
                <h2>
                    <a>2023/04 ～ 2023/08</a>
                </h2>
                <p>
                    I participated in the hackathon and I learned Python, git, docker, MySQL!<br />
                </p>
                <h2>
                    <a>2023/07 ～ 2023/11</a>
                </h2>
                <p>
                    基本情報技術者試験合格！<br />
                </p>
                <h2>
                    <a>2023/10 ～ 2023/12</a>
                </h2>
                <p>
                    Go言語学習<br />
                </p>
                <h2>
                    <a>2023/12 ～ now</a>
                </h2>
                <p>
                    AtCoderコンテスト参加<br />
                </p>
            </Layout>
        </>
    );
}