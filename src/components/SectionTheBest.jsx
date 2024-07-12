function SectionTheBest() {
  return (
    <>
      <div className="w-full text-white p-3 lg:p-20 xl:p-20 2xl:p-20 relative bg-SectionTheBestBgColor">
        <div className="w-full flex flex-wrap justify-center p-5">
          <h2 className="w-full lg:w-5/6 xl:w-5/6 2xl:w-5/6 font-extrabold text-center lg:text-left xl:text-left 2xl:text-left text-4xl lg:text-6xl xl:text-6xl 2xl:text-6xl mb-10 lg:mb-0 xl:mb-0 2xl:mb-0">
            The best of the best
          </h2>
          <button className="border-2 font-bold text-custom-lg leading-custom-lg px-6 py-5 rounded-lg w-3/4 lg:w-2/12 xl:w-2/12 2xl:w-2/12">
            Sign up now
          </button>
        </div>
        <div className="w-full mt-20">
          <div className="absolute hidden 2xl:block w-full">
            <img
              src="/src/assets/sectionTheBesticons/RectangleSquarePink.png"
              alt=""
              className="absolute top-40"
            />
            <img
              src="/src/assets/sectionTheBesticons/RectangleSquareBlue.png"
              alt=""
              className="absolute left-102 -top-8"
            />
            <img
              src="/src/assets/sectionTheBesticons/RectangleSquareOrange.png"
              alt=""
              className="absolute left-120 top-72"
            />
            <img
              src="/src/assets/sectionTheBesticons/RectangleSquarePurple.png"
              alt=""
              className="absolute left-130 top-66"
            />
            <img
              src="/src/assets/sectionTheBesticons/RectangleSquareGreen.png"
              alt=""
              className="absolute left-140 top-8"
            />
          </div>
          <div className="relative block md:hidden w-full">
            <img
              src="/src/assets/sectionTheBesticons/RectanglePinkMobile.svg"
              alt=""
              className="absolute left-7 top-68"
            />
            <img
              src="/src/assets/sectionTheBesticons/RectangleBlueMobile.svg"
              alt=""
              className="absolute -right-3 top-112"
            />
            <img
              src="/src/assets/sectionTheBesticons/RectanglePurpleMobile.svg"
              alt=""
              className="absolute -left-3 top-132"
            />
          </div>
          <div className="flex flex-wrap justify-evenly text-left relative">
            <div className="w-full md:w-2/4 lg:max-w-sm xl:max-w-sm  2xl:max-w-sm  shadow-light-xxl-combined rounded-2xl mx-2 mb-8 bg-SectionTheBestBgColor">
              <img
                className="w-full rounded-2xl"
                src="/src/assets/sectionTheBesticons/box-shoes-1.png"
              />
              <div className="px-8 py-7 bg-SectionTheBestBgColor">
                <div className="font-bold mb-2 text-2xl">Title</div>
                <p className="text-lg">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
              </div>
              <div className="px-6 py-4 w-full mb-2">
                <div className="flex w-full justify-center border-2 py-3 rounded-lg">
                  <img
                    className="mr-4"
                    src="/src/assets/sectionTheBesticons/shopicon.svg"
                    alt=""
                  />
                  <h2 className="text-xl ">Buy Now</h2>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/4 lg:max-w-sm xl:max-w-sm  2xl:max-w-sm shadow-light-xxl-combined rounded-2xl mx-2 mb-8 bg-SectionTheBestBgColor">
              <img
                className="w-full rounded-2xl"
                src="/src/assets/sectionTheBesticons/box-shoes-2.png"
              />
              <div className="px-8 py-7">
                <div className="font-bold mb-2 text-2xl">Title</div>
                <p className="text-lg">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
              </div>
              <div className="px-6 py-4 w-full mb-2">
                <div className="flex w-full justify-center border-2 py-3 rounded-lg">
                  <img
                    className="mr-4"
                    src="/src/assets/sectionTheBesticons/shopicon.svg"
                    alt=""
                  />
                  <h2 className="text-xl">Buy Now</h2>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/4 lg:max-w-sm xl:max-w-sm  2xl:max-w-sm shadow-light-xxl-combined rounded-2xl mx-2 mb-8 bg-SectionTheBestBgColor">
              <img
                className="w-full rounded-2xl"
                src="/src/assets/sectionTheBesticons/box-shoes-3.png"
              />
              <div className="px-8 py-7">
                <div className="font-bold mb-2 text-2xl">Title</div>
                <p className="text-lg">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
              </div>
              <div className="px-6 py-4 w-full justify-center mb-2">
                <div className="flex w-full justify-center border-2 py-3 rounded-lg">
                  <img
                    className="mr-4"
                    src="/src/assets/sectionTheBesticons/shopicon.svg"
                    alt=""
                  />
                  <h2 className="text-xl">Buy Now</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTheBest;
