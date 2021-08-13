import React from 'react'

const TimeOfSpeacificDay = ()=>{
    return(
        <>
            <div className="gap-4 bg-white  border-gray-200">
                <span className = "text-sm text-gray-600">Select Day</span>
                    <select class="w-full bg-white border border-gray-400  p-2 rounded cursor-pointer text-gray-800" name="time_period" id="time_period">
                        <option value="current-hour">we ew ew</option>
                    </select>
            </div> 
        </>
    )
}

export default TimeOfSpeacificDay