/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from "..";

const Members = () => {

  return (
    <>
      {/* <!-- Testimonials --> */}
      <div className="testimonials">
        <div className="carousel-testimonials ">
          <section class="bg-white">
            <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Read trusted reviews from our customers
              </h2>
            
              <div class="mt-8 lg:ml-10 flex gap-20 overflow-x-auto">
                {
                    testimonials.map((testimonial)=>{
                        return (
                            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                
                                <div className="flex flex-col items-center w-[20rem] py-10">
                                    <img
                                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                        src={testimonial.userImg}
                                        alt="Bonnie image"
                                    />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark-text-white">Bonnie Green</h5>
                                    <span className="text-sm text-gray-500 dark-text-gray-400">Visual Designer</span>
                                    
                                </div>
                          </div>
                        )
                    })
                }
               
              </div>
            </div>
            
          </section>
        </div>
      </div>
      {/* <!-- end of testimonials --> */}
    </>
  );
};

export default Members;
