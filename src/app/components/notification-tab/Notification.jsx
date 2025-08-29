import React from 'react'
import {Bell} from 'lucide-react'
function NotificationTab() {
  return (
     <div className='relative lg:top-6 lg:left-315'>
        <div className='flex gap-4'>
            <div className="deadline-info">
            <p className=' text-gray-400'>Next deadline</p>
            <p className=' text-red-600 '>3h 26min</p>
        </div>
        <Bell size={24} color ="white" />

        </div>
    </div>
  )
}

export default NotificationTab