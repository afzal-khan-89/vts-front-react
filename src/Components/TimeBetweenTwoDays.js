import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const TimeBetweenTwoDays=()=>{
    const [startDate, setStartDate] = useState(new Date());
    const [endData, setEndDate] = useState(new Date());
    //{`${currentTimeSelected.includes('custom')? '' : 'hidden'}
    return(
        <>
            <div className="flex flex-row gap-4 bg-white  border-gray-200">
                <div className = "flex-1">
                    <span className = "text-sm text-gray-600">Start Day</span>
                    <DatePicker dateFormat="y-MM-dd" className="w-full bg-white border border-gray-300 shadow p-1 px-2
                            rounded cursor-pointer text-gray-800" selected={startDate} onChange={(date) => setStartDate(date)} />
                    {/* <select class="w-full bg-white border border-gray-400  p-2 rounded cursor-pointer">
                        <option selected>Start time</option>
                        <option value="1">User 0</option>
                    </select> */}
                </div>
                <div className = "flex-1">
                    <span className = "text-sm text-gray-600">End Day</span>
                    <DatePicker dateFormat="y-MM-dd" className="w-full bg-white border border-gray-300 shadow p-1 px-2
                            rounded cursor-pointer text-gray-800" selected={endData} onChange={(date) => setEndDate(date)} />
                    {/* <select class="w-full bg-white border border-gray-400  p-2 rounded cursor-pointer">
                        <option selected>End Time</option>
                        <option value="1">User 0</option>
                    </select> */}
                </div>
            </div>         
        </>
    )
}
export default TimeBetweenTwoDays