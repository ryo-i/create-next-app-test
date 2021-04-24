import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components';
import styles from '../styles/Home.module.css'


const Span = styled.span`
  color: red;
  background: #eee;
  padding: 5px;
`;


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ようこそ、ねくすと・じぇいえすへ</title>
        <meta name="twitter:description" content="Next.js + TypeScript + CSS in JS環境です"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ようこそ、<a href="https://nextjs.org">ねくすと・じぇいえすへ！</a>
        </h1>

        <p className={styles.description}>
          たいぷすくりぷと、はじめました→{' '}
          <code className={styles.code}>pages/index.tsx</code><br />
          しーえすえすいんじぇいえすもはじめました→{' '}
          <Span>Styled-components style!!!</Span>
        </p>

        <div className={styles.grid}>
          <Link href="/other">
            <a className={styles.card}>
              <h3>メニュー &rarr;</h3>
              <p>別ページに進む</p>
            </a>
          </Link>
          <a href="https://www.i-ryo.com/entry/2021/04/23/071217" className={styles.card}>
            <h3>ブログ &rarr;</h3>
            <p>クモのようにコツコツと</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
