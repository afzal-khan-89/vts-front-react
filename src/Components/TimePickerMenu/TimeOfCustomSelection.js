import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";


const TimeOfCustomSelection = props =>{

    const [startTime, setStartTime] = useState(new Date())
    const [endTime, setEndTime] = useState(new Date)

    const mDate ={
        startDate:"",
        endDate:""
    };


    useEffect(() => {
        mDate.startDate = startTime;
        mDate.endDate = endTime;
        props.cb(mDate)
    }, [startTime, endTime])

    const onStartTimeSelect=(date)=>{
        setStartTime(date)
    }
    const onEndDateSelect=(date)=>{
        setEndTime(date)
    }

    return(
        <>
            <div className="flex flex-col  gap-2 bg-white  border-gray-200">
                <div className = "flex-1">
                    <span className = "ml-1 text-xs text-yellow-600">Start Day</span>
                    <DatePicker dateFormat="MMMM d, yyyy h:mm aa"  showTimeInput  className="text-gray-800 text-sm bg-white border border-gray-200 
                    focus:outline-none p-1.5 rounded cursor-pointer  w-2/3 py-1.5 px-3" selected={startTime} onChange={ onStartTimeSelect } />
                </div>
                <div className = "flex-1">
                    <span className = "ml-1  text-xs text-yellow-600">End Day</span>
                    <DatePicker dateFormat="MMMM d, yyyy h:mm aa"  showTimeInput  className="text-gray-800 text-sm bg-white border border-gray-200 
                    focus:outline-none p-1.5 rounded cursor-pointer  w-2/3 py-1.5 px-3" selected={endTime} onChange={ onEndDateSelect } />
                </div>
            </div>    
        </>

    )
}
export default TimeOfCustomSelection
