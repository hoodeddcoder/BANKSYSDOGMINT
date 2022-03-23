import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { FaTwitter, FaDiscord, FaShip, FaInstagram } from 'react-icons/fa';

import Blockies from './Blockies';
import ConnectButton from './ConnectButton';
import Container from './Container';
import NextLink from './NextLink';
import { useContractContext } from '../context/Contract';
import { injected } from '../utils/wallet/connectors';
import Logo from '../public/assets/logo.png';

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});

export default function Header() {
  const { activate, setError, chainId, account, active } = useWeb3React();

  const { errMsg, setErrMsg } = useContractContext();

  useEffect(() => {
    async function loadInjectedWallet() {
      const isAuthorized = await injected.isAuthorized();
      if (isAuthorized) {
        await activate(injected);
      }
    }
    if (typeof window.ethereum !== 'undefined') {
      try {
        loadInjectedWallet();
      } catch (error) {
        if (error instanceof Error) setError(error);
      }
    }
  }, [activate, setError]);

  useEffect(() => {
    if (active) {
      if (
        chainId &&
        chainId.toString() !== process.env.NEXT_PUBLIC_NETWORK_ID
      ) {
        setErrMsg(
          `Change the network to ${process.env.NEXT_PUBLIC_NETWORK_ID}.`
        );
      } else {
        setErrMsg('');
      }
    } else {
      setErrMsg('');
    }
  }, [active, chainId, setErrMsg]);

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-blue-200 border-b py-2">
        <Container>
          <div className="flex justify-between items-center">
            <NextLink href="/" className="text-2xl font-bold text-black">
              <span className="flex items-center">
                <Image
                  src={Logo}
                  alt={process.env.NEXT_PUBLIC_NFT_NAME}
                  width={80}
                  height={80}
                  
                />
                <span className="hidden sm:block ml-2">
                  {process.env.NEXT_PUBLIC_NFT_NAME}
                </span>
              </span>
            </NextLink>

            <div className="flex items-center space-x-2 ml-2 sm:ml-0">
              <ReactTooltip
                id="header"
                place="bottom"
                type="dark"
                effect="solid"
                textColor="#e2e8f0"
              />
              <a
                href={process.env.NEXT_PUBLIC_TWITTER_URL}
                aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on Twitter`}
                rel="noopener noreferrer"
                target="_blank"
                data-tip="Twitter"
                data-for="header"
                className="bg-blue-200 hover:bg-white-700 rounded-full p-2"
              >
                <FaTwitter />
              </a>
              <a
              href='https://www.instagram.com/banksysdog/'
              aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on Instagram`}
              rel="noopener noreferrer"
              target="_blank"
              data-tip="Instagram"
              data-for="footer"
              className="bg-blue-200 hover:bg-white-700 rounded-full p-2"
            >
              <FaInstagram />
            </a>
              
              
              {active && account ? (
                <span className="flex items-center space-x-2 p-2 bg-blue-200 rounded-full">
                  <span>
                    <Blockies
                      seed={account.toLowerCase()}
                      className="rounded-full"
                    />
                  </span>
                  <span>
                    {`${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )}`}
                  </span>
                </span>
              ) : (
                <ConnectButton />
              )}
            </div>
          </div>
        </Container>
      </header>

      {errMsg && <div className="bg-red-400 p-4 text-center">{errMsg}</div>}
    </div>
  );
}
