import React, { useState } from 'react'
import NewDevice from '../Components/Opeartiaon/NewDevice'
import NewVehicle from '../Components/Opeartiaon/NewVehicle'
import LeftMenu from '../Components/Opeartiaon/LeftMenu'
import InstallDevice from '../Components/Opeartiaon/InstallDevice'

const Opearation=()=>{

    const [content, setContent]=useState('device')

    const onContentSelect=(value)=>{
        setContent(value)
    }
    const pageContent=()=>{
        if(content.includes('device'))  return <NewDevice /> 
        if(content.includes('vehicle')) return <NewVehicle /> 
        if(content.includes('install')) return <InstallDevice /> 
    }
    return(
        <div className="fixed w-full h-screen flex">
            <div className="w-1/4">
                <LeftMenu cb={onContentSelect}/>
            </div>
            <div className="w-3/4 flex flex-col bg-gray-100">
                {pageContent()}
            </div>
        </div>
 
    )
}
export default Opearation