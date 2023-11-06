import React from "react";
import contentImage1 from "../../assets/Content-image-1.jpg";

import "./content.css";

const Content = () => {
  return (
    <div className="mt-5 flex items-center justify-center">
      <div>
        <div className="flex">
          <div>
            <img className="md:w-full w-24 h-20 md:h-96 rounded-lg" src={contentImage1} alt="" />
          </div>
          <div className=" w-full my-auto flex pb-0  p-5 justify-center">
            <div className=" grid gap-4 ">
              <h1 className="ptext md:text-4xl text-3xl  max">
                <strong>24/7 Customer Support </strong>
              </h1>
              <p className="text-[#333e48] leading-7 ">
                <strong>
                  Our team of experts is available around the clock to assist
                  you with any questions or <br className="md:block hidden" />
                  issues you may have. Whether you need technical support or
                  advice on <br className="md:block hidden" />
                  how to get the most out of our software, we're here to help.
                </strong>
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-10">
          <div className=" w-full my-auto flex pb-0  p-5 justify-center">
            <div className=" grid gap-4 ">
              <h1 className="ptext md:text-4xl text-3xl  max">
                <strong>Integration with Other Tools </strong>
              </h1>
              <p className="text-[#333e48] leading-7 ">
                <strong>
                  Our team of experts is available around the clock to assist
                  you with any questions or <br className="md:block hidden" />
                  issues you may have. Whether you need technical support or
                  advice on <br className="md:block hidden" />
                  how to get the most out of our software, we're here to help.
                </strong>
              </p>
            </div>
          </div>
          <div>
            <img className="md:w-full w-24 h-20 md:h-96  rounded-lg" src={contentImage1} alt="" />
          </div>
        </div>

        <div className="flex mt-10">
          <div>
            <img className="md:w-full w-24 h-20 md:h-96  rounded-lg" src={contentImage1} alt="" />
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
              <p className="text-[#333e48] leading-7 ">
                <strong>
                  Our team of experts is available around the clock to assist
                  you with any questions or <br className="md:block hidden" />
                  issues you may have. Whether you need technical support or
                  advice on <br className="md:block hidden" />
                  how to get the most out of our software, we're here to help.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
