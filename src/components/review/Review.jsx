import React, { useState } from "react";
import "./review.css";

const Review = () => {

  const testimonials = [
    {
      userImg: "https://randomuser.me/api/portraits/men/83.jpg",
      name: "Rodel Golez 1",
      position: "Businesswoman",
    },
    {
      userImg: "https://randomuser.me/api/portraits/men/83.jpg",
      name: "Rodel Golez 2",
      position: "Businesswoman",
    },
    {
      userImg: "https://randomuser.me/api/portraits/men/83.jpg",
      name: "Rodel Golez 3",
      position: "Businesswoman",
    },
    {
      userImg: "https://randomuser.me/api/portraits/men/83.jpg",
      name: "Rodel Golez 4",
      position: "Businesswoman",
    },
    {
      userImg: "https://randomuser.me/api/portraits/men/83.jpg",
      name: "Rodel Golez 5",
      position: "Businesswoman",
    },
    {
      userImg: "https://randomuser.me/api/portraits/men/83.jpg",
      name: "Rodel Golez 6",
      position: "Businesswoman",
    },
  ];
  return (
    <div className="testimonials">
      <div className="carousel-testimonials ">
        <section className="">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="text-[#00b7aa] text-3xl  flex items-center justify-center">
              <strong>What do users think about Brickly </strong>
            </div>
            <div className="slider example flex items-center justify-center">

              <div className="slide-track example mt-8 lg:ml-10 flex gap-20 overflow-x-auto  	">
                {testimonials.map(
                  (testimonial, index) =>
                      <div  key={index}>
                        <div className="flex  flex-col items-center w-[20rem] py-10">
                          <img
                            className="w-24 h-24 mb-3 rounded-full shadow-lg"
                            src={testimonial.userImg}
                            alt="Bonnie image"
                          />

                          <p className="newp w-full hover:text-secondary">   
                            I've been searching for a tool like Pavo for so
                            long. I love the reports it generates and the
                            amazing high accuracy
                          </p>
                          <p className="newp w-full testimonial-author hover:text-secondary">
                            <strong>{testimonial.name}</strong>
                          </p>
                        </div>
                        <h1>{index}</h1>
                      </div>
                    
                )}
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;
