import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>星尘</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Star Dust – 星尘" />
        <meta property="og:title" content="Star Dust – 星尘" />
        <meta property="og:image" content="https://star-dust.vercel.app/favicon.jpg" />
        <meta property="og:site_name" content="Star Dust – 星尘" />
        <meta property="og:description" content="Star Dust – 星尘" />
        <meta name="telegram:channel" content="@Ynewtime" />
        <link rel="shortcut icon" href="/favicon.jpg" type="image/jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
