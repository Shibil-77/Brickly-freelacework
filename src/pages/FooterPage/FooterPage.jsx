/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FooterSub from "../../components/footer/FooterSubTwo";
import FooterSubOne from "../../components/footer/FooterSubOne";
import FooterSubThree from "../../components/footer/FooterSubThree";

function FooterPage() {
  return (
    <footer className="bg-primary from-gray-100 via-[#bce1ff] to-gray-100 w-screen ">
         <div className="lg:hidden block pt-11">
            <FooterSubOne />
          </div>
      <div className=" px-4 py-16 mx-auto sm:px-6 lg:px-8  ">
        <div className="grid grid-cols-3">
            
          <div className="lg:block hidden">
            <FooterSubOne />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1  lg:grid-cols-3  justify-center">
              <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
                <FooterSub />
                <FooterSub />
                <FooterSub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
