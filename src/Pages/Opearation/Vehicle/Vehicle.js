import React, { useState } from "react";
import CreateDevice from "../CreateDevice";
import VehicleList from "./VehicleList";

import "./vehicle.css";
import VehiceleCreate from "./VehicleCreate";

const Vehicles = () => {

  const[pageContent, setPageContent] = useState(1)

  const CONTENT_VEHICLE_LIST = 1
  const CONTENT_NEW_VEHICLE=2

  const onClickNewVehicle=()=>{
    setPageContent(CONTENT_NEW_VEHICLE)
  }
  const resFromCreateVehicle=()=>{
    setPageContent(CONTENT_VEHICLE_LIST)
  }

  
  return (
     <div className="w-full h-full flex justify-center bg-gray-100">
      <div className="w-4/6 h-full px-6 bg-white">
        <div className="h-full px-6 mt-3 bg-gray-100 border border-gray-300 flex flex-col">
          <div className="h-10 mt-0 mx-6 flex justify-end items-start">
            <button className="h-10 w-44 bg-yellow-400 text-sm text-white rounded-bl-md rounded-br-md" 
                                onClick={ onClickNewVehicle }>Create Vehicle </button>
          </div>
          <div className="mx-3 mt-3">
              {(()=>{
                  if(pageContent == CONTENT_VEHICLE_LIST) return <VehicleList />
                  else return <VehiceleCreate cb={resFromCreateVehicle}/>
              })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
