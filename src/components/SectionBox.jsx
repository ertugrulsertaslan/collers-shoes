function SectionBox() {
  return (
    <>
      <div className="w-full flex flex-wrap lg:text-left 2xl:text-left text-center items-center justify-around  pt-0 p-20 md:p-20  lg:p-20 xl:p-20 2xl:p-20 bg-menuBackGroundColor">
        <div className="w-3/4 md:w-1/3 lg:w-1/4 2xl:w-1/4 m-0 md:mr-20 lg:mr-20 xl:mr-20 2xl:mr-20 justify-center items-center flex-col mt-32">
          <div className="relative flex justify-center lg:justify-normal xl:justify-normal 2xl:justify-normal">
            <img
              src="/src/assets/SectionBoxicons/Rectangle 25.png"
              alt=""
              className="absolute top-0 left-20 md:left-34 lg:left-7 xl:left-7 2xl:left-7"
            />
            <img src="/src/assets/SectionBoxicons/trophy.png" alt="" />
          </div>

          <h2 className="mb-5 mt-3 font-medium text-xl">Nibh viverra</h2>
          <p>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa
          </p>
        </div>
        <div className="w-3/4 md:w-1/3 lg:w-1/4 2xl:w-1/4 m-0 md:mr-20 lg:mr-20 xl:mr-20 2xl:mr-20 mt-32">
          <div className="relative flex justify-center lg:justify-normal xl:justify-normal 2xl:justify-normal">
            <img src="/src/assets/SectionBoxicons/tunnel.png" alt="" />
            <img
              src="/src/assets/SectionBoxicons/Rectangle 26.png"
              alt=""
              className="absolute top-0 left-20 md:left-34 lg:left-7 xl:left-7 2xl:left-7"
            />
          </div>

          <h2 className="mb-5 mt-3 font-medium text-xl">Cursus amet</h2>
          <p>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa
          </p>
        </div>
        <div className="w-3/4 md:w-1/3 lg:w-1/4 2xl:w-1/4 m-0 md:mr-20 lg:mr-20 xl:mr-20 2xl:mr-20 mt-32">
          <div className="relative flex justify-center lg:justify-normal xl:justify-normal 2xl:justify-normal">
            <img src="/src/assets/SectionBoxicons/tv.png" alt="" className="" />
            <img
              src="/src/assets/SectionBoxicons/Rectangle 27.png"
              alt=""
              className="absolute top-0 left-24 md:left-36 lg:left-7 xl:left-10 2xl:left-10"
            />
          </div>
          <h2 className="mb-5 mt-3 font-medium text-xl">Ipsum fermentum</h2>
          <p>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa
          </p>
        </div>
      </div>
    </>
  );
}

export default SectionBox;
