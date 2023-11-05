import react from 'react';
import Button from '../common/Button';

function FooterSubThree() {
  return(
    <>
      <div>
              <p className="font-medium text-text-color">
                Helpful Links
              </p>
              <div className="mb-6 flex-row md:mb-0 md:flex">
            <div className="mt-8 relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96" data-te-input-wrapper-init>
              <input type="text"
                className="peer block h-[47px] w-full rounded border-0 bg-secondary py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2" placeholder="Enter your email" />
              <label 
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Enter
                your email
              </label>
            </div>
            <div className='mt-8'>
            <Button text='Subscribe' link='/' />
            </div>
      
          </div>
            </div>
    </>
  )
}

export default FooterSubThree
