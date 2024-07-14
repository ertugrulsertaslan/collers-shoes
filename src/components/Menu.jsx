import { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='bg-menuBackGroundColor flex-col items-center justify-center flex'>
        <nav className='container p-4'>
          <div className='max-w-7xl mx-auto flex items-center justify-between'>
            <div className='flex items-center'>
              <h2 className='text-menuTextColor text-3xl font-bold'>Collers</h2>
            </div>
            <div className='hidden md:flex space-x-4'>
              <button className='py-3 px-2 text-menuTextColor font-medium'>Products</button>
              <button className='py-3 px-2 text-menuTextColor font-medium'>Solutions</button>
              <button className='py-3 px-2 text-menuTextColor font-medium'>Pricing</button>
              <button className='py-3 px-2 text-menuTextColor font-medium'>Resources</button>
              <button className='py-3 px-2 text-menuTextColor font-medium'>Log In</button>
              <button className='w-36 p-3 px-4 text-menuTextColor font-medium border-2 border-menuTextColor rounded-lg'>
                Sign up now
              </button>
            </div>
            <div className='md:hidden'>
              <button onClick={handleClick} className='text-black focus:outline-none'>
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  {isOpen ? (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  ) : (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {isOpen && (
            <div className='md:hidden mt-2 flex flex-col items-center'>
              <button className='block py-3 px-2 text-menuTextColor font-medium'>Products</button>
              <button className='block py-3 px-2 text-menuTextColor font-medium'>Solutions</button>
              <button className='block py-3 px-2 text-menuTextColor font-medium'>Pricing</button>
              <button className='block py-3 px-2 text-menuTextColor font-medium'>Resources</button>
              <button className='block py-3 px-2 text-menuTextColor font-medium'>Log In</button>
              <button className='block w-36 p-3 px-4 text-menuTextColor font-medium border-2 border-menuTextColor rounded-lg'>
                Sign up now
              </button>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Menu;
