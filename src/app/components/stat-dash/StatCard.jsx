import React from 'react'

function StatCard({icon:Icon,title,subtitle,iconSize,iconColor}) {
  return (
    <div className='bg-gray-800 border border-gray-700 rounded-lg hover:border-gray-600 transition-all duration-300 w-150 m-5 mb-0'>
       <div className='grid grid-col-1 gap-2 m-3'>
         <div className='bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-lg p-2 w-10'>
            <Icon size={iconSize} color={iconColor} />
        </div>
        <div className='text-xl font-extrabold'>
            {title}
        </div>
        <div className='text-gray-400 '>
            {subtitle}
        </div>
       </div>
    </div>
  )
}

export default StatCard