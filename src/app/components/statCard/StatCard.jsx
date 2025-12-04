import React from 'react'

function StatCard({icon:Icon,title,subtitle,iconColor}) {
  return (
    <div className='w-75 sm:w-120 md:w-[97%]  bg-gray-800 border border-gray-700 rounded-lg hover:border-gray-600 transition-all duration-300  
    m-5 mb-0'>
       <div className='grid grid-cols-1 gap-2 m-3'>
         <div className='bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-lg p-2
          w-10 lg:w-12'>
            <Icon className="w-6 h-6 md:w-8 md:h-8" color={iconColor} />
        </div>
        
        <div className='text-lg lg:text-xl font-extrabold'>
            {title}
        </div>
        <div className='text-sm lg:text-lg text-gray-400'>
            {subtitle}
        </div>
       </div>
    </div>
  )
}

export default StatCard

// w-75 sm:w-120 md:w-160 