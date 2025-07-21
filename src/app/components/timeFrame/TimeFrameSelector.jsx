import React from "react";

function TimeFrameSelector() {
  return (
     <div className='text-gray-400 flex gap-3 m-5 ml-5 w-100 justify-center rounded-lg'>
        <div className='cursor-pointer bg-gray-800 p-3 rounded-lg'>Daily</div>
        <div className='cursor-pointer bg-gray-800 p-3 rounded-lg'>Weekly</div>
        <div className='cursor-pointer bg-gray-800 p-3 rounded-lg'>Monthly</div>
    </div>
  );
}

export default TimeFrameSelector;
