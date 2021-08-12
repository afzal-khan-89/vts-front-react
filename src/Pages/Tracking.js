import React, {  useState, useRef, useEffect }  from 'react'

import threeDot from '../img/three-dots.png'
import axios from 'axios'


const Tracking = ()=>{


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
        <div className = "fixed  w-screen flex flex-wrap m-auto  h-5/6  bg-gray-100">            
            <div className="left-panel w-1/5 flex  space-y-2 flex-col h-5/6">    
                        <div class="w-full p-4 bg-white  border-b border-gray-200">
                            <div class="w-full">
                                <select class="w-full bg-white border border-gray-200  p-2 rounded cursor-pointer">
                                    <option selected>Select Country</option>
                                    <option value="1">Afghanistan</option>
                                    <option value="2">Albania</option>
                                    <option value="3">Algeria</option>
                                    <option value="4">Bangladesh</option>
                                    <option value="5">India</option>
                                </select>
                            </div>
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
                                <input class="w-2/3 bg-white border border-gray-200 rounded-full p-1 text-gray-700  focus:outline-none" 
                                    id="search" type="text" placeholder="Search vehicle" onChange={vehicleSearch} />
       
                            </div>        
                            <div className = "h-5/6 overflow-y-auto mb-2">
                                {asset.map(item=>(
                                        <div class="flex items-center mb-2 justify-between ">
                                            <label class="inline-block cursor-pointer ">
                                                <input type="checkbox" class="mr-2" />
                                                <div class="inline-block align-top text-sm"> 
                                                    {item.number_plate}
                                                    <div class="text-xs text-gray-400 ">
                                                        2021-07-17 <span>12.27.32</span>
                                                    </div>
                                                </div>
                                            </label>
                                            <div className="inline-block text-sm">
                                                <span>0.00Km/h</span>   
                                                <button class="bg-red-600 rounded-full w-3 h-3 ml-1" />                                
                                                </div>
                                                <button className="">
                                                    <span><img src={threeDot} /></span>
                                                </button>
                                         </div> 
                                 ))}
                            </div>
                        </div>

            </div>
            
            <div className="content-panel w-4/5  overflow-y-auto flex flex-col   h-full  bg-blue-50">
                <div className="m-5 flex">
                    <button onClick={getUserAssets}>test user</button>
                    <div class="flex border-grey-light border">
                        <input class="w-full rounded ml-1" type="text" placeholder="Search..." /> 
                        <button class="bg-grey-lightest border-grey border-l shadow hover:bg-grey-lightest">
                            <span class="w-auto flex justify-end items-center text-grey p-2 hover:text-grey-darkest">
                                <i class="material-icons text-xs">search</i>
                            </span>
                        </button>
                    </div>
                    <div class="flex border-grey-light border ml-5">
                        <input class="w-full rounded ml-1" type="text" placeholder="Search..." /> 
                            <button class="bg-grey-lightest border-grey border-l shadow hover:bg-grey-lightest">
                                <span class="w-auto flex justify-end items-center text-grey p-2 hover:text-grey-darkest">
                                    <i class="material-icons text-xs">search</i>
                                </span>
                            </button>
                    </div>

                </div>
                <div className="overflow-y-auto flex flex-col  p-3 h-full ">
                    <div class="table w-full p-2">
                        <table class="w-full border">
                            <thead>
                                <tr class="bg-gray-50 border-b">
                                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div class="flex items-center justify-center">
                                            ID
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div class="flex items-center justify-center">
                                            Lat:Lon
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div class="flex items-center justify-center">
                                            Speed
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div class="flex items-center justify-center">
                                           Data Status
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div class="flex items-center justify-center">
                                            Eng
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div class="flex items-center justify-center">
                                            Ac
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                        <div class="flex items-center justify-center">
                                            Fuel
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-gray-50 text-center">
                                    <td class="p-2 border-r">
                        
                                    </td>
                                    <td class="p-2 border-r">
                                        <input type="text" class="border p-1" />
                                    </td>
                                    <td class="p-2 border-r">
                                        <input type="text" class="border p-1" />
                                    </td>
                                    <td class="p-2 border-r">
                                        <input type="text" class="border p-1" />
                                    </td>
                                    <td class="p-2 border-r">
                                        <input type="text" class="border p-1" />
                                    </td>
                                    <td class="p-2">
                                        <input type="text" class="border p-1" />
                                    </td>
                    
                    
                                </tr>
                                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                    <td class="p-2 border-r">1</td>
                                    <td class="p-2 border-r">John Doe</td>
                                    <td class="p-2 border-r">john@gmail.com</td>
                                    <td class="p-2 border-r">Sydney, Australia</td>
                                    <td>
                                        <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                                        <a href="#" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</a>
                                    </td>
                                </tr>
                
                            </tbody>
                         </table>
                    </div>
                </div>              
            </div>
        </div>

    )
}
export default Tracking