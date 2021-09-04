import React, {  useState, useRef, useEffect }  from 'react'
import axios from 'axios';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import '../Components/Tracking/TrMap.css'

import  TrackingLeftMenu from '../Components/Tracking/LeftMenu/TrackingLeftMenu'


const Tracking = ()=>{

    const [position, setPosition] = useState([23.809405, 90.361806])
    var vehicles=[]

    var myJob ;

    const lastLocation=()=>{
        axios.post('http://localhost:8080/spring/api/asset/last-location', {
            assets : vehicles
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
    const trackLive=()=>{
        lastLocation();
        if(myJob.includes('track')){
            setTimeout(trackLive, 10000);
            console.log('live track refresh : 10 s')
        }

    }
    const plotHistory=()=>{

    }
    const cbForTracking=(v, message)=>{
        console.log('vehicles to track : '+v)
        vehicles = v;
        myJob = message;
        if(message.includes('track')){
            trackLive()
        }else if(message.includes('history')){

        }else{

        }
    }
    return(
        <div className = "fixed  w-screen flex flex-wrap m-auto  h-5/6  bg-gray-100">    
            <div className="left-panel w-1/5 flex  shadow-2xl space-y-2 flex-col h-screen">
                <TrackingLeftMenu cb={cbForTracking}/>
            </div>        
            <div className="content-panel w-4/5  ">
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