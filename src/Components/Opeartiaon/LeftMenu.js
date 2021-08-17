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
        cb('install')
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
                <button className="w-full bg-yellow-200" onClick={ onInstallClick}> Install </button>
            </div>
            <div>
                <div className = 'flex-1'>
                    <h1 className="" onClick={()=>{ setActiveCollapse(!activeCollapse) }}> @@@@ </h1>
                </div>
                <Collapse isOpened={activeCollapse}>
                    <div>
                     
                    </div>
                </Collapse>
            </div>
        </div>
    )
}
export default LeftMenu