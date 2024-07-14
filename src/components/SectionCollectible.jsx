function SectionCollectible() {
  return (
    <>
      <div className='bg-menuBackGroundColor flex-col items-center justify-center flex'>
        <div className='container w-full flex justify-center items-center'>
          <div className='grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 grid-rows-1 gap-12 justify-items-center mt-20 p-2'>
            <div className='2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-12 sm:col-span-12'>
              <div className='w-full md:w-full lg:w-full xl:w-full 2xl:w-full mr-0 xl:mr-12 2xl:mr-12 text-left mt-10 items-center'>
                <h2 className='text-6xl 2xl:text-7xl text-center md:text-center lg:text-left xl:text-left 2xl:text-left mb-8 font-extrabold'>
                  Collectible Sneakers
                </h2>
                <div className='w-full p-3 flex justify-center'>
                  <p className='w-full text-lg text-center md:md:text-center lg:text-left xl:text-left 2xl:text-left'>
                    Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu
                    imperdiet ipsum ultrices amet.
                  </p>
                </div>
                <div className='mt-8 flex justify-center lg:justify-start xl:justify-start 2xl:justify-start'>
                  <button className='w-40 mr-6 p-4 rounded-lg border-2 border-menuTextColor text-custom font-medium'>
                    Sign up now
                  </button>
                  <div className='flex p-4'>
                    <div className='p-2'>
                      <img src='/src/assets/sectionCollectibleicons/Vector.png' alt='' />
                    </div>
                    <div className='p-1.5'>
                      <button>Watch Demo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-12 sm:col-span-12 relative w-full h-100 flex items-center justify-center rounded-6xl'>
              <img
                src='/src/assets/sectionCollectibleicons/Pexels Photo by Ray Piedra.svg'
                className='absolute w-full 2xl:w-full xl:w-full lg:w-full h-full md:w-1/2 2xl:left-4 2xl:top-8 xl:left-0 xl:-top-14 lg:left-0 lg:top-0 md:left-30 md:-top-5'
                alt='Collectible Sneakers'
              />
              <div className='bg-sectionCollectibleBoxColor w-2/3 md:w-1/3 lg:w-2/3 xl:w-3/4 2xl:w-9/12 2xl:h-full xl:h-full lg:h-3/4 md:h-3/4 h-3/4 top-4 rounded-6xl'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCollectible;
