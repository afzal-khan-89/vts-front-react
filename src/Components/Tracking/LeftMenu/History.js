import React, {  useState, useRef, useEffect }  from 'react'

import TimePickerView from '../../TimePickerMenu/TimePickerView'


const History =(props)=> {

    let historyParam = {
        vehicle : 'asdf',
        startTime: '',
        endTime:''
    }

    const onTimeSelected=(start_time, end_time)=>{
        if(start_time != ''){
            historyParam.startTime = start_time;
        }
        if(end_time != ''){
            historyParam.endTime = end_time;
        }
        console.log('HISTORY:: start time -> '+historyParam.startTime+ ' end time => '+ historyParam.endTime);
    }
    const showHistory = ()=>{
        props.cb(historyParam)
    }
    const onVehicleSelected =(e)=>{
        console.log('vehicle selected -> '+ e.target.value)
        historyParam.vehicle = e.target.value
    }
    return (
        <div className="flex flex-col bg-white p-1">
            <div className="w-full flex mt-5 gap-2">
                <div className="w-1/2 flex flex-col">
                    <span className="ml-1 text-xs text-yellow-600">Select Vehicle</span>
                    <select className="text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none p-1.5 rounded cursor-pointer" onChange={ onVehicleSelected }>
                        <option value="1">dk-mtro-cha-0934</option>
                        <option value="2">dk-mtro-cha-0934</option>               
                    </select>
                </div>
                <div className="w-1/2 flex flex-col">
                    <span className="ml-1 text-xs text-yellow-600">Select Group</span>
                    <select className="text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none p-1.5 rounded cursor-pointer">
                        <option value="1">group 1</option>
                        <option value="2">group 2</option>   
                    </select>
                </div>
            </div>
            <div className="mt-3">
                <TimePickerView  cb={ onTimeSelected }/>
            </div>
            <div className="flex justify-center mt-5">
                <button className="w-1/3 object-none object-bottom  active:bg-red-700 focus:bg-yellow-500 focus:text-white hover:bg-green-500 
                 text-yellow-700 hover:text-white py-1 px-4 border border-yellow-500  rounded" onClick={ showHistory }>Show</button>
            </div>
        </div>
    )
}
export default History 