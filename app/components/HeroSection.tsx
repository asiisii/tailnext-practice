import { illustrationIntro } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section id='hero'>
      {/* medium screen and up = flex-row  */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0'>
        {/* left-item */}
        {/* medium screen and up - width to be half */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Bring everyone together to build better products
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Manage makes it simple for software items to plan day-to-day task
            while keeping the larger team goals in view.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              href='#'
              className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight'
            >
              <p>Get Started</p>
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
            <Image src={illustrationIntro} alt="illustration" />
        </div>
      </div>
    </section>
  );
};
