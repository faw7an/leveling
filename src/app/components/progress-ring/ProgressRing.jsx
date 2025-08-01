import React from 'react'

function ProgressRing({progress , size=120 , strokeWidth=8}) {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress/100) * circumference;
  
    return (
    <div className='relative bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-300 rounded-lg w-180 mt-5 h-72 '>
        <div className='flex item-center justify-center mt-16'>
        <svg width={size} height={size} className='transform -rotate-90 m-5 '>
            <circle
                cx={size/2}
                cy={size/2}
                r={radius}
                stroke='currentColor'
                strokeWidth={strokeWidth}
                fill='transparent'
                className='text-gray-700'
            />
            <circle
                cx={size/2}
                cy={size/2}
                r={radius}
                stroke='currentColor'
                strokeWidth={strokeWidth}
                fill='transparent'
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap='round'
                className='text-blue-500 transition-all duration-500 ease-in-out'
            />
        </svg>
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-center'>
                <div className='text-2xl font-bold text-white'>
                    {progress}%
                </div>
                 <div className='text-xs text-gray-400'>
                    Progress
                 </div>
            </div>
        </div>
    </div>
  )
}

export default ProgressRing