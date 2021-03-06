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
            <div className="flex flex-row flex-wrap gap-4 bg-white  border-gray-200">
                <div className = "flex-1">
                    <span className = "text-sm text-gray-600">Start Day</span>
                    <DatePicker dateFormat="MMMM d, yyyy h:mm aa"  showTimeInput  className="w-full  bg-white border border-gray-300 shadow p-1 px-2
                            rounded cursor-pointer text-gray-800" selected={startTime} onChange={ onStartTimeSelect } />
 
                </div>
                <div className = "flex-1">
                <span className = "text-sm text-gray-600">Start Day</span>
                    <DatePicker dateFormat="MMMM d, yyyy h:mm aa"  showTimeInput  className="w-full bg-white border border-gray-300 shadow p-1 px-2
                            rounded cursor-pointer text-gray-800" selected={endTime} onChange={ onEndDateSelect } />
 
                </div>
            </div>    
        </>

    )
}
export default TimeOfCustomSelection
