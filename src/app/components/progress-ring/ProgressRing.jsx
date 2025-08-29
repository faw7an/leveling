import React from 'react'

function ProgressRing({progress, strokeWidth=8}) {
    const defaultSize=120 
    const radius = (defaultSize - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress/100) * circumference;
    return (
    <div className='relative bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-300 rounded-lg w-75 h-32 ml-5 lg:w-170 mt-5 lg:h-72 '>
        <div className='flex item-center justify-center mt-5 lg:mt-16'>
             <svg width={80} height={80} className='block sm:hidden transform -rotate-90'>
                    <circle cx={40} cy={40} r={36} stroke='currentColor' strokeWidth={strokeWidth} fill='transparent' className='text-gray-700' />
                    <circle cx={40} cy={40} r={36} stroke='currentColor' strokeWidth={strokeWidth} fill='transparent' 
                            strokeDasharray={circumference * 0.6} strokeDashoffset={offset * 0.6} strokeLinecap='round' 
                            className='text-blue-500 transition-all duration-500 ease-in-out' />
                </svg>
                
                {/* Medium screens */}
                <svg width={120} height={120} className='hidden sm:block md:hidden transform -rotate-90'>
                    <circle cx={60} cy={60} r={56} stroke='currentColor' strokeWidth={strokeWidth} fill='transparent' className='text-gray-700' />
                    <circle cx={60} cy={60} r={56} stroke='currentColor' strokeWidth={strokeWidth} fill='transparent' 
                            strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap='round' 
                            className='text-blue-500 transition-all duration-500 ease-in-out' />
                </svg>
                
                {/* Large screens */}
                <svg width={160} height={160} className='hidden md:block transform -rotate-90'>
                    <circle cx={80} cy={80} r={76} stroke='currentColor' strokeWidth={strokeWidth} fill='transparent' className='text-gray-700' />
                    <circle cx={80} cy={80} r={76} stroke='currentColor' strokeWidth={strokeWidth} fill='transparent' 
                            strokeDasharray={circumference * 1.3} strokeDashoffset={offset * 1.3} strokeLinecap='round' 
                            className='text-blue-500 transition-all duration-500 ease-in-out' />
                </svg>
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-center'>
                <div className='text-xl lg:text-2xl font-bold text-white'>
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