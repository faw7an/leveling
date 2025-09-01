import React from 'react'
import {CircleUserRound} from 'lucide-react'
function Profile() {
  const defaultIconSize = 24;
  const smallIconSize = 20;
  return (
    // <div className='relative lg:top-[-30] lg:left-356 '>
    <div>
        <CircleUserRound className='w-8 h-8 mr-5 md:w-10 md:h-10 ' color='white' />
        {/* <p className='text-gray-400'>Fawzan Saeed</p> */}
    </div>
  )
}

export default Profile