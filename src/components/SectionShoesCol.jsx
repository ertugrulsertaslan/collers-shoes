function SectionShoesCol() {
  return (
    <>
      <div className="w-full flex items-center h-screen justify-center bg-menuTextColor">
        <div className="w-full h-screen relative flex items-center p-10 overflow-hidden">
          <img
            src="/src/assets/sectionshoescolicons/sectionShoesSvg.png"
            className="w-full absolute scale-300 md:scale-100 lg:scale-100 xl:scale-100 2xl:scale-100 left-94 top-80 lg:w-3/4 xl:w-3/4 2xl:w-3/4 md:left-0 md:top-52 lg:left-52 lg:top-52 xl:left-52 xl:top-52 2xl:left-48 2xl:top-40"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-5xl font-extrabold md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-8xl">
              11,658,467
            </h2>
            <h2 className="text-3xl lg:text-customTitle xl:text-customTitle 2xl:text-customTitle font-bold mt-3">
              Shoes Collected
            </h2>
          </div>
          <div className="absolute top-12 left-10 md:left-0 md:top-30 lg:left-52 xl:top-34 xl:left-52 2xl:top-34 2xl:left-52 items-center flex flex-col justify-center">
            <img src="/src/assets/sectionshoescolicons/shoesphoto.svg" alt="" />
            <div className="absolute bg-sectionShoesColColor w-2/3 text-xs text-left p-2 top-54 rounded-lg">
              <p>Emma Simpson collected one pair of Cool Shoes.</p>
            </div>
            <img
              className="mt-1.5"
              src="/src/assets/sectionshoescolicons/ArrowBottom.svg"
              alt=""
            />
            <img
              src="/src/assets/sectionshoescolicons/EllipseShoes.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionShoesCol;
