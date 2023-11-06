import React from 'react';
import { FiSearch } from 'react-icons/fi';
import heroImg from '../../assets/Construction-Illustration-removebg-preview.png'

const Hero = () => {
  return (
    <>
        <section className=" bg-secondary py-14 mx-10 rounded-3xl flex flex-col px-16  lg:flex-row">
            <div className="mt-10 lg:w-1/2">
                <h1 className="font-roboto text-3xl text-center font-bold text-primary md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
                    Read the most interesting articles
                </h1>
                <p className="text-primary t mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
                        <input
                        className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
                        type="text"
                        placeholder="Search article"
                        />
                    </div>
                    <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
                        Search
                    </button>
                </div>
                <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
        
                    <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
                        <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                        Design
                        </li>
                        <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                        User Experience
                        </li>
                        <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                        User Interfaces
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hidden lg:block lg:1/2">
                <img
                    className="w-full"
                    src={heroImg}
                    alt="users are reading articles"
                />
            </div>
        </section>
    </>
  )
}

export default Hero