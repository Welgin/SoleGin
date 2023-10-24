import React from 'react';
import deliveryimg from '../deliveryimg.png'


const Delivery = () => {
  
  return (
    <div className='w-full bg-white px-4 py-28'>
        <h3 className='text-black font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4' src={deliveryimg}/>
            <div className='flex flex-col justify-center'>
                <p className='text-orange-500 font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
                <p>
    Nunc varius nisl sed justo tristique cursus. Donec varius facilisis molestie. 
    Proin convallis nunc et lacus porttitor vulputate. Suspendisse vitae blandit est. Nullam ac mi eros. 
    Curabitur sollicitudin sem non nunc consequat mollis. Mauris sit amet libero quis dui pellentesque sodales a non odio. In eleifend, leo sit amet tincidunt pulvinar, dui lectus auctor nulla, et mattis turpis dolor nec lacus.
                </p>
                <button className='bg-black text-orange-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery
