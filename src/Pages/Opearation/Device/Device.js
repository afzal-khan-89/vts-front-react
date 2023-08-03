import React, { useState } from "react";
import "./device.css";
import DeviceList from "./DeviceList";
import CreateDevice from "./CreateDevice";

const Device = () => {

  const[pageContent, setPageContent] = useState(1)

  const CONTENT_DEVICE_LIST = 1
  const CONTENT_NEW_DEVICE=2

  const onClickCreateNewDevice=()=>{
    setPageContent(CONTENT_NEW_DEVICE)
  }
  const resFromCreateDEvice=()=>{
    setPageContent(CONTENT_DEVICE_LIST)
  }

  return (
     <div className="w-full h-full flex justify-center bg-gray-100">
      <div className="w-4/6 h-full px-6 bg-white">
        <div className="h-full px-6 mt-3 bg-gray-100 border border-gray-300 flex flex-col">
          <div>
              {(()=>{
                  if(pageContent == CONTENT_DEVICE_LIST) return <DeviceList cb={ onClickCreateNewDevice } />
                  else return <CreateDevice cb={resFromCreateDEvice}/>
              })()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Device;
