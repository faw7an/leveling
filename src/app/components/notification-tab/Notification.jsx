import React from 'react'
import {Bell} from 'lucide-react'
function NotificationTab() {
  return (
     <div className='relative top-6 left-315'>
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