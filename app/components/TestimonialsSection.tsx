import { aliAvatar, anishaAvatar, richardAvatar } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';

export const TestimonialsSection = () => (
  //Container to heading and testimonials blocks
  <section
    id='testimonials'
    className='max-w-6xl px-5 mx-auto mt-32 text-center'
  >
    {/* heading */}
    <h2 className='text-4xl font-bold text-center'>
      What&apos;s Different About Manage?
    </h2>
    {/* Testimonials Container */}
    <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
      {/* testimonial 1 */}
      <div className='flex flex-col items-center p-6 spae-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
        <Image src={anishaAvatar} alt='avatar nisha' className='w-16 -mt-14' />
        <h5 className='text-lg font-bold'>Anisha Li</h5>
        <p className='text-sm text-darkGrayishBlue'>
          &quot;Manage has supercharged out team&apos;s workflow. The ability to
          maintain visibility on larger milesstones at all times keeps everyone
          motivated.&quot;
        </p>
      </div>
      {/* testimonial 2 */}
      <div className='hidden flex-col items-center p-6 spae-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
        <Image src={aliAvatar} alt='avatar ali' className='w-16 -mt-14' />
        <h5 className='text-lg font-bold'>Ali Bravo</h5>
        <p className='text-sm text-darkGrayishBlue'>
          &quot;We have been able to cancel so many subscriptions since using Manage.
          There is no more cross-channel confusion and everyone is much more
          focused.&quot;
        </p>
      </div>
      {/* testimonial 3 */}
      <div className='hidden flex-col items-center p-6 spae-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
        <Image src={richardAvatar} alt='avatar nisha' className='w-16 -mt-14' />
        <h5 className='text-lg font-bold'>Richard Watts</h5>
        <p className='text-sm text-darkGrayishBlue'>
          &quot;Manage allows us to provide structure and product keeps us organized
          and focused. I can&apos;t stop recommending them to everyone I talk
          to.&quot;
        </p>
      </div>
    </div>
    {/* button */}
    <div className='flex justify-center mt-16'>
      <Link
        href='#'
        className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight'
      >
        <p>Get Started</p>
      </Link>
    </div>
  </section>
);
