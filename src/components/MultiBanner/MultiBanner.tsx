import React from 'react'
import menImage from '../../assets/images/men.png';
import secondBanner from '../../assets/images/2nd-banner.png';
import thirdBanner from '../../assets/images/3rd-banner.png';
import fourthBanner from '../../assets/images/4th-banner.png';
import fifthBanner from '../../assets/images/5th-banner.png';
import sixthBanner from '../../assets/images/6th-banner.png';


const MultiBanner = () => {
  return (
    <div className='bg-gray-100'>
      <div className='grid grid-cols-1 px-4 md:px-0 sm:grid-cols-3 xl:grid-cols-4 gap-4 py-6 max-w-7xl mx-auto '>
        {/* first banner */}
        <div className='relative h-[250px]'>
            <img src={menImage} alt="New arrivals" className='w-full h-full object-cover rounded-lg shadow-lg'/>
            <div className='absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center
            justify-center'>
                <h2 className='text-white text-2xl font-bold'>New Arrivals</h2>
                <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
            </div>
        </div>
        {/* second banner */}
        <div className='relative h-[250px]'>
            <img src={secondBanner} alt="New arrivals" className='w-full h-full object-cover rounded-lg shadow-lg'/>
            <div className='absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center
            justify-center'>
                <h2 className='text-white text-2xl font-bold'>Limit Offer</h2>
                
            </div>
        </div>
        {/* third banner */}
        <div className="relative h-[250px] col-span-1 sm:col-span-2">
            <img src={thirdBanner} alt="season sale" className='w-full h-full object-cover rounded-lg shadow-lg'/>
            <div className="absolute inset-0 bg-yellow-800 bg-opacity-50 flex flex-col items-center rounded-lg
            justify-center">
                <h2 className='text-white text-4xl font-bold'>Season Sale</h2>
                <p className='text-white my-2 text-lg'>Up to 70% Off</p>
                <button className='text-white bg-yellow-600 px-3 py-2 hover:bg-yellow-500 rounded-md'>Shop now</button>
            </div>
        </div>
        {/* fourth banner */}
        <div className="relative h-[250px] col-span-1 sm:col-span-2">
            <img src={fourthBanner} alt="season sale" className='w-full h-full object-cover rounded-lg shadow-lg'/>
            <div className="absolute inset-0 bg-orange-800 bg-opacity-50 flex flex-col items-center rounded-lg
            justify-center">
                <h2 className='text-white text-4xl font-bold'>Season Sale</h2>
                <p className='text-white my-2 text-lg'>Up to 70% Off</p>
                <button className='text-white bg-red-500 px-3 py-2 hover:bg-red-600 rounded-md'>Shop now</button>
            </div>
        </div>
        {/* fifth banner */}
        <div className='relative h-[250px]'>
            <img src={fifthBanner} alt="New arrivals" className='w-full h-full object-cover rounded-lg shadow-lg'/>
            <div className='absolute inset-0 bg-gray-800 rounded-lg bg-opacity-50 flex flex-col items-center
            justify-center'>
                <h2 className='text-white text-2xl font-bold'>New Arrivals</h2>
                <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
            </div>
        </div>
        {/* sixth banner */}
        <div className='relative h-[250px]'>
            <img src={sixthBanner} alt="New arrivals" className='w-full h-full object-cover rounded-lg shadow-lg'/>
            <div className='absolute inset-0 bg-blue-900 rounded-lg bg-opacity-50 flex flex-col items-center
            justify-center'>
                <h2 className='text-white text-2xl font-bold'>Limit Offer</h2>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default MultiBanner
