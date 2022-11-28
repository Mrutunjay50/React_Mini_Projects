import React from 'react'

const Button = ({style}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${style}`}>Click On The Sections To Check The Projects</button>
  )
}

export default Button
