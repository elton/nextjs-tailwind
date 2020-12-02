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
      <div className='p-1 m-4 mx-auto md:flex '>
        <ChitChat />
        <NameCard />
        <AntHello />
      </div>
    </>
  );
}
