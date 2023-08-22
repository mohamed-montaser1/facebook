import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Facebook clone For Practicing And Upgrade My Portfolio to the next level"
        />
        <meta
          name="keywords"
          content="Next.js, Typescript, typescript, ts, next 13, tailwind css, tailwind"
        />
        <meta name="author" content="mohamed montaser" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
