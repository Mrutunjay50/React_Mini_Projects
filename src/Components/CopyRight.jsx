import React from 'react'
import {instagram, linkedin, twitter} from "../assets";

const CopyRight = () => {
  return (
    <div className='absolute bottom-[-0.5] w-[100%] text-white bg-slate-900 flex sm:flex-row flex-col p-3 items-center'>
        <div className='flex'>
        <a className=' ml-4 mr-5' href="https://www.instagram.com/mrutunjay50/"><span ><img src={instagram} alt="instagram"/></span></a>
        <a className='mr-5' href="https://www.linkedin.com/in/mrutunjay-panda-a5619b17a/"><span><img src={linkedin} alt="linkedIn" /></span></a>
        <a className='mr-5' href="https://twitter.com/Mrutunj17530003"><span><img src={twitter} alt="twitter" /></span></a>
        </div>
        <span className="sm:ml-[80%] ml-0">Mrutunjay<sup>©</sup> 2022</span>
    </div>
  )
}

export default CopyRight;
