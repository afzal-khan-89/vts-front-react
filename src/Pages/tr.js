import React, {  useState, useRef, useEffect }  from 'react'
import axios from 'axios';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import '../Components/Tracking/TrMap.css'
import { Polyline } from 'react-leaflet';
import L from "leaflet";
import "leaflet-polylinedecorator";
import { Map, GeoJSON, useLeaflet } from "react-leaflet";

import PolylineDecorator from '../Components/Tracking/PlotHIstoryData'

import UserSelectionView from '../Components/UserSelectonView';
import Monitor from '../Components/Tracking/LeftMenu/Monitor';
import History from '../Components/Tracking/LeftMenu/History';
import Notifications from '../Components/Tracking/LeftMenu/Notificatons';
import PlotHistoryData from '../Components/Tracking/PlotHIstoryData';
import ShowLastLocation from '../Components/Tracking/ShowLastLocation';


const Tr = ()=>{
    const[mapTask, setMapTask] = useState({action:'', data:[]})
    const[trackintOption, setTrackingOption]=useState('monitor');

    const FOLLOW_VEHICLE = 'follow'
    const SHOW_LAST_LOCATION = 'last_location'
    const PLOT_HISTORY = 'plot_history'
    const SHOW_NOTIFICATIONS = 'show_notifications'
 
    let userType = 'admin'
    var nextTask = 'no_task'
    let vehicleArray=[]
    let locationDatas = []
    
    const startPosition = [23.809405, 90.361806]

    const arrow = [
        {
          offset: "10%",
          repeat: '5%',
          symbol: L.Symbol.arrowHead({
            pixelSize: 15,
            polygon: false,
            pathOptions: { stroke: true }
          })
        }
      ];

    const lastLocation=()=>{
        axios.post('http://localhost:8080/spring/api/location/last-location', {
            assets : vehicleArray
        })
        .then(function (response) {
            console.log(response);
            var lat = response.data.latitude
            var lon = response.data.longitude
            var coordinate = [lat, lon]
            
            console.log(`position :: ${coordinate}`)
            setMapTask({
                action:nextTask,
                data:coordinate
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    const loadHistoryData=(historyParams)=>{
        axios.get('http://localhost:8080/spring/api/location/location-history',{
            params:{
                vehicle : historyParams.vehicle,
                startTime : historyParams.startTime,
                endTime : historyParams.endTime
            }
        }).then(response=>{
            console.log(response)
            response.data.map((item)=>{
                
                locationDatas.push([item.latitude, item.longitude])
            })
            console.log(nextTask + 'Position coord :: ')
            setMapTask({
                action:nextTask,
                data:locationDatas
            })
        }).catch()
    }
    const loadNotificatinData=()=>{

    }

    const followVehicle=(vehicle)=>{
        lastLocation();
        if(nextTask.includes(FOLLOW_VEHICLE)){
            setTimeout(followVehicle, 10000);
            console.log('live track refresh : 10 s')
        }

    }
    const showVehicles=(vehicles)=>{
        lastLocation();
    }




    const cbFromNotification=(vehicle)=>{
        nextTask = SHOW_NOTIFICATIONS
    }
    const cbFromHistory=(historyParam)=>{
        console.log("in tracking : vehicle : "+historyParam.vehicle)
        console.log("in tracking : start time : "+historyParam.startTime)
        console.log("in tracking : end time : "+historyParam.endTime)
        nextTask = PLOT_HISTORY
        loadHistoryData(historyParam)
    }
    const cbFromMonitor=(vehicles, message)=>{
        vehicleArray = vehicles;
        nextTask = message;
        if(message.includes('follow')){
            vehicleArray = [vehicles]
            if(vehicleArray.length > 1){
                alert('multiple vehicle selected !')
            }else{
                nextTask = FOLLOW_VEHICLE
                followVehicle()
            }
            console.log('::Tracking : vehicleArray to track : '+vehicleArray.length)
        }else{
            nextTask = SHOW_LAST_LOCATION ;
            vehicleArray = vehicles;
            showVehicles()
        }
        console.log('::Tracking : vehicles to track : '+vehicleArray)
    }

    return(
        <div className = "tracking-container fixed  w-screen  m-auto">    
            <MapContainer center={startPosition} zoom={10} scrollWheelZoom={true}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                {(()=>{
                    console.log('Received Data ++++++++++=')
                    console.log( mapTask.data)
                    if(mapTask.action.includes(SHOW_LAST_LOCATION)){
                        console.log('SHOW_LAST_LOCATION')
                        return  <Marker position={mapTask.data}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                    }
                    else if(mapTask.action.includes(PLOT_HISTORY)){
                        if(mapTask.data.length > 0){
                            return <PlotHistoryData patterns={arrow} positions={mapTask.data} />
                        }
                    }
                    else if(mapTask.action.includes(FOLLOW_VEHICLE)){
                        console.log('FOLLOW_VEHICLE')
                    }
                })()}                 
            </MapContainer> 

            <div  className="inline-block absolute  z-10000  w-1/5 rounded-t-lg inset-y-28 left-0 bg-white border border-gray-200 shadow-xl">              
                <div class="flex  rounded-lg text-sm gap-0.5" role="group">
                        <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-2  rounded-tl-lg outline-none focus:shadow-outline"
                            onClick={()=>{setTrackingOption('monitor')}}>Monitor</button>
                        <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-1.5  outline-none focus:shadow-outline"
                            onClick={()=>{setTrackingOption('history')}}>History</button>
                        <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-1.5  rounded-tr-lg outline-none focus:shadow-outline"
                            onClick={()=>{setTrackingOption('notifications')}}>Noitfications</button>
                </div>
                {(()=>{
                    if(userType.includes('admin')){
                        return (
                            <div  className="bg-white pl-2 pt-2 pr-2">
                                <div className = "w-full">
                                    <UserSelectionView  userType = {"admin"} /> 
                                </div> 
                            </div> 
                        )
                    }
                    else{
                        return(
                            <div  className="bg-white p-1">
           
                            </div>
                        )
                    }
                })()}
                <div class="w-full px-2 ">
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
            <div className="inline-block bg-white absolute  z-10000  w-2/5 mx-48 p-5 rounded-t-md inset-x-96 bottom-2 border border-gray-200 shadow-xl" >
                    <span className="text-sm font-light ">Vehicle: {vehicleArray}</span>
                    <hr />
                    <span className="text-sm font-light ">Location: {vehicleArray}</span>
                    <hr />
            </div>     
        </div>    
    )
}
export default Tr