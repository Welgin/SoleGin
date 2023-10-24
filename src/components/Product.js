import React,{useState} from 'react'
import {ArrowSmRightIcon} from '@heroicons/react/outline'
import {productData} from '../data/data'

const Product = () => {
  const [kicks, setKicks] = useState(productData)
  const [active, setActive] = useState('All');
  const filterCat = (category)=>{
    setKicks(
      productData.filter((item) => {
        return item.category === category
      })
    )
  }
  console.log(active)
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-black font-bold text-2xl text-center py-2'>
            Our Product
        </h1>
        <div className='flex flex-col lg:flex-row justify-center py-2'>
          <div className='flex justify-center md:justify-center'>
              <button
              onClick={()=>{setActive('All');setKicks(productData)}}
              className={`${active === 'All' ? 'bg-orange-700 border-orange-700' : 'bg-black'} m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700`}>All</button>
              <button 
               onClick={()=>{setActive('Running');filterCat("Running")}}
              className={`${active === 'Running' ? 'bg-orange-700 border-orange-700' : 'bg-black'} m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700`}>Running</button>
              <button 
              onClick={()=>{setActive('Skate');filterCat("Skate")}}
              className={`${active === 'Skate' ? 'bg-orange-700 border-orange-700' : 'bg-black'} m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700`}>Skate</button>
              <button 
              onClick={()=>{setActive('Basketball');filterCat("Basketball")}}
              className={`${active === 'Basketball' ? 'bg-orange-700 border-orange-700' : 'bg-black'} m-1 border-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700`}>Basketball</button>
              
          </div>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 mt-8'>
            {
               kicks.map((item)=> (
                <div className='border-none hover:scale-105 duration-300' key={item.id}>
                    <img src={item.image}
                    alt={item.name}
                    className='w-full h-[500px] object-cover rounded-lg'
                    />
                    <div className='flex justify-between py-2 px-2'>
                      <p className='font-bold'>{item.name}</p>
                      <p className='bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                    </div>
                    <div className='pl-2 py-4 -mt-7'>
                        <p className='flex items-center text-black'>View More <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>

               ))
            }
        </div>     
    </div>
  )

}

export default Product
