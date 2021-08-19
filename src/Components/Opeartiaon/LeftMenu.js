import React, { useState } from 'react'
import {Collapse} from 'react-collapse';


const LeftMenu = ({cb})=>{

    const [activeCollapse, setActiveCollapse] = useState(false)

    const onDeviceClicke=()=>{
        cb('device')
    }
    const onVehicleClick=()=>{
        cb('vehicle')
    }
    const onInstallClick=()=>{
        cb('install-new')
    }
    const onInstallLogClick=()=>{
        cb('install-log')
    }
  
    return(
        <div className="flex flex-col bg-white p-8">
            <div>
                <button className="w-full bg-green-200 mb-4" onClick={ onDeviceClicke}> Device </button>
            </div>
            <div>
                <button className="w-full bg-green-200 mb-4" onClick={ onVehicleClick}> Vehicle </button>
            </div>
            <div>
                <div className = 'flex-1'>
                <button className="w-full bg-yellow-200"  onClick={()=>{ setActiveCollapse(!activeCollapse) }}> Install </button>
                </div>
                <Collapse isOpened={activeCollapse}>
                    <div>
                    <button className="w-full bg-red-200" onClick={ onInstallClick}> Install new </button>
                    <button className="w-full bg-red-200" onClick={ onInstallLogClick}> Install logs</button>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}
export default LeftMenu