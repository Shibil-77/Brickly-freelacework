import React from "react";
import "../../App.css";

const Works = () => {
  return (
    <div >
      <div className=" mx-auto mt-16 mb-10">
        <h1 className="text-white lg:text-[40px] text-[30px] pt-10 text-center font-semibold">
          <span className="text-text-color text-5xl font-bold">How it Works?</span>
        </h1>
        <p className="text-[#9ea1ad] lg:text-[18px] text-[15px] mt-5 mb-5 text-center font-medium leading-7">
          There are many variations of passages of Lorem <br /> Ipsum available
          but the majority have suffered alteration in some form.
        </p>
        <div className=" mx-auto flex justify-center md:my-0">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
            <div className="w-full max-w-md  px-10 pt-2 pb-2 ">
              <div className="flex flex-col items-center pt-10 ">
                <div
                  id="svg-container"
                  className="w-24 h-24 bg-[#f9f7ff] flex justify-center items-center rounded-3xl hover:bg-secondary my-5"
                >
                  {/* <img className="w-10 h-10  " src={icon} alt="🙏 img" /> */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#00b7aa"
                    width='50'
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333"
                        stroke="#00b7aa"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>

                <h5 className="text-xl font-medium text-center">
                  <span className="text-text-color font-semibold text-[28px]">Download</span>
                </h5>
                <br />
                <span className="text-[#9ea1ad] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non ipsum.
                </span>
              </div>
            </div>

            <div className="w-full max-w-md  px-10 pt-2 pb-2 ">
              <div className="flex flex-col items-center pt-10">
                <div
                  id="svg-container-1"
                  className="w-24 h-24 bg-[#f9f7ff]  flex justify-center items-center rounded-3xl hover:bg-secondary my-5"
                >
                  {/* <img className="w-10 h-10  " src={icon} alt="🙏 img" /> */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width='50'
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        opacity="0.25"
                        d="M15.4363 14.7782C14.841 14.5276 14.1 14.2154 14.1 13.975V12.4059C14.9676 11.7528 15.5 10.6951 15.5 9.6V7.5C15.5 5.5701 13.9299 4 12 4C10.0701 4 8.5 5.5701 8.5 7.5V9.6C8.5 10.6948 9.03235 11.7528 9.9 12.4059V13.975C9.9 14.2007 9.16605 14.5147 8.57665 14.7667C7.15215 15.3757 5 16.2958 5 18.7V19.05H19V18.7C19 16.2801 16.8556 15.3764 15.4363 14.7782Z"
                        fill="#00b7aa"
                      ></path>{" "}
                      <path
                        d="M8.5 9.5V7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5V9.5C15.5 10.6894 14.9067 11.7402 14 12.3727V13.323C14 13.7319 14.249 14.0996 14.6286 14.2514L16.2146 14.8858C17.8969 15.5587 19 17.1881 19 19H5C5 17.1881 6.10313 15.5587 7.78543 14.8858L9.37139 14.2514C9.75105 14.0996 10 13.7319 10 13.323V12.3727C9.09326 11.7402 8.5 10.6894 8.5 9.5Z"
                        fill="#00b7aa"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <h5 className="text-xl font-medium text-[28px] text-center">
                  <span className="text-center text-text-color font-semibold text-[28px]">
                    Open an Account
                  </span>
                </h5>
                <br />
                <span className="text-[#9ea1ad] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non ipsum.
                </span>
              </div>
            </div>

            <div className="w-full max-w-md  px-10 pt-2 pb-2 ">
              <div className="flex flex-col items-center pb-5 pt-10">
                <div
                  id="svg-container-1"
                  className="w-24 h-24 bg-[#f9f7ff]  flex justify-center items-center rounded-3xl hover:bg-secondary my-5"
                >
                  {/* <img className="w-10 h-10  " src={icon} alt="🙏 img" /> */}
                  <svg
                    fill="#00b7aa"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#00b7aa"
                    width='50'
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                     
                      <path d="M188.51855,70.68652a21.99854,21.99854,0,0,0-39.66113,3.30518L131.3418,43.65332a21.99426,21.99426,0,0,0-39.68018,3.36523A21.97221,21.97221,0,0,0,52.5957,66.68018a21.97842,21.97842,0,0,0-18.248,32.97314l5.51562,9.55371a21.99842,21.99842,0,0,0-22.69336,32.69531l37,64.08594a75.94585,75.94585,0,0,0,137.23828-12.157,76.35611,76.35611,0,0,0,14.11035-93.69946Zm-83.22949-28.1582a14.02127,14.02127,0,0,1,19.125,5.125l24.20508,41.92432A21.97738,21.97738,0,0,0,129.145,103.84839L111.62891,73.50977a21.85719,21.85719,0,0,0-9.77-8.9209L100.168,61.65942l-.00293-.0061A14.01684,14.01684,0,0,1,105.28906,42.52832ZM59.58984,55.17285a14.00026,14.00026,0,0,1,25.64746-3.376L91.45117,62.5603A21.88524,21.88524,0,0,0,71.95459,76.88379a21.84519,21.84519,0,0,0-9.27246-8.15186L60.9873,65.79688A13.908,13.908,0,0,1,59.58984,55.17285Zm94.39844,171.70508a68.08124,68.08124,0,0,1-92.89062-24.88965l-37-64.08594a14.00056,14.00056,0,1,1,24.25-14l.00048.00049,23.99952,41.56885a3.9998,3.9998,0,1,0,6.92773-4l-38-65.81836a14.00013,14.00013,0,1,1,24.249-14l38,65.81836a3.9998,3.9998,0,0,0,6.92774-4l-30-51.96167v-.00024a14.00013,14.00013,0,1,1,24.249-14l42,72.74609a3.9998,3.9998,0,0,0,6.92774-4l-16-27.7124V118.543a13.99966,13.99966,0,0,1,15.748-20.52246q.67676.18127,1.3252.425l.021.009a13.89413,13.89413,0,0,1,7.15479,6.08838l17,29.44531A68.07776,68.07776,0,0,1,153.98828,226.87793Zm41.41406-49.75269a75.59883,75.59883,0,0,0-9.59668-47.137l-17-29.44531a21.82679,21.82679,0,0,0-9.77587-8.93286l-1.688-2.9231v-.00049a14.00013,14.00013,0,0,1,24.249-14l17,29.44532A68.425,68.425,0,0,1,195.40234,177.12524ZM168.8418,25.69043l4.1416-15.4541A3.99956,3.99956,0,1,1,180.71,12.30664l-4.1416,15.4541a3.99956,3.99956,0,1,1-7.72656-2.07031Zm25.76758,10.4834,9.17773-13.10645a3.99959,3.99959,0,1,1,6.55273,4.58789l-9.17773,13.10645a3.99959,3.99959,0,0,1-6.55273-4.58789Zm38.32324,16.03906-13.10645,9.17773a3.99959,3.99959,0,0,1-4.58789-6.55273l13.10645-9.17773a3.99959,3.99959,0,1,1,4.58789,6.55273Z"></path>{" "}
                    </g>
                  </svg>
                </div>
                <h5 className="text-xl font-medium text-center">
                  <span className="text-center text-text-color font-semibold text-[28px]">
                    Enjoy our App
                  </span>
                </h5>
                <br />
                <span className="text-[#9ea1ad] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non ipsum.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
