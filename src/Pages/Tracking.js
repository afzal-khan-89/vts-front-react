import React, {  useState, useRef, useEffect }  from 'react'

import axios from 'axios'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import TrackingLeftMenu from '../Components/Tracking/TrackingLeftMenu';
import MyTrackingMap from '../Components/Tracking/TrackingMap'
import TrOpenStreetMap from '../Components/Tracking/TrOpenStreetMap';


const Tracking = ()=>{
    return(
        <div className = "fixed  w-screen flex flex-wrap m-auto  h-5/6  bg-gray-100">    
            <div className="left-panel w-1/5 flex  shadow-2xl space-y-2 flex-col h-5/6">
                <TrackingLeftMenu />
            </div>        
            <div className="content-panel w-4/5  ">
                <TrOpenStreetMap />
            </div>
        </div>
    )
}
export default Tracking