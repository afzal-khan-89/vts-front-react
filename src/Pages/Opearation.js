import React, { Component } from 'react'
import NewDevice from '../Components/Opeartiaon/NewDevice'
import NewVehicle from '../Components/Opeartiaon/NewVehicle'

const Opearation=()=>{
    //<NewVehicle />
    return(
        <div className="fixed w-full h-screen flex">
            <div className="w-1/4 bg-gray-400">

            </div>
            <div className="w-3/4 flex flex-col bg-gray-100">
                <NewDevice /> 
 
            </div>
        </div>
 
    )
}
export default Opearation