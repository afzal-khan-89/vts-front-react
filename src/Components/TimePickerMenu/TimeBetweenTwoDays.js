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
            <div className="flex flex-row gap-2 bg-white  border-gray-200">
                <div className = "flex-1">
                    <span className = "ml-1 text-xs text-yellow-600">Start Day</span>
                    <DatePicker dateFormat="y-MM-dd" className="text-gray-800 text-sm bg-white border border-gray-200 
                        focus:outline-none rounded cursor-pointer w-full py-1.5 px-3" selected={startDate} onChange={ onStartDateSelect } />
                </div>
                <div className = "flex-1">
                    <span className = "ml-1 text-xs text-yellow-600">End Day</span>
                    <DatePicker dateFormat="y-MM-dd" className="text-gray-800 text-sm bg-white border border-gray-200 
                        focus:outline-none rounded cursor-pointer w-full py-1.5 px-3" selected={endDate} onChange={ onEndDateSelect } />
                </div>
            </div>         
        </>
    )
}
export default TimeBetweenTwoDays
