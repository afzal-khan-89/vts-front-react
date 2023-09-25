import Vehicle from '../Vehicle'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Monitor = (props)=> {
    const [selectedGroup, setSelectedGroup] = useState('all')
    const [displayAssets, setDisplayAssets] = useState([])
    const [assetGroup, setAssetGroup] = useState([])
    const [selectedAssets, setselectedAssets] = useState([]);

    let oGroup = ['all']   
    useEffect(() => {
        console.log(props.objects)
        setDisplayAssets(props.objects)
        props.objects.map((item)=>{
            if(oGroup.indexOf(item.group) ==-1){
                oGroup.push(item.group)
                console.log(item.group)
            }
        })
        setAssetGroup(oGroup)      
    }, [])

    useEffect(() => {
        let tempDisplayAssets = []
        if(selectedGroup.includes('all'))
        {
            setDisplayAssets(props.objects)
        }
        else
        {
            props.objects.map((item)=>
            {
                if(item.group.includes(selectedGroup))
                {
                    tempDisplayAssets.push(item)
                    console.log(item.group)
                }
            })
            setDisplayAssets(tempDisplayAssets)
        }  
        setselectedAssets([])  
    }, [selectedGroup])


    useEffect(() => {
      const intervalCall = setInterval(() => {
        selectedAssets.map((e)=>{
            axios.post('http://localhost:8000/api/v1/location/last', { 
                objects : e.object
            })
            .then(function (response) {
 //               console.log(' ---tracking api ok---  ')
//                console.log(response.data)
                var lStatus = []
                lStatus = response.data.data
//              console.log(lStatus)
                if(e.action.includes('follow')){
 //                   console.log(`=>to follow : ${e.object} `)
                    props.follow(lStatus)
                }
                else if(e.action.includes('show')){
 //                   console.log(`=>to show : ${e.object} `)
 //                   props.show(lStatus)
                }
                else{
                    console.log(`no acton for ohject ${e.object} `)
                }
            })
            .catch(function (error) {
                console.log(' ---tracking api fail---  ')
                console.log(error);
            })
        })
      }, 5000)
      return () => {
        clearInterval(intervalCall);
      };
    });



    const OnClickVehicle = (vehicle)=>
    {
        console.log('::Monitor ::vehicle clicked '+ vehicle)
        var tempAsstes = selectedAssets 
        let flag = 0 
        let temObje = { object: "", action: ""  }
        for (let i = 0; i < tempAsstes.length; i++) {
            if (tempAsstes[i].object.includes(vehicle)) {
                tempAsstes.splice(i, 1);
                props.remove(vehicle)
                flag =1 
                break;
            }
        }
        if(flag==0){
            temObje.object = vehicle
            temObje.action = "show"
            tempAsstes.push(temObje)
        }
        console.log(tempAsstes)
        setselectedAssets(tempAsstes)
    }

    const OnClickVehicleFollw = (vehicle)=>
    {
        console.log(`::Monitor ::vehicle to follow ${vehicle}`)     
        selectedAssets.map(item=>{
            if(item.object.includes(vehicle))
            {
                if(item.action.includes('follow'))
                {
                    item.action = 'show'
                }
                else
                {
                    item.action = 'follow'
                }
            }
        })
    }
    const onVehicleSearch = (e)=>{
        console.log('vehicle search')
        let tempDisplayAssets = [{ group: "", object: "", active :"" }]
        
        if(e.target.value.length<=0){
            if(selectedGroup.includes('all')){
                setDisplayAssets(props.objects)
            }
            else{
                props.objects.map((item)=>{
                    if(item.group.includes(selectedGroup)){
                        tempDisplayAssets.push(item)
                    }
                })
                setDisplayAssets(tempDisplayAssets)
            }
        }
        else{
            displayAssets.map((item)=>{
                if(item.object.includes(e.target.value)){
                    tempDisplayAssets.push(item)
                }
            })
            setDisplayAssets(tempDisplayAssets)
        }
    }
    const onChangeVehicleGroup=(e)=>{
         console.log('group ::: ')
         setSelectedGroup(e.target.value)
    }


    return (
        <div class="flex flex-col justify-content w-full bg-white flex-wrap">
            <div className="flex-none flex flex-col border border-gray-200 p-4">
                <span className="ml-1 text-xs text-yellow-600">Select Group</span>
                <select className="text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none p-1.5 
                    rounded cursor-pointer" name="vehicle_group" id="vehicle_group" onChange={onChangeVehicleGroup}>
                      
                    {assetGroup.map((item)=>(
                        <option value={item}>{item}</option>
                    ))} 
                    
                </select>
            </div>       
            <div className="flex-grow border-l border-r border-b border-gray-200 p-2">
                <div class="flex-none  flex flex-row items-end  border-b border-gray-400  pb-2">
                    <label class="cursor-pointer font-light w-1/3">
                        <input type="checkbox" class="text-sm " id="checkAll" /> Select All
                    </label>
                    <input class="w-2/3 bg-white border border-gray-200 rounded p-1.5 ml-10 text-gray-800 text-sm  focus:outline-none" 
                        id="search" type="text" placeholder="Search vehicle" onChange={ onVehicleSearch } />
                </div> 
                <div className = "h-80 overflow-y-auto mt-4">
                    {displayAssets.map(item=>(
                        <Vehicle key={item.id} item={item} cbVehicleClick={ OnClickVehicle } cbVehicleFollowClick={OnClickVehicleFollw}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Monitor