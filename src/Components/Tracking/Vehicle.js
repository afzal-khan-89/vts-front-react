import React from 'react'
import follow from '../../img/follow.png'

const Vehicle =(props)=> {

    const vehicle = props.item.number_plate
    const handleVehicleclick=()=>{
        console.log('vehicle clicked '+ vehicle)
        props.cbVehicleClick(vehicle);
    }
    const onFollowButtonClick=()=>{
        props.cbVehicleFollowClick(vehicle)
        console.log(`vehicle follow button clicked`)
    }
    return (
        <div class="flex items-center mb-2 justify-between gap-10">
            <label class="inline-block cursor-pointer " >
                <input type="checkbox" class="m-1" onClick={handleVehicleclick} />
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
            <button className="" onClick={onFollowButtonClick}>
                <span><img className="w-12 h-6" src={follow} /></span>
            </button>
        </div>
    )
}
export default Vehicle