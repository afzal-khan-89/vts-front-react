import React, {  useState, useRef, useEffect }  from 'react'
import axios from 'axios'

import TimeOfPreDefined from '../../TimePickerMenu/TimeOfPreDefined'
import TimeBetweenTwoDays from '../../TimePickerMenu/TimeBetweenTwoDays'
import TimeOfSpeacificDay from '../../TimePickerMenu/TimeOfSpeacificDay'
import TimeOfCustomSelection from '../../TimePickerMenu/TimeOfCustomSelection'
import TimePickerView from '../../TimePickerMenu/TimePickerView'


const History =()=> {

    const [timeSelectionOption, setTimeSelectionOption] = useState('current-hour');

    const onTimeSelectonChange =(e)=>{
        setTimeSelectionOption(e.target.value)
        console.log('time selection changed ' + timeSelectionOption);

    }
    return (
        <div className="flex flex-col bg-white">
            <div className="w-full p-2 flex mt-5 gap-2">
                <div className="w-1/2 flex flex-col">
                    <span className="ml-1 text-xs text-yellow-600">Select Vehicle</span>
                    <select className="text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none p-1.5 rounded cursor-pointer">
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
            <div className="w-full p-2">
                <TimePickerView />
            </div>
            <div className="w-full p-5">
            <button className="w-1/3  active:bg-red-700 focus:bg-green-500 focus:text-white hover:bg-green-500 text-green-700 hover:text-white py-1 px-4 border border-green-500  rounded"
                    >Show</button>
            </div>
        </div>
    )
}
export default History 