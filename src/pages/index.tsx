import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>App with chat</title>
      </Head>
      <main>
        <h1>main page</h1>
        <a href="/chat">go to chat</a>
      </main>
    </>
  );
}
