import React, {  useState, useEffect }  from 'react'
import axios from 'axios';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import '../../../Components/Tracking/TrMap.css'
import { Polyline } from 'react-leaflet';
import L from "leaflet";
import "leaflet-polylinedecorator";
import { Map, GeoJSON, useLeaflet } from "react-leaflet";

import PolylineDecorator from '../../../Components/Tracking/PlotHIstoryData'



import PlotHistoryData from '../../../Components/Tracking/PlotHIstoryData';
import ShowLastLocation from '../../../Components/Tracking/ShowLastLocation';

import UserSelectionView from '../../../Components/UserSelectonView';
import Monitor from '../../../Components/Tracking/LeftMenu/Monitor';
import History from '../../../Components/Tracking/LeftMenu/History';
import Notifications from '../../../Components/Tracking/LeftMenu/Notificatons';


const Tr = ()=>{
   
    let[mapTask, setMapTask] = useState({action:'', currentLocation:[], previousLocation:[], historyData:[]})
    const[recentData, setRecentData] = useState([])
    const[trackintOption, setTrackingOption]=useState('monitor');
    const[intervalId, setIntervalId]=useState()


    const NO_ACTION = ''
    const FOLLOW_VEHICLE = 'follow'
    const SHOW_LAST_LOCATION = 'last_location'
    const PLOT_HISTORY = 'plot_history'
    const SHOW_NOTIFICATIONS = 'show_notifications'
 
    let intervalTimerStatus ;
    let userType = 'admin'

    let vehicleArray=[]
    let locationDatas = []
    
    console.log("+++++++++++++++++++RE RENDER ++++++++++++++++++++++++++++++++++" )

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

    const lastLocation=(retFunction)=>{
        axios.post('http://localhost:8080/spring/api/location/last-location', {
            assets : vehicleArray
        })
        .then(function (response) {
            retFunction(response)
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
            setMapTask({
                action:PLOT_HISTORY,
                historyData:locationDatas
            })
        }).catch()
    }
    const loadNotificatinData=()=>{

    }

    useEffect(() => {
        console.log('Action : '+ FOLLOW_VEHICLE)
        console.log('LASTlocation : ' + mapTask.previousLocation)
        console.log('CURRENTlocation : ' + mapTask.currentLocation)
        var cLocation = mapTask.currentLocation
        setMapTask({
            action:FOLLOW_VEHICLE,
            previousLocation :cLocation,
            currentLocation : recentData
        })
    }, [recentData])

    const followVehicle =(response)=>{
        console.log('++++++++Follow++++++++++')
        console.log(response);

        var lat = response.data.latitude
        var lon = response.data.longitude
        var coord = [lat, lon]

        console.log('??????????????????????????');

        if(coord.length === 2){
            setRecentData(coord)
        } 
    }
    const follow=()=>{
        lastLocation(followVehicle)
    }



    const  monitorVehicle = (response)=>{
        console.log('++++++Monitor++++++++++++')
        console.log(response)
        var lat = response.data.latitude
        var lon = response.data.longitude
        var coordinate = [lat, lon]   
        setMapTask({
            action:SHOW_LAST_LOCATION,
            lastLocation:coordinate
        })
    }


    const cbFromNotification=(vehicle)=>{
        clearInterval(intervalId)

    }
    const cbFromHistory=(historyParam)=>{
        clearInterval(intervalId)
        console.log("in tracking : vehicle : "+historyParam.vehicle)
        console.log("in tracking : start time : "+historyParam.startTime)
        console.log("in tracking : end time : "+historyParam.endTime)
        loadHistoryData(historyParam)
    }
    const cbFromMonitor=(vehicles, message)=>{
        clearInterval(intervalId)
        if(message.includes('follow')){
            vehicleArray = [vehicles]
            intervalTimerStatus = setInterval(follow, 2000)
            setIntervalId(intervalTimerStatus)
            console.log('::Map : Vehicle to follow : '+vehicleArray)
        }else{
            vehicleArray = vehicles;
            console.log('::Map : vehicles to track : '+vehicleArray)
            lastLocation(monitorVehicle);
        }
    }




    return(
        <div className = "tracking-container fixed  w-screen  m-auto mt-14">    
            <MapContainer center={startPosition} zoom={10} scrollWheelZoom={true}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {(()=>{
                    console.log("+++task:+++++"+mapTask.action)
                    console.log('Received Data ++++++++++')
                    console.log( mapTask.currentLocation)
                    if(mapTask.action.includes(SHOW_LAST_LOCATION)){
                        console.log('SHOW_LAST_LOCATION')
                        return  <Marker position={mapTask.currentLocation}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                    }
                    else if(mapTask.action.includes(PLOT_HISTORY)){
                        if(mapTask.historyData.length > 0){
                            return <PlotHistoryData patterns={arrow} positions={mapTask.historyData} />
                        }
                    }
                    else if(mapTask.action.includes(FOLLOW_VEHICLE)){       
                        console.log('======IN JSX :: FOLLOW_VEHICLE=====')    
                        console.log('jsx: cLoc : '+ mapTask.currentLocation)           
                        console.log('jsx: lLoc : '+ mapTask.previousLocation)       
                        if(mapTask.currentLocation != null && mapTask.previousLocation != null 
                            && mapTask.currentLocation.length == 2 && mapTask.previousLocation.length == 2){
                            return <PlotHistoryData patterns={arrow} positions={[mapTask.previousLocation, mapTask.currentLocation]} />   
                        } 
                                       
                        
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