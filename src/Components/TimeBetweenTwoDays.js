import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
 //{`${currentTimeSelected.includes('custom')? '' : 'hidden'}
const TimeBetweenTwoDays=props=>{
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const mDate ={
        startDate:"",
        endDate:""
    };

    useEffect(() => {
        mDate.startDate = startDate;
        mDate.endDate = endDate;
        props.cb(mDate)
    }, [startDate, endDate])
   
    const onStartDateSelect=(date)=>{
        setStartDate(date)
    }
    const onEndDateSelect=(date)=>{
        setEndDate(date)
    }
    return(
        <>
            <div className="flex flex-row gap-4 bg-white  border-gray-200">
                <div className = "flex-1">
                    <span className = "text-sm text-gray-600">Start Day</span>
                    <DatePicker dateFormat="y-MM-dd" className="w-full bg-white border border-gray-300 shadow p-1 px-2
                            rounded cursor-pointer text-gray-800" selected={startDate} onChange={ onStartDateSelect } />
                </div>
                <div className = "flex-1">
                    <span className = "text-sm text-gray-600">End Day</span>
                    <DatePicker dateFormat="y-MM-dd" className="w-full bg-white border border-gray-300 shadow p-1 px-2
                            rounded cursor-pointer text-gray-800" selected={endDate} onChange={ onEndDateSelect } />
                </div>
            </div>         
        </>
    )
}
export default TimeBetweenTwoDays