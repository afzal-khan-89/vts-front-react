import React, { useState } from "react";
import "./opearation.css";
import changeButton from "../../img/pre-apps-imag/edit.png";
import DeviceList from "./DeviceList";
import CreateDevice from "./CreateDevice";

const Device = () => {

  const[pageContent, setPageContent] = useState(1)

  const CONTENT_DEVICE_LIST = 1
  const CONTENT_NEW_DEVICE=2

  const onClickCreateNewDevice=()=>{
    
  }
  const resFromCreateDEvice=()=>{

  }

  
  return (
     <div className="w-full h-full flex justify-center bg-gray-100">
      <div className="w-4/6 h-full px-6 bg-white">
        <div className="h-full px-6 mt-3 bg-gray-100 border border-gray-300 flex flex-col">
          <div className="h-20 mt-0 mx-6 flex justify-end items-start">
            <button className="h-10 w-44 bg-yellow-400 text-sm text-white rounded-bl-md rounded-br-md" 
                                onClick={ onClickCreateNewDevice }>Create Device </button>
          </div>
          <div className="mx-3 border border-gray-200">
              {(()=>{
                  if(pageContent == CONTENT_DEVICE_LIST) return <DeviceList />
                  else return <CreateDevice cb={resFromCreateDEvice}/>
              })()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Device;
