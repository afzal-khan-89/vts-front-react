import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
 //{`${currentTimeSelected.includes('custom')? '' : 'hidden'}
const TimeBetweenTwoDays=props=>{
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const pickerDate ={
        startDate:"",
        endDate:""
    };


   
    const onStartDateSelect=(date)=>{
        pickerDate.startDate = moment(date).startOf('day').format('YYYY-MM-DD hh:mm:ss')
        //console.log('START TIME : '+ pickerDate.startDate)
        props.cb(pickerDate)
        setStartDate(date)
    }
    const onEndDateSelect=(date)=>{
        pickerDate.endDate = moment(date).endOf('day').format('YYYY-MM-DD hh:mm:ss')
       // console.log('END TIME : '+ pickerDate.endDate)
        props.cb(pickerDate)
        setEndDate(date)
    }
    return(        
        // <div className="flex flex-row gap-2 bg-white  border-gray-200">
        //         <div className = "flex-1">
        //             <span className = "ml-1 text-xs text-yellow-600">Start Day</span>
        //             <DatePicker dateFormat="y-MM-dd" className="text-gray-800 text-sm bg-white border border-gray-200 
        //                 focus:outline-none rounded cursor-pointer w-full py-1.5 px-3" selected={startDate} onChange={ onStartDateSelect } />
        //         </div>
        //         <div className = "flex-1">
        //             <span className = "ml-1 text-xs text-yellow-600">End Day</span>
        //             <DatePicker dateFormat="y-MM-dd" className="text-gray-800 text-sm bg-white border border-gray-200 
        //                 focus:outline-none rounded cursor-pointer w-full py-1.5 px-3" selected={endDate} onChange={ onEndDateSelect } />
        //         </div>
        // </div>    
        
                    <div className="w-full h-full flex flex-col  gap-2 ">
                <div className="flex flex-col">
                    <span className = "ml-1 text-xs text-yellow-600">Start Day</span>
                    <DatePicker dateFormat="MMMM d, yyyy h:mm aa"  showTimeInput  
                            className="w-full text-gray-800 text-sm bg-gray-50 border border-gray-200 focus:outline-none p-1 rounded cursor-pointe" 
                            selected={startDate} onChange={ onStartDateSelect } />
                </div>
                <div className="flex flex-col">
                    <span className = "text-xs text-yellow-600">End Day</span>
                    <DatePicker dateFormat="MMMM d, yyyy h:mm aa"  showTimeInput  
                        className="w-full text-gray-800 text-sm bg-gray-50 border border-gray-200 focus:outline-none p-1 rounded cursor-pointe" 
                        selected={endDate} onChange={ onEndDateSelect } />
                </div>               
            </div> 
    )
}
export default TimeBetweenTwoDays
