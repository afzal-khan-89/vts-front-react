import React from 'react'
import threeDot from '../../img/three-dots.png'

const Vehicle =(props)=> {

    const vehicle = props.item.number_plate
    const handleOncick=()=>{
        console.log('handle clicked in vehicle.js')
        props.cb(vehicle);
    }

    return (
        <div class="flex items-center mb-2 justify-start gap-10">
            <label class="inline-block cursor-pointer " >
                <input type="checkbox" class="m-1" onClick={handleOncick} />
                <button class="bg-red-600 rounded-full w-3 h-3 mx-2" /> 
                <div class="inline-block align-top text-sm"> 
                    {props.item.number_plate}
                    <div class="text-xs text-gray-400 ">
                        2021-07-17 <span>12.27.32</span>
                    </div>
                </div>
            </label>
            <div className="inline-block text-sm">
                <span>0.00Km/h</span>                                
            </div>
            <button className="">
                <span><img src={threeDot} /></span>
            </button>
        </div>
    )
}
export default Vehicle