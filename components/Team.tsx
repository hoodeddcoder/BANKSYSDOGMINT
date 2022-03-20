import Image from 'next/image';

import Creator from '../public/assets/creator.png';

export default function Team() {
  return (
    <div className="text-center">
      <h2 className="text-2xl text-black mb-4">Creator & Developer</h2>
      <Image
        src={Creator}
        alt="MKC"
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="mt-4">
        <a
          href="https://twitter.com/banksysdog"
          rel="noopener noreferrer"
          target="_blank"
          className="text-black"
        >
          <span className="border-2 border-black hover:border-black rounded-full px-4 py-2 bg-blue-200">
          @banksysdog
          </span>
        </a>
      </p>
    </div>
  );
}
