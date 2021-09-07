import React, {  useState, useRef, useEffect }  from 'react'
import axios from 'axios';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import '../Components/Tracking/TrMap.css'

import UserSelectionView from '../Components/UserSelectonView';
import Monitor from '../Components/Tracking/LeftMenu/Monitor';
import History from '../Components/Tracking/LeftMenu/History';
import Notifications from '../Components/Tracking/LeftMenu/Notificatons';


const Tracking = ()=>{
    const[trackintOption, setTrackingOption]=useState('monitor');
    const [position, setPosition] = useState([23.809405, 90.361806])

    let userType = 'user';
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
        <div className = "tracking-container fixed  w-screen flex flex-wrap m-auto  bg-gray-100"   style={{  }}>    
            <div className="left-panel lg:w-2/9  md:w-1/3 flex  shadow-2xl space-y-2 flex-col h-full">
                {(()=>{
                    if(userType.includes('admin')){
                        return (
                            <div className = "w-full">
                                <UserSelectionView  userType = {"admin"} /> 
                            </div> 
                        )
                    }
                })()}
                <div class="w-full mt-4 pt-1 bg-white">
                    <div class="flex  rounded-lg text-sm p-2" role="group">
                        <button class="flex-1 bg-white text-green-500 hover:bg-green-500 hover:text-white border border-r-0 border-green-500 rounded-l-lg px-4  mx-0 outline-none focus:shadow-outline"
                            onClick={()=>{setTrackingOption('monitor')}}>Monitor</button>
                        <button class="flex-1 bg-white text-green-500 hover:bg-green-500 hover:text-white border border-green-500  px-8 py-1.5 mx-0 outline-none focus:shadow-outline"
                            onClick={()=>{setTrackingOption('history')}}>History</button>
                        <button class="flex-1 bg-white text-green-500 hover:bg-green-500 hover:text-white border border-l-0 border-green-500 rounded-r-lg px-4 mx-0 outline-none focus:shadow-outline"
                            onClick={()=>{setTrackingOption('notifications')}}>Noitfications</button>
                    </div>
                </div>  
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
            <div className="content-panel relative lg:w-7/9 md:w-2/3 " >
                <div className="inline-block bg-white absolute  z-10000  w-2/3 ml-48 mr-48 p-5 rounded-t-xl bottom-0 mb-2" >
                    <span className="text-sm font-light ">Vehicle: {vehicleArray}</span>
                    <hr />
                    <span className="text-sm font-light ">Location: {vehicleArray}</span>
                    <hr />
                </div>
                <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>    
    )
}
export default Tracking