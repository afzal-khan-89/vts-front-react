import React from 'react'

const TimeBetweenTwoDays=()=>{
    //{`${currentTimeSelected.includes('custom')? '' : 'hidden'}
    return(
        <>
            <div className="flex flex-row gap-4 bg-white  border-gray-200">
                <div className = "flex-1">
                    <span className = "text-sm text-gray-600">Start Day</span>
                    <select class="w-full bg-white border border-gray-400  p-2 rounded cursor-pointer">
                        <option selected>Start time</option>
                        <option value="1">User 0</option>
                    </select>
                </div>
                <div className = "flex-1">
                    <span className = "text-sm text-gray-600">End Day</span>
                    <select class="w-full bg-white border border-gray-400  p-2 rounded cursor-pointer">
                        <option selected>End Time</option>
                        <option value="1">User 0</option>
                    </select>
                </div>
            </div>         
        </>
    )
}
export default TimeBetweenTwoDays