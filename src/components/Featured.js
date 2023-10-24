import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Featured = () => {
    const sliders = [
    {
        url: 'https://images.unsplash.com/photo-1506544777-64cfbe1142df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1596936273467-b3af0c82af7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
        url: 'https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

        const prevSlider =()=>{
            const isFirstSlide = currentIndex === 0
            const newIndex= isFirstSlide ? sliders.length - 1: currentIndex -1
            setCurrentIndex(newIndex)
        }
        
        const nextSlider = () =>{
            const isLastSlide = currentIndex === sliders.length -1
            const newIndex = isLastSlide ? 0 : currentIndex +1
            setCurrentIndex(newIndex)
        }

        const moveToNextSlide = (slideIndex) => {
            setCurrentIndex(slideIndex)
        }
  return (
    <div className='max-w-[1920px] h-[520px] w-full py-4 mb-10 px-4 relative group'>
        <div className='w-full h-[600px] rounded-2xl bg-center bg-cover duration-500'
            style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
        ></div>
        <div className='hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlider}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlider}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((sliderItems, slideIndex)=>(
                    <div 
                    key={slideIndex}
                    onClick={()=>moveToNextSlide(slideIndex)}
                    className='text-2xl cursor-pointer'>
                        <RxDotFilled/>
                    </div>                   
                ))
            }

        </div>
    </div>
  )
}

export default Featured
