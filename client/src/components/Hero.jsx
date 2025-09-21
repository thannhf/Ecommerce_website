import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[811px] w-full'>
      <div className='flex flex-col h-full justify-center max-w-[777px] pt-8'>
        <h3 className='h3 text-secondary font-paci font-thin'>
          Fresh Fits for Frosty Days
        </h3>
        <h2 className='uppercase h2 !mb-0 tracking-[0.22rem]'>Get More for Less - 40% Off!</h2>
        <h1 className='h1 max-w-[699px] font-[800] leading-none'>on Coats & Jackets</h1>
        <div className='flex items-center'>
          <h3 className='h3'>Starting at</h3>
          <span className='bg-white px-1 inline-block rotate-[-2deg] ml-2.5 !bold-40'>
            <span className='text-2xl relative bottom-3'>$</span>99.
            <span className='text-2xl'>99</span>
          </span>
        </div>
        <Link to={'/collection'} className='inline-flex bg-tertiary text-white flexCenter p-5 w-52 mt-8 bold-20'>
          Shop Now
        </Link>
      </div>
    </section>
  )
}

export default Hero