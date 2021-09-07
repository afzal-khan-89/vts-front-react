import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";

const TimeOfSpeacificDay = props =>{

    const [date, setDate]=useState(new Date())
    const mDate = {
        startDate:"",
        endDate:""
    }
    useEffect(() => {
        mDate.startDate = date;
        mDate.endDate = "";
        props.cb(mDate)
    }, [date])
    const onDateSelect = (d)=>{
        setDate(d)
    }
    return(
        <>
            <div className="flex flex-row gap-4 bg-white  border-gray-200">
                <div className = "flex-1">
                    <span className = "ml-1 text-xs text-yellow-600">Select Day</span>
                    <DatePicker dateFormat="y-MM-dd" className="w-full bg-white border border-gray-300 shadow shadow-inner p-1 px-2
                            rounded cursor-pointer text-gray-800" selected={date} onChange={ onDateSelect } />
                </div>
            </div>         
        </>
    )
}

export default TimeOfSpeacificDay