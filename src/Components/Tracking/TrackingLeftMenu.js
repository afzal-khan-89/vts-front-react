import React, { useState, useEffect } from 'react'
import axios from 'axios';
import UserSelectionView from '../UserSelectonView';

import Vehicle from './Vehicle';

const TrackingLeftMenu = props =>{
    const [userAsset, setUserAsset] = useState([])
    const [assets, setAssets] = useState([]);
    
    let selectedAssets = [];

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
    const handleCheckboxChange=(vehicleNumberPlate)=>{
        console.log('vehicle clicked '+ vehicleNumberPlate)
        const index = selectedAssets.indexOf(vehicleNumberPlate);
        if (index > -1) {
            selectedAssets.splice(index, 1);
            console.log('vehicle removed '+ vehicleNumberPlate)
        }
        else{
            selectedAssets.push(vehicleNumberPlate);
        }
        props.cb(selectedAssets, 'track')
    }
    return(
        <div>    
            <div className = "w-full flex flex-row">
                <UserSelectionView userType = {"admin"} /> 
            </div> 
            <div class="btn-group w-full p-4 t2344ext-center bg-white  border-t border-gray-200 border-b border-gray-200 ">
                <button type="button" class="px-4 py-1 mx-1 border border-orange rounded">btn</button>
                <button type="button" class="px-4 py-1 mx-1 border border-ovaluerange rounded">btn</button>
                <button type="button" class="px-4 py-1 mx-1 border border-orange rounded">btn</button>
            </div>             
            <div class="h-full flex flex-col md:h-full w-full p-4 bg-white border-t border-fuchsia-400 ">
                <div class="flex flex-row  content-end w-full mb-4 gap-4">
                    <div className="w-1/2">
                        <select className="bg-white border border-gray-200 focus:outline-none p-2 rounded cursor-pointer">
                            <option selected>--Select Group--</option>
                                <option value="1">group x</option>
                         </select>
                    </div>
                    <div className="w-1/2 ">
                        <button className="p-2 bg-green-500 rounded-full text-sm">Create Group</button>
                    </div>
                </div>
                <div class="flex flex-row items-end  border-b border-gray-600 border-black pb-3 mb-3">
                    <label class="cursor-pointer w-1/3">
                        <input type="checkbox" class="text-sm mr-2" id="checkAll" /> Select All
                    </label>
                    <input class="w-2/3 bg-white border border-gray-200 rounded-sm p-1 ml-5 text-gray-700  focus:outline-none" 
                        id="search" type="text" placeholder="Search vehicle" onChange={vehicleSearch} />
                </div>        
                <div className = "h-full overflow-y-auto mb-2">
                    {assets.map(item=>(
                        <Vehicle key={item.id} item={item} cb={handleCheckboxChange}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrackingLeftMenu