import React from "react";
import img from "../../assets/Mobile-work_26-removebg.png"
import playStoreIcon from "../../assets/play-store-icon.png"
import AppStoreIcon from "../../assets/App-Store-icon.png"
import "./download.css"

const Download = () => {
  return (
    <div className="md:flex w-full  bg-white  rounded-2xl mt-5  ">
      <div className="md:w-1/2 w-full my-auto flex pb-0  p-5 justify-center">
        <div className=" grid gap-4 ">
          <h1 className="md:text-4xl text-3xl  max"><strong>Download our mobile <br/> application.</strong></h1>
          <p className="text-[#333e48] leading-7 ">
            <strong>Download Appwind mobile banking app for IOS & <br className="md:block hidden"/> Android to
            manage your online money.</strong>
          </p>
          <div className="flex gap-2 ">
          <button className="bg-[#00b7aa]  hover:opacity-50 p-2 py-3 px-4 rounded-md text-[#f6f5f8] flex"><img className="w-8 h-7 text" src={playStoreIcon} alt="" /><strong >Play Store</strong></button>
          <button className="bg-[#333e48] hover:opacity-50  p-2 py-3 px-4 rounded-md text-[#f6f5f8] flex"><img className="w-7 h-6  text" src={AppStoreIcon} alt="" /><strong className="pl-1">App Store</strong></button>
          </div>
        </div>
      </div>
      <div className=" md:ml-auto"><img className="w-full rounded-br-2xl h-72 md:h-96" src={img} /></div>
    </div>
  );
};

export default Download;


