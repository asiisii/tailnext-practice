import { logo } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from '../shared/data';

export default function Navbar() {
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
        <div className='hidden md:flex space-x-6'>
          {NavLinks.map((link, index) => (
            <Link href={link.url} key={index}>
              <p className='hover:text-darkGrayishBlue'>{link.name}</p>
            </Link>
          ))}
        </div>
        {/* button */}
        <Link
          href='#'
          className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight'
        >
          <p>Get Started</p>
        </Link>
      </div>
    </nav>
  );
}
