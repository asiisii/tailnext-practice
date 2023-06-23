export const FeatureSection = () => (
  <section id='features'>
    {/* flex container */}
    <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
      {/* what's different about manage? */}
      <div className='flex flex-col space-y-12 md:w-1/2'>
        <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
          What&apos;s different about Manage?
        </h2>
        <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      {/* numbered list */}
      <div className='flex flex-col space-y-8 md:w-1/2'>
        {/* list item 1 */}
        <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
          {/* heading */}
          <div className='round-l-full bg-brightRedSupLight md:bg-transparent'>
            <div className='flex items-center space-x-2'>
              <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                01
              </div>
              <h3 className='text-base font-bold md:mb-4 md:hidden'>
                Tracking company-wide progress
              </h3>
            </div>
          </div>
          <div>
            <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Tracking company-wide progress
            </h3>
            <p className='text-darkGrayishBlue'>
              See how your day-to-day tasks fit into the winder vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lost sight of the bigger picture again.
            </p>
          </div>
        </div>
        {/* list item 2 */}
        <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
          {/* heading */}
          <div className='round-l-full bg-brightRedSupLight md:bg-transparent'>
            <div className='flex items-center space-x-2'>
              <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                02
              </div>
              <h3 className='text-base font-bold md:mb-4 md:hidden'>
                Advanced built-in reports
              </h3>
            </div>
          </div>
          <div>
            <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Advanced built-in reports
            </h3>
            <p className='text-darkGrayishBlue'>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>
        {/* list item 3 */}
        <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
          {/* heading */}
          <div className='round-l-full bg-brightRedSupLight md:bg-transparent'>
            <div className='flex items-center space-x-2'>
              <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                03
              </div>
              <h3 className='text-base font-bold md:mb-4 md:hidden'>
                Everything you need in one place
              </h3>
            </div>
          </div>
          <div>
            <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Everything you need in one place
            </h3>
            <p className='text-darkGrayishBlue'>
              Stop jumping from one service to another to communicate, store
              files, track tasks andshare documents. Mangage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
