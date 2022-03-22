import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import topImage from '../public/assets/1920x600.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>BANKSYS DOG</title>
      </Head>

      <Image src={topImage} alt={process.env.NEXT_PUBLIC_NFT_NAME} />

      <div className="bg-blue-200 py-8">
        <Prose>
          <h1 className="text-5xl font-bold mb-2">
            {process.env.NEXT_PUBLIC_NFT_NAME}
          </h1>
          <p className="text-xl">
          This exciting; one of a kind; game changing passive income NFT drop will be with Polygon living on the Ethereum Blockchain where it is safe from hacks; gas free and easy to airdrop royalties and more to hodlers!

It will be 2000 MATIC to join this project and could wind up becoming the biggest NFT story of this decade!
          </p>
        </Prose>
      </div>

      <div className="py-8">
        <Prose>
          <Minting />
        </Prose>
      </div>

      <div className="bg-green-300 py-8">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-yellow-200 py-8">
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="bg-blue-200 py-8">
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
