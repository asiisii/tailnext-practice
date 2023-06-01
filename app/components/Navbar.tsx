'use client';
import { logo } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from '../shared/data';
import { useState } from 'react';

export default function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const handleClick = () => setDisplayMenu(!displayMenu);

  return (
    // for hamburger menu will be be absolute for it to happen the container needs to be relative
    <nav className='relative container mx-auto p-6 '>
      {/* flex container */}
      <div className='flex items-center justify-between'>
        {/* logo */}
        <div className='pt-2'>
          <Image src={logo} alt='manage logo' />
        </div>
        {/* Menu items */}
        {/* on medium screen and up it will be flex, space-x is space between each link */}
        <div className='hidden space-x-6 md:flex'>
          {NavLinks.map((link, index) => (
            <Link href={link.url} key={index}>
              <p className='hover:text-darkGrayishBlue'>{link.name}</p>
            </Link>
          ))}
        </div>
        {/* button */}
        <Link
          href='#'
          className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight md:block'
        >
          <p>Get Started</p>
        </Link>
        <button
          id='menu-btn'
          onClick={handleClick}
          className='block cursor-pointer w-6 h-6 relative md:hidden focus:outline'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/* mobile menu */}
      </div>
      {displayMenu ? (
        <div
          id='menu'
          className='absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md md:hidden'
        >
          {NavLinks.map((link, index) => (
            <Link href={link.url} key={index}>
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
