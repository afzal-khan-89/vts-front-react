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
        <div class="h-full flex flex-col md:h-full w-full p-4 bg-white border-fuchsia-400 ">
            <div className="w-1/2 flex flex-col mt-5">
                <span className="ml-1 text-xs text-yellow-600">Select Group</span>
                <select className="text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none p-1.5 rounded cursor-pointer">
                    <option value="1">group x</option>
                    <option value="1">group y</option>
                </select>
            </div>
            <div class="flex flex-row items-end  border-b border-gray-600 border-black pb-3 mb-2 mt-5">
                <label class="cursor-pointer font-light w-1/3">
                    <input type="checkbox" class="text-sm mr-2" id="checkAll" /> Select All
                </label>
                <input class="w-2/3 bg-white border border-gray-400 rounded py-1  px-2 ml-10 text-gray-800 text-sm  focus:outline-none" 
                    id="search" type="text" placeholder="Search vehicle" onChange={vehicleSearch} />
            </div>        
            <div className = "h-full overflow-y-auto mb-2">
                {assets.map(item=>(
                    <Vehicle key={item.id} item={item} cbVehicleClick={callFromVehicleClick} cbVehicleFollowClick={callFromVehicleFollowClick}/>
                ))}
            </div>
        </div>
    )
}
export default Monitor