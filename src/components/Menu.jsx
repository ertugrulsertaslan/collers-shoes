import { useState } from "react";

function Menu() {
  return (
    <>
      <div className="flex justify-between bg-menuBackGroundColor px-20 py-6">
        <div>
          <h2 className="text-menuTextColor text-3xl font-bold">Collers</h2>
        </div>
        <div className="">
          <button className="mr-4 py-3 px-2 text-menuTextColor font-bold">
            Products
          </button>
          <button className="mr-4 py-3 px-2 text-menuTextColor font-bold">
            Solutions
          </button>
          <button className="mr-4 py-3 px-2 text-menuTextColor font-bold">
            Pricing
          </button>
          <button className="mr-4 py-3 px-2 text-menuTextColor font-bold">
            Resources
          </button>
          <button className="mr-4 py-3 px-2 text-menuTextColor font-bold">
            Log In
          </button>
          <button className="w-36 p-3 px-4 text-menuTextColor font-bold border-2 border-menuTextColor rounded-lg">
            Sign up now
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
