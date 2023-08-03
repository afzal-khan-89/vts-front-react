import React, { useState } from "react";
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
          <div className="mx-3 mt-3">
              {(()=>{
                  if(pageContent == CONTENT_VEHICLE_LIST) return <VehicleList cb={ onClickNewVehicle } />
                  else return <VehiceleCreate cb={resFromCreateVehicle}/>
              })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
