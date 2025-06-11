'use client';

import { useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import IconButton from '@/components/atoms/IconButton';
import InfoView from '@/components/molecules/InfoView';
import Carousel from '@/components/molecules/Carousel';
import Sidebar from '@/components/molecules/Sidebar';
import Button from '@/components/atoms/Button';
import { getData } from '@/services/getData';
import { getImage } from '@/services/getImage';
import hamburguerIcon from '@/../public/hamburguerIcon.svg';
import arrowIcon from '@/../public/arrowIcon.svg';

interface HomeProps {
  data: any;
  images: { image: string }[];
}

export default function Home({ data, images }: HomeProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const hamburgerBtnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Head>
        <title>Challenge Bidcom</title>
        <meta
          name="description"
          content="Challenge para posición de dev frontend en Bidcom"
        />
        <link rel="icon" href="/favicon.ico" />
        {images[0] && <link rel="preload" as="image" href={images[0].image} />}
      </Head>

      <div className="relative min-h-screen flex flex-col">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="absolute top-4 right-4 z-50">
          <IconButton
            ref={hamburgerBtnRef}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Image
              src={hamburguerIcon}
              alt="Hamburger"
              width={30}
              height={30}
            />
          </IconButton>
        </div>

        <div className="flex flex-1 flex-col lg:flex-row items-center justify-center gap-8 p-6">
          <div className="w-full lg:w-1/2 flex justify-center">
            <InfoView data={data} />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Carousel images={images} priorityIndex={0} />
          </div>
          <div className="w-full block lg:hidden">
            <Button href={data.button.link}>{data.button.title}</Button>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <IconButton>
            <Image src={arrowIcon} alt="Arrow" width={30} height={30} />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const [data, images] = await Promise.all([getData(), getImage()]);

    const validImages = await Promise.all(
      images.map(async (img: { image: string }) => {
        try {
          const res = await fetch(img.image, { method: 'HEAD' });
          return res.ok ? img : null;
        } catch {
          return null;
        }
      })
    );

    return {
      props: { data, images: validImages.filter(Boolean) },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { data: null, images: [] },
    };
  }
}
