import Vehicle from '../Vehicle'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Monitor = (props)=> {
    
    const [userAsset, setUserAsset] = useState([])
    const [assets, setAssets] = useState([]);
    

    let selectedAssets=[]

    useEffect(() => {
        getUserAssets()

    }, [])

    function getUserAssets(){
        axios.get('http://localhost:8080/spring/api/asset/all', 
          )
          .then(function (response) {
            setUserAsset(response.data)
            setAssets(response.data)
            console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    const callFromVehicleClick=(vehicle)=>{
        console.log('vehicle clicked '+ vehicle)
        const index = selectedAssets.indexOf(vehicle);
        if (index > -1) {
            selectedAssets.splice(index, 1);
            console.log('vehicle removed '+ vehicle)
        }
        else{
            selectedAssets.push(vehicle);
        }
        props.cb(selectedAssets, 'track')

    }
    const callFromVehicleFollowClick=(vehicle)=>{
        selectedAssets=[vehicle]
        console.log(`::Monitor-> callBack from follow button clicked . vehicle :: ${vehicle}`)
        props.cb(vehicle, 'follow')
    }
    const vehicleSearch = (e)=>{
        console.log('vehicle search')
        const mData = e.target.value;
        const tempArray = []
        assets.map((item)=>{
            if(item.number_plate.includes(mData)){
                tempArray.push(item)
            }
        })
        if(mData.length<=0){
            setAssets(userAsset)
        }else{
            setAssets(tempArray)
        }
    }
    return (
        <div class="flex flex-col justify-content w-full bg-white flex-wrap">
            <div className="flex-none flex flex-col border border-gray-200 p-4">
                <span className="ml-1 text-xs text-yellow-600">Select Group</span>
                <select className="text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none p-1.5 rounded cursor-pointer">
                    <option value="1">group x</option>
                    <option value="1">group y</option>
                </select>
            </div>       
            <div className="flex-grow border-l border-r border-b border-gray-200 p-2">
                <div class="flex-none  flex flex-row items-end  border-b border-gray-400  pb-2">
                    <label class="cursor-pointer font-light w-1/3">
                        <input type="checkbox" class="text-sm " id="checkAll" /> Select All
                    </label>
                    <input class="w-2/3 bg-white border border-gray-200 rounded p-1.5 ml-10 text-gray-800 text-sm  focus:outline-none" 
                        id="search" type="text" placeholder="Search vehicle" onChange={vehicleSearch} />
                </div> 
                <div className = "h-80 overflow-y-auto mt-4">
                    {assets.map(item=>(
                        <Vehicle key={item.id} item={item} cbVehicleClick={callFromVehicleClick} cbVehicleFollowClick={callFromVehicleFollowClick}/>
                    ))}
                                {assets.map(item=>(
                    <Vehicle key={item.id} item={item} cbVehicleClick={callFromVehicleClick} cbVehicleFollowClick={callFromVehicleFollowClick}/>
                    ))}
                                {assets.map(item=>(
                    <Vehicle key={item.id} item={item} cbVehicleClick={callFromVehicleClick} cbVehicleFollowClick={callFromVehicleFollowClick}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Monitor