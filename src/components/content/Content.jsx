import React from "react";
import contentImage1 from "../../assets/Content-image-1.jpeg";
import contentImage2 from "../../assets/Content-image-2.jpeg";
import contentImage3 from "../../assets/Content-image-3.jpeg";


import "./content.css";

const Content = () => {
  return (
    <div className="mt-5 font-roboto flex items-center justify-center">
      <div>
        <div className="md:flex gap-10 bg-white  rounded-t-lg px-5 py-5">
          <div>
            <img
              className="w-full h-96 rounded-lg object-cover"
              src={contentImage1}
              alt=""
            />
          </div>
          <div className=" w-full my-auto flex pb-0   p-5 justify-center">
            <div className=" grid gap-4 ">
              <h1 className="ptext md:text-4xl text-3xl  max">
                <strong>24/7 Customer Support </strong>
              </h1>
              <p className="text-text-color b leading-7 lg:text-[16px] text-[14px] font-normal">
                  Our team of experts is available around the clock to assist
                  you with any questions or <br className="md:block hidden" />
                  issues you may have. Whether you need technical support or
                  advice on <br className="md:block hidden" />
                  how to get the most out of our software, we're here to help.
                  Lorem ipsum dolor  <br className="md:block hidden" /> sit amet consectetur adipisicing elit. Incidunt voluptates accusantium iste, <br className="md:block hidden" /> quidem dolor quisquam, mollitia expedita
                  officiis recusandae explicabo itaque  <br className="md:block hidden" /> repudiandae nam vel suscipit ipsa reprehenderit neque placeat! Voluptatem?               
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex bg-primary   mt-10 px-5 py-5">
          <div className="md:hidden ">
            <img
              className=" w-full h-96 rounded-lg object-cover"
              src={contentImage2}
              alt=""
            />
          </div>
          <div className=" w-full my-auto flex pb-0  p-5 justify-center">
            <div className=" grid gap-4 ">
              <h1 className="ptext md:text-4xl text-3xl  max">
                <strong>Integration with Other Tools </strong>
              </h1>
              <p className="text-text-color leading-7 lg:text-[16px] text-[14px] font-normal">
                  Our team of experts is available around the clock to assist
                  you with any questions or <br className="md:block hidden" />
                  issues you may have. Whether you need technical support or
                  advice on <br className="md:block hidden" />
                  how to get the most out of our software, we're here to help.
                  Lorem ipsum dolor  <br className="md:block hidden" /> sit amet consectetur adipisicing elit. Incidunt voluptates accusantium iste, <br className="md:block hidden" /> quidem dolor quisquam, mollitia expedita
                  officiis recusandae explicabo itaque  <br className="md:block hidden" /> repudiandae nam vel suscipit ipsa reprehenderit neque placeat! Voluptatem?                
              </p>
            </div>
          </div>
          <div className="hidden md:block ">
            <img
              className=" w-full h-96 rounded-lg object-cover"
              src={contentImage2}
              alt=""
            />
          </div>
        </div>

        <div className="md:flex gap-10 bg-white rounded-t-lg px-5 py-5 mt-10 ">
          <div >
            <img
              className="w-full h-96 rounded-lg object-cover"
              src={contentImage3}
              alt=""
            />
          </div>
          <div className=" w-full my-auto flex pb-0  p-5 justify-center">
            <div className=" grid gap-4 ">
              <h1 className="ptext md:text-4xl text-3xl  max">
                <strong>
                  Data Security with
                  <br className="md:block hidden" />
                  On-Premise Hosting
                </strong>
              </h1>
              <p className="text-text-color lg:text-[16px] leading-7 text-[14px] font-normal">
                  Our team of experts is available around the clock to assist
                  you with any questions or <br className="md:block hidden" />
                  issues you may have. Whether you need technical support or
                  advice on <br className="md:block hidden" />
                  how to get the most out of our software, we're here to help.
                  Lorem ipsum dolor  <br className="md:block hidden" /> sit amet consectetur adipisicing elit. Incidunt voluptates accusantium iste, <br className="md:block hidden" /> quidem dolor quisquam, mollitia expedita
                  officiis recusandae explicabo itaque  <br className="md:block hidden" /> repudiandae nam vel suscipit ipsa reprehenderit neque placeat! Voluptatem?            
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
