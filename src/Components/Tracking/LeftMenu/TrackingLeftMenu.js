import React, { useState, useEffect } from 'react'
import axios from 'axios';
import UserSelectionView from '../../UserSelectonView';
import Monitor from './Monitor';
import Notifications from './Notificatons';
import History from './History';

const TrackingLeftMenu = props =>{
    const [userAsset, setUserAsset] = useState([])
    const [assets, setAssets] = useState([]);
    const [monitorMenu, setMonitorMenu] = useState('monitor')
    
    let selectedAssets = [];

    useEffect(()=>{

    }, [monitorMenu])

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
            <div class="w-full mt-4 pt-1 px-2 bg-white">
                <button className="w-1/3  active:bg-red-700 focus:bg-green-500 focus:text-white hover:bg-green-500 text-green-700 hover:text-white py-1 px-4 border border-green-500  rounded"
                    onClick={()=>{setMonitorMenu('monitor')}}>Monitor</button>
                <button className="w-1/3  focus:bg-green-500 focus:text-white hover:bg-green-500 text-green-700 hover:text-white py-1 px-4 border border-green-500  rounded"
                    onClick={()=>{setMonitorMenu('history')}}>History</button>
                <button className="w-1/3  focus:bg-green-500 focus:text-white hover:bg-green-500 text-green-700 hover:text-white py-1 px-4 border border-green-500  rounded"
                    onClick={()=>{setMonitorMenu('notifications')}}>Noitfications</button>
            </div>  
            {(()=>{
                if(monitorMenu.includes('monitor')){
                    return  <Monitor  cb={handleCheckboxChange}/>
                }else if(monitorMenu.includes('history')){
                    return  <History  cb={handleCheckboxChange}/>
                }else{
                    return  <Notifications  cb={handleCheckboxChange}/>
                }
            })()}          
        </div>
    )
}

export default TrackingLeftMenu