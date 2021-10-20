import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import moment from 'moment';

const TimeOfCustomSelection = props =>{

    const [startTime, setStartTime] = useState(new Date())
    const [endTime, setEndTime] = useState(new Date())
 
    const pickerDate ={
        startDate:"",
        endDate:""
    };

    const onStartTimeSelect=(d)=>{
        pickerDate.startDate = ''+moment(d).format('YYYY-MM-DD hh:mm:ss')
        //console.log("FORMATED :: "+pickerDate.startDate )
        props.cb(pickerDate)
        setStartTime(d)
    }
    const onEndDateSelect=(d)=>{
        pickerDate.endDate = ''+moment(d).format('YYYY-MM-DD hh:mm:ss')
        //console.log("FORMATED :: "+pickerDate.endDate )
        props.cb(pickerDate)
        setEndTime(d)
    }

    return(
        <>
            <div className="w-full h-full flex flex-col  gap-2 ">
                <div className="flex flex-col">
                    <span className = "ml-1 text-xs text-yellow-600">Start Day</span>
                    <DatePicker dateFormat="MMMM d, yyyy h:mm aa"  showTimeInput  
                            className="w-full text-gray-800 text-sm bg-gray-50 border border-gray-200 focus:outline-none p-1 rounded cursor-pointe" 
                            selected={startTime} onChange={ onStartTimeSelect } />
                </div>
                <div className="flex flex-col">
                    <span className = "text-xs text-yellow-600">End Day</span>
                    <DatePicker dateFormat="MMMM d, yyyy h:mm aa"  showTimeInput  
                        className="w-full text-gray-800 text-sm bg-gray-50 border border-gray-200 focus:outline-none p-1 rounded cursor-pointe" 
                        selected={endTime} onChange={ onEndDateSelect } />
                </div>               
            </div>    
        </>

    )
}
export default TimeOfCustomSelection
