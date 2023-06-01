import {
  facebookIcon,
  instagramIcon,
  logoWhite,
  pinterestIcon,
  twitterIcon,
  youtubeIcon,
} from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';

export const FooterSection = () => (
  <footer className='bg-veryDarkBlue'>
    {/* flex container */}
    <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
      {/* logo and social links container */}
      <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
        <div className='mx-auto my-6 text-center text-white md:hidden'>
          Copyright &copy; 2023, All Rights Reserved
        </div>
        {/* logo */}
        <div>
          <Image src={logoWhite} alt='white manage logo' />
        </div>
        {/* social links container */}
        <div className='flex justify-center space-x-4'>
          <Image src={facebookIcon} alt='facebook icon' className='h-8' />
          <Image src={youtubeIcon} alt='youtube icon' />
          <Image src={twitterIcon} alt='twitter icon' />
          <Image src={pinterestIcon} alt='pinterest icon' />
          <Image src={instagramIcon} alt='instagram icon' />
        </div>
      </div>
      {/* nav links */}
      <div className='flex justify-around space-x-32 text-white'>
        <div className='flex flex-col space-y-3'>
          <Link href='#' className='hover:text-brightRed'>
            Home
          </Link>
          <Link href='#' className='hover:text-brightRed'>
            Pricing
          </Link>
          <Link href='#' className='hover:text-brightRed'>
            Products
          </Link>
          <Link href='#' className='hover:text-brightRed'>
            About Us
          </Link>
        </div>
        <div className='flex flex-col space-y-3'>
          <Link href='#' className='hover:text-brightRed'>
            Careers
          </Link>
          <Link href='#' className='hover:text-brightRed'>
            Community
          </Link>
          <Link href='#' className='hover:text-brightRed'>
            Privacy Policy
          </Link>
        </div>
      </div>
      {/* input container */}
      <div className='flex flex-col justify-between'>
        <form>
          <div className='flex space-x-3'>
            <input
              type='text'
              placeholder='Updates in your inbox...'
              className='flex-1 px-4 rounded-full focus:outline-none'
            />
            <Link
              href='#'
              className='p-3 px-6 pt-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'
            >
              <p>GO</p>
            </Link>
          </div>
        </form>
        <div className='hidden text-white md:block'>
          Copyright &copy; 2023, All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
);
