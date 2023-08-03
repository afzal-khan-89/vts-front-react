import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import moment from 'moment'

const TimeOfSpeacificDay = props =>{

    const [date, setDate]=useState(new Date())

    const pickerDate = {
        startDate:"",
        endDate:""
    }

    const onDateSelect = (d)=>{
        pickerDate.startDate = moment(d).startOf('day').format('YYYY-MM-DD hh:mm:ss')
        pickerDate.endDate = moment(d).endOf('day').format('YYYY-MM-DD hh:mm:ss')
       // console.log('START DAY : '+ pickerDate.startDate)
       // console.log('END DAY : '+  pickerDate.endDate )
        props.cb(pickerDate)
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