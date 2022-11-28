import React from 'react'
import styles from '../style';
import {arrowUp, MyLOGO} from '../assets';
import GetStarted from './GetStarted'
const Hero = () => {
  return (
    <div className={`${styles.flexStart} bg-primary`}>
                <div className={`${styles.boxWidth}`}>
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4  bg-discount-gradient rounded-[10px] mb-2">
          <img src={arrowUp} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Hello!!</span>
            {" "}Every One{" "}
            <span className='text-white'>Welcome</span>
            {" "}To My Webpage
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className='flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[65px] leading-[50px]'>
            Myself{" "}<br />
            <span className='text-gradient ss:leading-[75px] font-serif leading-[60px] ss:text-[62px] text-[42px]'>Mrutunjay</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[65px] text-[22px] text-white ss:leading-[75px] leading-[40px] w-full'></h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={MyLOGO}  alt="handRobo" className='w-[80%] h-[100%] relative z-[5] rounded-[100%]' />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
    </div>
    </div>
  )
}

export default Hero
