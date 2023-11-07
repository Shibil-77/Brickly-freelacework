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
                <button className='px-6 h-12 rounded-xl bg-primary text-[1.3rem] font-semibold text-text-color mt-5'>
                    Download
                </button>
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