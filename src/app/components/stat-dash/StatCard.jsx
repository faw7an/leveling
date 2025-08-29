import React from 'react'

function StatCard({icon:Icon,title,subtitle,iconColor}) {
  const defaultIconSize = 24;
  const smallIconSize = 18;
  return (
    <div className='bg-gray-800 border border-gray-700 rounded-lg hover:border-gray-600 transition-all duration-300 w-75 lg:w-150 m-5 mb-0'>
       <div className='grid grid-col-1 gap-2 m-3'>
         <div className='hidden sm:hidden lg:block bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-lg p-2 w-10'>
            <Icon size={defaultIconSize} color={iconColor} />
        </div>
        <div className='block sm:hidden lg:hidden bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-lg p-2 w-10'>
            <Icon size={smallIconSize} color={iconColor} />
        </div>
        
        <div className='text-lg lg:text-xl font-extrabold'>
            {title}
        </div>
        <div className='text-sm lg:text-lg text-gray-400 '>
            {subtitle}
        </div>
       </div>
    </div>
  )
}

export default StatCard