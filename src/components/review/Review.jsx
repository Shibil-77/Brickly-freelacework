/* eslint-disable no-use-before-define */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "./review.css";
import imgOne from '../../assets/img-1.jpeg'
import imgTwo from '../../assets/img-2.jpeg'
import img3 from '../../assets/img-3.jpeg'
import img4 from '../../assets/img-4.jpeg'
import img5 from '../../assets/img-5.jpeg'
import img6 from '../../assets/img-6.jpeg'


const Review = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(1);
  const [countThree, setCountThree] = useState(2);
  const [arr, setArr] = useState([
    {
      userImg: imgOne,
      name: "Rodel Golez 1",
      position: "Businesswoman",
    },
    {
      userImg: imgTwo,
      name: "Rodel Golez 2",
      position: "Businesswoman",
    },
    {
      userImg: img3,
      name: "Rodel Golez 3",
      position: "Businesswoman",
    },
    {
      userImg: img4,
      name: "Rodel Golez 4",
      position: "Businesswoman",
    },
    {
      userImg: img5,
      name: "Rodel Golez 5",
      position: "Businesswoman",
    },
    {
      userImg: img6,
      name: "Rodel Golez 6",
      position: "Businesswoman",
    },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < arr.length-1) {
        
          return prevCount + 1;
        } else {
          return 0;
        }
      });
      setCountTwo((prevCount) => {
        if (prevCount < arr.length-1) {
        
          return prevCount + 1;
        } else {
          return 0;
        }
      });
      setCountThree((prevCount) => {
        if (prevCount < arr.length-1) {
        
          return prevCount + 1;
        } else {
          return 0;
        }
      });
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <div className="testimonials container bg rounded-3xl my-5">
      <div className="carousel-testimonials ">
        <section className="">
          <div className="mx-auto max-w-screen-xl md:px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-text-color text-1xl  flex items-center justify-center">
              <strong>Team Member</strong>
            </div>
            <div className="text-white text-3xl mt-2 flex items-center justify-center">
              <strong>Our Proficient Team </strong>
            </div>
            <div className="slider example flex items-center justify-center">
              <div className="slide-track  flex justify-center items-center example mt-8 lg:ml-10 lg:flex  gap-20  overflow-auto">

                <div className="slide  transform ease-in-out transition-all duration-300">
                  <div className="flex  flex-col items-center w-[20rem] py-10">
                    <img
                      className="w-24 h-24 mb-3 rounded-full shadow-lg bg-cover"
                      src={arr[count].userImg}
                      alt="Bonnie image"
                    />

                    <p className="newp w-full hover:text-primary text-center text-primary">
                     {arr[count].position}
                    </p>
                    <p className="newp w-full testimonial-author hover:text-secondary text-center">
                      <strong>{arr[count].name}</strong>
                    </p>
                  </div>
                </div>


                <div className="slide transform ease-in-out transition-all duration-300">
                  <div className="flex  flex-col items-center w-[20rem] py-10">
                    <img
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src={arr[countTwo].userImg}
                      alt="Bonnie image"
                    />

                    <p className="newp w-full text-white text-center">
                    {arr[countTwo].position}
                    </p>
                    <p className="newp w-full testimonial-author  text-center">
                      <strong>{arr[countTwo].name}</strong>
                    </p>
                  </div>
                </div>



                <div className="slide transform ease-in-out transition-all duration-300">
                  <div className="flex  flex-col items-center w-[20rem] py-10">
                    <img
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src={arr[countThree].userImg}
                      alt="Bonnie image"
                    />

                    <p className="newp w-full  text-center text-white">
                    {arr[countThree].position}
                    </p>
                    <p className="newp w-full testimonial-author text-text-color text-center">
                      <strong>{arr[countThree].name}</strong>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;
