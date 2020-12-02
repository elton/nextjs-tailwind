import Head from 'next/head';
import ChitChat from '../components/chitchat';
import NameCard from '../components/namecard';
import AntHello from '../components/anthello';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ChitChat />
      <NameCard />
      <AntHello />
    </>
  );
}
