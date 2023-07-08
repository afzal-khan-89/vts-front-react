import React, { useState } from "react";
import InstallList from "./InstallList";
import NewInstall from "./NewInstall";

import "./install.css";

const Install = () => {

  const[pageContent, setPageContent] = useState(1)

  const CONTENT_DEVICE_LIST = 1
  const CONTENT_NEW_DEVICE=2

  const onClickNewInstall=()=>{
    setPageContent(CONTENT_NEW_DEVICE)
  }
  const resFromNewInstall=()=>{
    setPageContent(CONTENT_DEVICE_LIST)
  }

  return (
     <div className="w-full h-full flex justify-center bg-gray-100">
      <div className="w-4/6 h-full px-6 bg-white">
        <div className="h-full px-6 mt-3 bg-gray-100 border border-gray-300 flex flex-col">
          <div>
              {(()=>{
                  if(pageContent == CONTENT_DEVICE_LIST) return <InstallList cb={ onClickNewInstall } />
                  else return <NewInstall cb={ resFromNewInstall }/>
              })()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Install