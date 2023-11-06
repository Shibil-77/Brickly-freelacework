import React from "react";
import "./members.css";
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

              <div class="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
                {
                    testimonials.map((testimonial)=>{
                        return (
                            <div class="mb-8 sm:break-inside-avoid">
                                <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                                    <div class="flex items-center gap-4">
                                        <img
                                            alt="Man"
                                            src={testimonial.userImg}
                                            class="h-14 w-14 rounded-full object-cover"
                                        />

                                        <div>
                                            <p class="mt-0.5 text-lg font-medium text-gray-900">{testimonial.name}</p>
                                            <div class="flex justify-center gap-0.5 text-secondary">
                                             {testimonial.position}
                                            </div>
                                        </div>
                                    </div>

                                    <p class="mt-4 text-gray-700">{testimonial.text}</p>
                                </blockquote>
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
