import React, {useState} from 'react'
import {topPicks} from '../data/data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../components/customStyle.css';

const TopPicks = () => {
    
  return (
    <>
    <h1 className='text-black font-bold text-2xl text-center py-2 -mt-10 mb-10'>Top Picks</h1>
    <div className='hidden lg:flex max-w[1520px] m-auto py-2 px-2 '>
        <Splide options={{perPage:4, gap: "2rem", drag: 'free', arrows: false}}>
        {
            topPicks.map((item) => {
                return(
                    <SplideSlide key={item.id}>
                       <div key={item.id} className='border-none hover:scale-105 duration-300'>
                        <img
                        className='relative h-[200px] w-[1520px] object-cover rounded-2xl cursor-pointer hover: scale-105 ease-out duration-300'
                        src={item.img}
                        alt={item.title}
                       />
                       <p className='absolute right-0 bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                       <div className='flex justify-between py-4 px-2'>
                        <p className='font-bold '>{item.title}</p>
                        </div>
                        <div className='py-6 mb-8 -mt-7'>
                            <button className='bg-white flex items-center border-orange-500 text-orange-500 px-7 py-2'> Add to Cart </button>
                        </div>
                        </div>

                    
                    
                    </SplideSlide>
                )
            })
        }
        </Splide>
    </div>

    
    </>
  )
}

export default TopPicks
