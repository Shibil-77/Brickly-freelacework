import React from "react";
import "./hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
import svg from "../../assets/wave-haikei (1).svg";
import heroImg from "../../assets/Construction-Illustration-removebg.png";

const Hero = () => {
  return (
    <div className="relative  ">
      <section className="hero-section bg-secondary md:pb-0 pb-5  flex flex-col px-10 md:px-16 pt-4  lg:flex-row">
        <div className="mt-10 lg:w-1/2">
          {/* <p className='text-text-color hidden md:block font-bold mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left'>
                   Digital Product
                </p> */}
          <h1 className="hero-head text-4xl mt-4 text-center font-extrabold text-primary md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
            Build Your Audience And Grow Your Brand Product
          </h1>
          <p className="hero-p text-primary mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="mt-4 lg:mt-4">
            {/* <button className="px-5 md:px-6 mx-auto lg:mx-0 gap-3 py-3 md:py-4 flex text-lg md:text-xl text-primary rounded-lg font-medium bg-gradient-to-b from-[#117264] via-[#388475] to-[#1f8586]">
              Download{" "}
              <span className="text-primary text-sm md:text-base self-center">
                <FaArrowRightLong />
              </span>
            </button> */}
            <button className="hero-btn  px-5 md:px-6 mx-auto lg:mx-0 gap-3 py-3 md:py-4 flex text-lg md:text-xl text-primary rounded-lg font-medium bg-gradient-to-b from-[#f88306] via-[#ee7439] to-[#ec6d3a] cursor-pointer">
                Download
                <span className="text-primary text-sm md:text-base self-center">
                    <FaArrowRightLong />
                </span>
            </button>

          </div>
          <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
            <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
              <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                Support
              </li>
              <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                Growth
              </li>
              <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                Management
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block lg:1/2">
          <img
            className="w-full h-[30rem]"
            src={heroImg}
            alt="users are reading articles"
          />
        </div>
      </section>
      <div className="h-32 hidden  md:block bg-secondary border-none">
        <img className="w-full bottom-0  absolute border-none " src={svg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
