import Vehicle from '../Vehicle'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { getUserAllVehicle } from '../../../api/VehicleApi.js'
import { fetchAssetGroup }    from '../../../api/VehicleGroupApi.js'
import { getUsersVehicleByGroup } from '../../../api/VehicleApi'

const Monitor = (props)=> {
    
    const [savedAsset, setSavedAsset] = useState([])
    const [assets, setAssets] = useState([]);
    const [assetGroup, setAssetGroup] = useState([])

    const[assetsQueue, setAssetsQueue] = useState([])


    useEffect(() => {
        getUserAllVehicle('ovaga').then((data)=>{
            //console.log("::Monitor::")
            //console.log(data)
            setSavedAsset(data)
            setAssets(data)
        })

    }, [])

    useEffect(() => {
        fetchAssetGroup('ovaga').then((data)=>{
            //console.log("::Monitor::assetgrpup::")
            //console.log(data)
            setAssetGroup(data)
        })

    }, [])


    const callFromVehicleClick=(vehicle)=>{
        var tempAssets = assetsQueue 
        console.log('::Monitor :: last vehicle queue'+ tempAssets)
        console.log('::Monitor ::vehicle clicked '+ vehicle)
        const index = tempAssets.indexOf(vehicle);
        if (index > -1) {
            tempAssets.splice(index, 1);
            console.log('::Monitor ::vvehicle removed '+ vehicle)
        }
        else{
            tempAssets.push(vehicle);
        }
        setAssetsQueue(tempAssets)
        console.log('::Monitor ::vehicle to track  '+ tempAssets)
        props.cb(assetsQueue, 'track')

    }
    const callFromVehicleFollowClick=(vehicle)=>{
        setAssetsQueue([])
        console.log(`::Monitor ::vehicle to follow ${vehicle}`)
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
            setAssets(savedAsset)
        }else{
            setAssets(tempArray)
        }
    }
    const onVehicleGroupChange=(e)=>{
        console.log('group ::: ')
        console.log(e.target.value)
        if(e.target.value.includes('all_vehicles')){
            getUserAllVehicle('ovaga').then((data)=>{
                //console.log("::Monitor::")
                //console.log(data)
                setSavedAsset(data)
                setAssets(data)
            })
    
        }else{
            getUsersVehicleByGroup('ovaga', e.target.value).then((data)=>{
                console.log(data)
                if(data.length < 0){
                    setAssets([])
                }
                else setAssets(data)
            })
        }
    }
    return (
        <div class="flex flex-col justify-content w-full bg-white flex-wrap">
            <div className="flex-none flex flex-col border border-gray-200 p-4">
                <span className="ml-1 text-xs text-yellow-600">Select Group</span>
                <select className="text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none p-1.5 
                    rounded cursor-pointer" name="vehicle_group" id="vehicle_group" onChange={onVehicleGroupChange}>
                        <option value={'all_vehicles'}>{'all vehicles'}</option>   
                    {assetGroup.map((item)=>(
                        <option value={item.group_name}>{item.group_name}</option>
                    ))} 
                    
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
                </div>
            </div>
        </div>
    )
}
export default Monitor