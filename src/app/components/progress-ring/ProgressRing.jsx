import React from 'react'

function ProgressRing({progress, strokeWidth=8}) {
    // Calculate responsive dimensions using CSS custom properties
    const radius = 'calc((100% - 16px) / 2)'; // Responsive radius
    
    return (
        <div className='relative bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-300 rounded-lg w-75 h-32 ml-5 sm:h-45 sm:w-120 md:w-160 md:h-65 lg:w-120 mt-5 lg:h-77'>
            <div className='flex items-center justify-center mt-5 sm:mt-8 md:mt-14 lg:mt-16'>
                <div className='w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40'>
                    <svg 
                        width="100%" 
                        height="100%" 
                        viewBox="0 0 120 120" 
                        className='transform -rotate-90'
                        style={{
                            '--progress': progress,
                            '--circumference': 2 * Math.PI * 52, // radius of 52 for viewBox 120x120
                            '--offset': `calc(var(--circumference) - (var(--progress) / 100) * var(--circumference))`
                        }}
                    >
                        {/* Background circle */}
                        <circle 
                            cx="60" 
                            cy="60" 
                            r="52" 
                            stroke="currentColor" 
                            strokeWidth={strokeWidth} 
                            fill="transparent" 
                            className="text-gray-700" 
                        />
                        {/* Progress circle */}
                        <circle 
                            cx="60" 
                            cy="60" 
                            r="52" 
                            stroke="currentColor" 
                            strokeWidth={strokeWidth} 
                            fill="transparent" 
                            strokeDasharray="var(--circumference)"
                            strokeDashoffset="var(--offset)"
                            strokeLinecap="round"
                            className="text-blue-500 transition-all duration-500 ease-in-out"
                        />
                    </svg>
                </div>
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