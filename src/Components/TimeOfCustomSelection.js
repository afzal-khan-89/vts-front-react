import React from 'react'
import TimeBetweenTwoDays from './TimeBetweenTwoDays'

const TimeOfCustomSelection = () =>{
    return(
        <>
            <div className="flex flex-row flex-wrap bg-white  border-gray-200" id="fuel_consumption">
                <div className = "w-2/4">
                    <span className = "text-sm text-gray-600">Fuel Consumption: { 0.2 }</span>
                </div>
                <div className = "w-1/4">
                    <select class="w-full bg-white border border-gray-400  rounded cursor-pointer" name="litter_gallon" id="litter_gallon">
                        <option value="Liter">Liter</option>
                        <option value="Gallon">Gallon</option>
                        <option value="CFT">CNG Unit(CFT)</option>
                    </select>
                </div>
                <div className = "flex flex-row justify-center w-1/4">
                     <div>
                        <span className = "text-sm text-gray-600"> km </span>
                    </div>
                </div>
            </div>      
        </>

    )
}
export default TimeOfCustomSelection