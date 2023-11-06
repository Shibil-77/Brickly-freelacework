/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './members.css';
import { testimonials } from "..";

const Members = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = React.createRef();

  const handleNextClick = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Function to automatically scroll through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < testimonials.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 2000); // Adjust the interval as needed (2 seconds in this example)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, testimonials]);

  return (
    <>
      {/* <!-- Testimonials --> */}
        <div className="testimonials">
            <div className="carousel-testimonials">
                <section className="bg-white">
                    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Read trusted reviews from our customers
                        </h2>

                        <div className="mt-8 lg:ml-10 relative">
                            <button className="prev-btn" onClick={handlePrevClick}>
                                &lt;
                            </button>
                            <div className="carousel-container">
                                {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`testimonial-card ${
                                    currentIndex === index ? 'active' : ''
                                    }`}
                                >
                                    <div>
                                        <img class="w-10 h-10 rounded-full" src={testimonial.userImg} alt="Rounded avatar"/>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <button className="next-btn" onClick={handleNextClick}>
                                &gt;
                            </button>
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
