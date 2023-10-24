import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1920px] w-full m-auto px-4 py-2 bg-[#23262b]'>
      <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl text-white'>Sole
            <span className='w-full text-3xl font-bold text-orange-700'>Gin</span>
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. 
            </p>
            <div className='flex justify-between md:w-[75%] my-6 '>
                <FaFacebookSquare size={30} className='text-[#9ca3af] hover:text-white hover:scale-105 duration-200'/>
                <FaInstagram size={30} className='text-[#9ca3af] hover:text-white hover:scale-105 duration-200'/>
                <FaTwitterSquare size={30} className='text-[#9ca3af] hover:text-white hover:scale-105 duration-200'/>
                <FaGithubSquare size={30} className='text-[#9ca3af] hover:text-white hover:scale-105 duration-200'/>
                <FaDribbbleSquare size={30} className='text-[#9ca3af] hover:text-white hover:scale-105 duration-200'/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div className='lg:ml-auto'>
                <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                <ul>
                    <li className='py-2 text-sm'>New York</li>
                    <li className='py-2 text-sm'>USA</li>
                    <li className='py-2 text-sm'>Philippines</li>
                    <li className='py-2 text-sm'>Canada</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
