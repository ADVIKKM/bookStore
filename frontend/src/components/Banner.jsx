import React from "react";
import banner from "../../public/banner.jpg"
const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 ">
          <div className="space-y-10">
            <h1 className="text-4xl font-bold mt-10 md:mt-30">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Find your next favorite read from our handpicked collection of bestsellers, classics, and hidden gems. There's a book here for every kind of reader.
            </p>
            <div>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <button className="btn btn-secondary ml-6">Join</button></div>
          </div>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <div className="order-1 w-full md:w-1/2">
        <img src={banner} className="w-150 h-150" alt="Banner image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
