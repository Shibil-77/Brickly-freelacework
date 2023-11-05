import React from "react";
import img from "../../assets/Mobile-work_26-removebg.png"
import playStoreIcon from "../../assets/play-store-icon.png"
import AppStoreIcon from "../../assets/App-Store-icon.png"

const Download = () => {
  return (
    <div className="md:flex w-full mt-5 bg-[#f6f5f8] rounded-2xl  ">
      <div className="md:w-1/2 w-full my-auto flex pb-0  p-8 justify-center">
        <div className=" grid gap-4 ">
          <h1 className="text-4xl   max"><strong>Download our mobile <br/> application.</strong></h1>
          <p className="text-[#333e48] leading-7 ">
            <strong>Download Appwind mobile banking app for IOS & <br className="md:block hidden"/>Android to
            manage your online money.</strong>
          </p>
          <div className="flex gap-2">
          <button className="bg-[#00b7aa] p-2 py-3 px-4 rounded-md text-[#f6f5f8] flex"><img className="w-8 h-7 text" src={playStoreIcon} alt="" /><strong >Play Store</strong></button>
          <button className="bg-[#333e48]  p-2 py-3 px-4 rounded-md text-[#f6f5f8] flex"><img className="w-7 h-6  text" src={AppStoreIcon} alt="" /><strong className="pl-1">App Store</strong></button>
          </div>
        </div>
      </div>
      <div className=" ml-auto"><img className="w-full rounded-br-2xl  h-96" src={img} /></div>
    </div>
  );
};

export default Download;


