import Head from 'next/head';
import ChitChat from '../components/chitchat';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ChitChat />
    </>
  );
}
