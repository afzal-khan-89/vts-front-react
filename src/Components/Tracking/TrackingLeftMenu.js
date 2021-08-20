import React, { useState, useEffect } from 'react'
import axios from 'axios';
import threeDot from '../../img/three-dots.png'
import UserSelectionView from '../UserSelectonView';

const TrackingLeftMenu = ()=>{
    const [userAsset, setUserAsset] = useState([])
    const [asset, setAsset] = useState([]);

    useEffect(() => {
        getUserAssets()

    }, [])

    function getUserAssets(){
        axios.get('http://localhost:8080/spring/api/asset/all', 
          )
          .then(function (response) {
            setUserAsset(response.data)
            setAsset(response.data)
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
        asset.map((item)=>{
            if(item.number_plate.includes(mData)){
                tempArray.push(item)
            }
        })
        if(mData.length<=0){
            setAsset(userAsset)
        }else{
            setAsset(tempArray)
        }
    }
    return(
        <div>    
            <div className = "w-full flex flex-row">
                <UserSelectionView userType = {"admin"} /> 
            </div> 
            <div class="btn-group w-full p-4 text-center bg-white  border-t border-gray-200 border-b border-gray-200 ">
                <button type="button" class="px-4 py-1 mx-1 border border-orange rounded">btn</button>
                <button type="button" class="px-4 py-1 mx-1 border border-orange rounded">btn</button>
                <button type="button" class="px-4 py-1 mx-1 border border-orange rounded">btn</button>
            </div>             
            <div class="h-5/6 flex flex-col md:h-full w-full p-4 bg-white border-t border-fuchsia-400  ">
                            <div class="flex flex-row  content-end w-full mb-4 gap-4">
                                <div className="w-1/2">
                                    <select className="bg-white border border-gray-200 focus:outline-none p-2 rounded cursor-pointer">
                                        <option selected>--Select Group--</option>
                                        <option value="1">Afghanistan</option>
                                        <option value="2">Albania</option>
                                        <option value="3">Algeria</option>
                                        <option value="4">Bangladesh</option>
                                        <option value="5">India</option>
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
                <div className = "h-5/6 overflow-y-auto mb-2">
                    {asset.map(item=>(
                        <div class="flex items-center mb-2 justify-start gap-10">
                            <label class="inline-block cursor-pointer ">
                                <input type="checkbox" class="m-1" />
                                <button class="bg-red-600 rounded-full w-3 h-3 mx-2" /> 
                                <div class="inline-block align-top text-sm"> 
                                    {item.number_plate}
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
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default TrackingLeftMenu