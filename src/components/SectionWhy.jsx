function WhyJoin() {
  return (
    <>
      <div className='bg-sectionWhyBgColor flex-col items-center justify-center flex'>
        <div className='container w-full flex justify-center items-center relative'>
          <div className='grid grid-cols-12  bg-white text-left items-center flex-wrap 2xl:flex-nowrap p-4 md:p-10 rounded-3xl shadow-2xl dark-xxl-combined'>
            <div className='col-span-12 md:col-span-6 flex flex-wrap md:justify-start justify-center items-center md:p-10 p-4'>
              <h2 className='w-full text-center md:text-left mb-10 mt-10 md:mt-0 text-2xl font-extrabold md:text-6xl'>
                Why join us
              </h2>
              <ul className='w-full'>
                <li className='w-full flex items-center mb-2'>
                  <img src='/src/assets/sectionWhyicons/correct-icon.png' alt='' className='mr-3 ml-5 mb-5 md:ml-0 md:mb-0' />
                  <p className='md:text-xl'>Est et in pharetra magna adipiscing ornare aliquam.</p>
                </li>
                <li className='flex items-center mb-2'>
                  <img src='/src/assets/sectionWhyicons/correct-icon.png' alt='' className='mr-3 ml-5 mb-5 md:ml-0 md:mb-0' />
                  <p className='md:text-xl'>Tellus arcu sed consequat ac velit ut eu blandit.</p>
                </li>
                <li className='flex items-center mb-2'>
                  <img src='/src/assets/sectionWhyicons/correct-icon.png' alt='' className='mr-3 ml-5 mb-5 md:ml-0 md:mb-0' />
                  <p className='md:text-xl'>Ullamcorper ornare in et egestas dolor orci.</p>
                </li>
              </ul>
              <button className='w-44 mt-5 py-4 rounded-lg border-2 border-menuTextColor text-xl text-menuTextColor font-medium'>
                Sign up now
              </button>
            </div>
            <div className='w-full col-span-1 absolute inset-0'>
              <img
                src='/src/assets/sectionWhyicons/RectangleYellow.png'
                alt=''
                className='top-60 right-8 2xl:top-52 2xl:right-28 md:top-16 xl:top-18 xl:right-24 absolute lg:w-auto xl:w-auto 2xl:w-auto'
              />
              <img
                src='/src/assets/sectionWhyicons/RectangleBrown.png'
                alt=''
                className='bottom-40 left-3 2xl:left-122 2xl:top-96 xl:left-11 xl:top-72 absolute w-12 lg:w-auto xl:w-auto 2xl:w-auto'
              />
              <img
                src='/src/assets/sectionWhyicons/RectangleRoundBlueSmall.png'
                alt=''
                className='top-96 right-12 2xl:top-60 2xl:right-44 xl:top-20 xl:right-44 absolute w-12 lg:w-auto xl:w-auto 2xl:w-auto'
              />
              <img
                src='/src/assets/sectionWhyicons/RectangleRoundPink.png'
                alt=''
                className='bottom-0 right-18 2xl:bottom-78 2xl:right-56 xl:bottom-56 xl:right-52 absolute w-12 lg:w-auto xl:w-auto 2xl:w-auto'
              />
              <img
                src='/src/assets/sectionTheBesticons/RectangleSquarePink.png'
                alt=''
                className='-bottom-10 -right-0 xl:-right-4 xl:bottom-20 2xl:bottom-52 2xl:-right-2 absolute w-24 lg:w-auto xl:w-auto 2xl:w-auto'
              />
            </div>
            <div className='col-span-12 md:col-span-6 justify-center items-center md:p-10 mb-3 mt-10 relative'>
              <div className='flex justify-center items-center'>
                <div className='w-full dark-xxl-combined shadow-2xl p-1 rounded-xl bg-white flex flex-col items-center'>
                  <div className='w-full h-4'>
                    <div className='w-full flex space-x-2 p-2 '>
                      <div className='rounded-full w-2 h-2 bg-red-600'></div>
                      <div className='rounded-full w-2 h-2 bg-yellow-400'></div>
                      <div className='rounded-full w-2 h-2 bg-green-600'></div>
                    </div>
                  </div>
                  <div className='rounded-xl w-full flex justify-center'>
                    <img src='/src/assets/sectionWhyicons/Video.png' alt='' className='rounded-xl' />
                    <img
                      src='/src/assets/sectionWhyicons/RectangleRoundGreen.png'
                      alt=''
                      className='-bottom-5 left-8 2xl:bottom-1  2xl:left-32 absolute w-12 2xl:w-auto'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyJoin;
