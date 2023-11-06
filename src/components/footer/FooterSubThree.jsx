function FooterSubThree() {
  return (
    <>
      <div>
        <h1 className="text-secondary font-bold text-2xl md:my-0 my-5">
          Join Our Newsletter
        </h1>
        <p className="font-medium text-text-color my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla feugiat
        </p>
        <div class="flex items-stretch mt-12 relative">
          <input
            class="bg-gray-100 w-full rounded-lg text-base leading-none text-gray-800 p-5  border border-transparent focus:outline-none focus:border-gray-500"
            type="email"
            placeholder="Your Email"
          />
          <button className=" mx-4 rounded-xl absolute lg:-right-2 -right-2 top-1  hover:bg-secondary bg-secondary  text-base font-medium leading-none text-white p-2 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              width='40'
              height='40'
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
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default FooterSubThree;
