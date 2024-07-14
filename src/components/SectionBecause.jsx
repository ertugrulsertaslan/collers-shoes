import { React, useState } from 'react';

const cardlist = [
  {
    id: 1,
    icon: '/src/assets/icons/iconArtVenue.png',
    img: '/src/assets/profilpic/HellenaJohn.png',
    review: 'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
    name: 'Ralph Edwards',
    job: 'Product Designer',
    workplace: 'kontrastr',
  },
  {
    id: 2,
    icon: '/src/assets/icons/iconZoomer.png',
    img: '/src/assets/profilpic/hellen-jummy.png',
    review:
      'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
    name: 'Hellen Jummy',
    job: 'Team Lead',
    workplace: 'Zoomer',
  },
  {
    id: 3,
    icon: '/src/assets/icons/iconSHELLS.png',
    img: '/src/assets/profilpic/HellenaJohn.png',
    name: 'Hellena John',
    review:
      'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
    job: 'Co-founder',
    workplace: 'SHELLS',
  },
  {
    id: 4,
    icon: '/src/assets/icons/iconArtVenue.png',
    img: '/src/assets/profilpic/DavidOshodi.png',
    review:
      'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
    name: 'David Oshodi',
    job: 'Manager',
    workplace: 'ArtVenue',
  },
  {
    id: 5,
    icon: '/src/assets/icons/iconWAVES.png',
    img: '/src/assets/profilpic/CharoletteHanlin.png',
    review: 'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
    name: 'Charolette Hanlin',
    job: 'CEO',
    workplace: 'WAVES',
  },
];

function SectionBecause() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 5;
  const nextCards = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % cardlist.length);
  };

  const prevCards = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? cardlist.length - 1 : prevIndex - 1));
  };
  return (
    <>
      <div className='bg-menuBackGroundColor flex-col items-center justify-center flex'>
        <div className='container w-full p-5 xl:p-14 2xl:p-14 flex flex-wrap justify-center lg:justify-between xl:justify-between 2xl:justify-between'>
          <div className='mt-20'>
            <h2 className='w-full 2xl:w-full text-4xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-extrabold'>
              Because they love us
            </h2>
          </div>
          <div className='mt-5 w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6 lg:mt-20 xl:mt-20 2xl:mt-20'>
            <button onClick={prevCards} className='mr-3'>
              <img src='/src/assets/buttonpic/btn-left.png' alt='left button' />
            </button>
            <button onClick={nextCards}>
              <img src='/src/assets/buttonpic/btn-right.png' alt='right button' />
            </button>
          </div>
        </div>
        <div className='w-full h-auto bg-white flex flex-col items-center justify-center relative overflow-hidden top-0'>
          <div className='bg-SectionBecauseColor h-3/4 w-full lg:w-11/12 xl:w-11/12 2xl:w-11/12 top-0 absolute'></div>
          <div className='flex justify-center relative h-auto top-5 mb-20'>
            {Array.from({ length: cardsPerPage }).map((_, index) => {
              const dataIndex = (startIndex + index) % cardlist.length;
              return (
                <div
                  key={cardlist[dataIndex].id}
                  className='w-80 lg:w-96p xl:w-96p 2xl:w-96p h-full p-4 lg:p-10 xl:p-10 2xl:p-8 bg-white rounded-xl shadow-md m-1 2xl:m-5 text-left'
                >
                  <div className='w-full flex'>
                    <div className='mr-2'>
                      <img src={cardlist[dataIndex].icon} alt='icon' />
                    </div>
                    <div>
                      <h2 className='mb-5 text-2xl text-sectionBecauseTextColor font-bold'>{cardlist[dataIndex].workplace}</h2>
                    </div>
                  </div>

                  <p className='text-lg 2xl:text-2xl w-5/6 h-34 font-normal'>{cardlist[dataIndex].review}</p>

                  <div className='flex items-center mt-8'>
                    <div className='mr-5'>
                      <img src={cardlist[dataIndex].img} alt='profile' className='w-16 h-16 rounded-full' />
                    </div>
                    <div className='mt-4 mb-2'>
                      <h3 className='text-lg'>{cardlist[dataIndex].name}</h3>
                      <p className='text-sectionBecauseTextColor text-base'>{cardlist[dataIndex].job}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionBecause;
