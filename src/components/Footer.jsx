function Footer() {
  return (
    <>
      <div className="sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-SectionTheBestBgColor">
        <div className="sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full flex-col text-white">
          <div className="w-full flex flex-wrap p-20 text-center 2xl:text-left xl:text-left">
            <div className="w-full lg:w-1/4 xl:w-1/4 mb-10 lg:mb-0 xl:mb-0 2xl:mb-0">
              <p className="py-3">Product</p>
              <p className="py-3">Pricing</p>
              <p className="py-3">Overview</p>
              <p className="py-3">Browse</p>
              <p className="py-3">Accessibility</p>
              <p className="py-3">Five</p>
            </div>
            <div className="w-full lg:w-1/4 xl:w-1/4 mb-10 lg:mb-0 xl:mb-0 2xl:mb-0">
              <p className="py-3">Solutions</p>
              <p className="py-3">Brainstorming</p>
              <p className="py-3">Ideation</p>
              <p className="py-3">Wireframing</p>
              <p className="py-3">Research</p>
              <p className="py-3">Design</p>
            </div>
            <div className="w-full lg:w-1/4 xl:w-1/4 mb-10 lg:mb-0 xl:mb-0 2xl:mb-0">
              <p className="py-3">Support</p>
              <p className="py-3">Contact Us</p>
              <p className="py-3">Developers</p>
              <p className="py-3">Documentation</p>
              <p className="py-3">Integrations</p>
              <p className="py-3">Reports</p>
            </div>
            <div className="w-full lg:w-1/4 xl:w-1/4 mb-10 lg:mb-0 xl:mb-0 2xl:mb-0">
              <p className="py-3">Get the App</p>
              <p className="py-2 flex justify-center lg:justify-start xl:justify-start 2xl:justify-start">
                <img src="/src/assets/followusicons/AppStore.svg" alt="" />
              </p>
              <p className="py-2 flex justify-center lg:justify-start xl:justify-start 2xl:justify-start">
                <img src="/src/assets/followusicons/GooglePlay.svg" alt="" />
              </p>
              <p className="py-3 mt-10 mb-3">Follow Us</p>
              <div className="flex space-x-6 justify-center xl:justify-start 2xl:justify-start">
                <img src="/src/assets/followusicons/Youtube.svg" alt="" />
                <img src="/src/assets/followusicons/Facebook.svg" alt="" />
                <img src="/src/assets/followusicons/x.svg" alt="" />
                <img src="/src/assets/followusicons/instagram.svg" alt="" />
                <img src="/src/assets/followusicons/linkedin.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full lg:w-11/12 xl:w-11/12 flex flex-wrap text-left border-t-2 border-gray-800">
              <div className="w-full lg:w-1/4 xl:w-1/4 py-3 text-center md:text-left lg:text-left xl:text-left 2xl:text-left mt-5">
                Collers @2023. All rights reserved.
              </div>
              <div className="flex space-x-8 py-3 w-full lg:w-9/12 xl:w-9/12 mb-10 justify-center xl:justify-end 2xl:justify-end mt-5">
                <div>Terms</div>
                <div>Privacy</div>
                <div>Contact</div>
                <div className="flex">
                  <img
                    className="mr-4 ml-1"
                    src="/src/assets/followusicons/webicon.svg"
                    alt=""
                  />
                  EN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
