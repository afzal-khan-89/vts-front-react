import React, { useState } from 'react'
import Logbook from '../Components/Home/Logbook'
import QuickInfo from '../Components/Home/QuickInfo'
import SmsSettings from '../Components/Home/SmsSettings'
import VehicleInfo from '../Components/Home/VehicleInfo'
import VehicleStatus from '../Components/Home/VehicleInfo'
import '../index.css'

const Home = ()=>{

    const[homeContent, setHomeContent] = useState(2)

    const HOME_CONTENT_MAP = 1
    const HOME_CONTENT_VEHICLE_STATUS = 2
    const HOME_CONTENT_LOG_BOOK = 3
    const HOME_CONTENT_SMS_SETTINGS = 4
    const HOME_CONTENT_QUICK_INFO = 5 


    const onShowMapClick =()=>{
        //setHomeContent(HOME_CONTENT_MAP)
    }
    const onVehicleStatusClick=()=>{
        console.log("vehicle status clicked ... ")
        setHomeContent(HOME_CONTENT_VEHICLE_STATUS)
    }
    const onLogBookClick=()=>{
        console.log("Logbook clicked ... ")
        setHomeContent(HOME_CONTENT_LOG_BOOK)
    }
    const onSmsSettingClick=()=>{
        console.log("Sms settings clicked ... ")
        setHomeContent(HOME_CONTENT_SMS_SETTINGS)
    }
    const onQuickInfoClick=()=>{
        console.log("Quick info clicked ... ")
        setHomeContent(HOME_CONTENT_QUICK_INFO)
    }

    return(
        <div className="leaflet-container flex bg-gray-50">
             <div className="h-full w-2/12  bg-gray-100 flex flex-col justify-center items-end gap-2">
                 <div className="w-32 h-32 bg-red-600 flex flex-col item-end rounded-lg" onClick={ onShowMapClick }>
                    <div className="h-4/5 bg-red-600">

                    </div>
                    <div className="h-1/5 bg-gray-300 flex justify-center items-center">
                        <span>Map</span>
                    </div>
                 </div>
                 <div className="w-32 h-32 bg-red-600 flex flex-col item-end rounded-lg" onClick={ onVehicleStatusClick }>
                    <div className="h-4/5 bg-red-600">

                    </div>
                    <div className="h-1/5 bg-gray-300 flex justify-center items-center">
                        <span>Vehicle Info</span>
                    </div>
                 </div>
                 <div className="w-32 h-32 bg-red-600 flex flex-col item-end rounded-lg" onClick={ onLogBookClick }>
                    <div className="h-4/5 bg-red-600">

                    </div>
                    <div className="h-1/5 bg-gray-300 flex justify-center items-center">
                        <span>Logbook</span>
                    </div>
                 </div>
                 <div className="w-32 h-32 bg-red-600 flex flex-col item-end rounded-lg" onClick={ onSmsSettingClick }>
                    <div className="h-4/5 bg-red-600">

                    </div>
                    <div className="h-1/5 bg-gray-300 flex justify-center items-center">
                        <span>SMS Settings</span>
                    </div>
                 </div>
                 <div className="w-32 h-32 bg-red-600 flex flex-col item-end rounded-lg" onClick={ onQuickInfoClick }>
                    <div className="h-4/5 bg-red-600">

                    </div>
                    <div className="h-1/5 bg-gray-300 flex justify-center items-center">
                        <span>Quick Info</span>
                    </div>
                 </div>        
            </div>
            <div className="h-full w-10/12 ">
                {(()=>{
                     console.log("CHECK ")
                    if(homeContent == HOME_CONTENT_LOG_BOOK){
                        console.log("HOME_CONTENT_LOG_BOOK")
                        return <Logbook />
                    }
                    else if(homeContent == HOME_CONTENT_QUICK_INFO){
                        console.log("HOME_CONTENT_QUICK_INFO")
                        return <QuickInfo />
                    }
                    else if(homeContent == HOME_CONTENT_VEHICLE_STATUS){
                        console.log("HOME_CONTENT_VEHICLE_STATUS")
                        return <VehicleInfo />
                    }
                    else if(homeContent == HOME_CONTENT_SMS_SETTINGS){
                        console.log("HOME_CONTENT_SMS_SETTINGS")
                        return <SmsSettings />
                    }
                })()}

            </div>
        </div>
    )

}
export default Home