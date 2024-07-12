function SectionCollectible() {
  return (
    <>
      <div className="w-full flex flex-wrap justify-center items-center bg-menuBackGroundColor">
        <div className="w-full md:w-4/5 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mr-0 xl:mr-12 2xl:mr-12 text-left mt-10 items-center">
          <h2 className="text-6xl 2xl:text-7xl text-center lg:text-left xl:text-left 2xl:text-left mb-8 font-extrabold">
            Collectible Sneakers
          </h2>
          <div className="w-full p-3 flex justify-center">
            <p className="w-full text-lg text-center lg:text-left xl:text-left 2xl:text-left">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
          </div>
          <div className="mt-8 flex justify-center lg:justify-start xl:justify-start 2xl:justify-start">
            <button className="w-40 mr-6 p-4 rounded-lg border-2 border-menuTextColor text-custom font-medium">
              Sign up now
            </button>
            <div className="flex p-4">
              <div className="p-2">
                <img
                  src="/src/assets/sectionCollectibleicons/Vector.png"
                  alt=""
                />
              </div>
              <div className="p-1.5">
                <button>Watch Demo</button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full xl:w-10/12 2xl:w-1/3 h-100">
          <div className="w-4/5 h-3/4 2xl:w-9/12 2xl:h-5/6 xl:w-1/4 xl:h-3/4 lg:w-1/4 lg:h-3/4 md:w-1/4 md:h-3/5 absolute left-12 top-20 2xl:top-20 2xl:left-16 xl:top-24 xl:left-1/3 lg:top-20 lg:left-1/3 md:left-1/3 md:top-20  bg-sectionCollectibleBoxColor rounded-6xl"></div>
          <img
            src="/src/assets/sectionCollectibleicons/Pexels-Photo-by-Ray-Piedra.png"
            className="absolute w-full 2xl:w-full xl:w-1/3 lg:w-1/3 md:w-1/3 top-10 2xl:left-4 2xl:top-8 xl:left-80 xl:top-16 lg:left-82 lg:top-10 md:left-68 md:top-12"
            alt="Collectible Sneakers"
          />
        </div>
      </div>
    </>
  );
}

export default SectionCollectible;
