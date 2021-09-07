import React, {  useState, useRef, useEffect }  from 'react'
import axios from 'axios';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import '../Components/Tracking/TrMap.css'

import UserSelectionView from '../Components/UserSelectonView';
import Monitor from '../Components/Tracking/LeftMenu/Monitor';
import History from '../Components/Tracking/LeftMenu/History';
import Notifications from '../Components/Tracking/LeftMenu/Notificatons';


const Tr = ()=>{
    const[trackintOption, setTrackingOption]=useState('monitor');
    const [position, setPosition] = useState([23.809405, 90.361806])

    let nextTask ;
    let vehicleArray=[]
    

    const lastLocation=()=>{
        axios.post('http://localhost:8080/spring/api/asset/last-location', {
            assets : vehicleArray
        })
        .then(function (response) {
            console.log(response);
            var lat = response.data.latitude
            var lon = response.data.longitude
            var coordinate = [lat, lon]
            setPosition(coordinate)
            console.log(`position :: ${coordinate}`)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    const loadHistoryData=()=>{

    }
    const loadNotificatinData=()=>{

    }

    const followVehicle=(vehicle)=>{
        lastLocation();
        if(nextTask.includes('track')){
            setTimeout(followVehicle, 10000);
            console.log('live track refresh : 10 s')
        }

    }
    const showVehicles=(vehicles)=>{
        lastLocation();
    }

    const plotHistory=(vehicle)=>{

    }
    function showNotifications(vehicle, params) {
        
    }
 



    const cbFromNotification=(vehicle)=>{

    }
    const cbFromHistory=(vehicle)=>{

    }
    const cbFromMonitor=(vehicles, message)=>{
        vehicleArray = vehicles;
        nextTask = message;
        if(message.includes('follow')){
            vehicleArray = [vehicles]
            if(vehicleArray.length > 1){
                alert('multiple vehicle selected !')
            }else{
                followVehicle()
            }
            console.log('::Tracking : vehicleArray to track : '+vehicleArray.length)
        }else{
            vehicleArray = vehicles;
            showVehicles()
        }
        console.log('::Tracking : vehicles to track : '+vehicleArray)
    }

    return(
        <div className = "tracking-container fixed  w-screen  m-auto  bg-gray-100"   style={{  }}>    
            <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position}>
                    <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer> 
            <div  className="inline-block bg-white absolute  z-10000  w-2/9  h-20 mt-4 p-2 rounded-t-sm inset-y-0 left-0">
                <div className = "w-full">
                    <UserSelectionView  userType = {"admin"} /> 
                </div> 
            </div> 
            <div  className=" inline-block absolute  z-10000  w-2/9 rounded-t-lg inset-y-28 left-0 bg-white">              
                <div class="flex  rounded-lg text-sm gap-0.5" role="group">
                        <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-2  rounded-tl-lg outline-none focus:shadow-outline"
                            onClick={()=>{setTrackingOption('monitor')}}>Monitor</button>
                        <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-1.5  outline-none focus:shadow-outline"
                            onClick={()=>{setTrackingOption('history')}}>History</button>
                        <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-1.5  rounded-tr-lg outline-none focus:shadow-outline"
                            onClick={()=>{setTrackingOption('notifications')}}>Noitfications</button>
                </div>
                <div class="w-full pt-1 px-2">
                    {(()=>{
                        if(trackintOption.includes('monitor')){
                            return  <Monitor cb={cbFromMonitor}/>
                        }else if(trackintOption.includes('history')){
                            return  <History cb={cbFromHistory}/>
                        }else{
                            return  <Notifications cb={cbFromNotification}/>
                        }
                    })()}
                </div>  
            </div>  
            <div className="inline-block bg-white absolute  z-10000  w-2/5 mx-48 p-5 rounded-t-md inset-x-96 bottom-2" >
                    <span className="text-sm font-light ">Vehicle: {vehicleArray}</span>
                    <hr />
                    <span className="text-sm font-light ">Location: {vehicleArray}</span>
                    <hr />
            </div>     
        </div>    
    )
}
export default Tr