/* eslint-disable jsx-a11y/anchor-is-valid */
import react from 'react';

function FooterSub() {
  return(
    <>
        <div>
              <p className="font-medium text-text-color">
                SHOP
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-text-color">
                <a className="hover:opacity-75" href="#"> About </a>
                <a className="hover:opacity-75" href="#"> Meet the Team </a>
                <a className="hover:opacity-75" href="#"> History </a>
                <a className="hover:opacity-75" href="#"> Careers </a>
              </nav>
            </div>
    </>
  )
}

export default FooterSub