import React, { useState } from "react";
import RepairList from "./RepairList";
import NewRepair from "./NewRepair";

import "./repair.css";

const Repair = () => {

  const[pageContent, setPageContent] = useState(1)

  const CONTENT_REPAIR_LIST = 1
  const CONTENT_NEW_REPAIR = 2

  const onShowRepairList=()=>{
    setPageContent(CONTENT_REPAIR_LIST)
  }
  const onClickNewRepair =()=>{
    setPageContent(CONTENT_NEW_REPAIR)
  }

  return (
     <div className="w-full h-full flex justify-center bg-gray-100">
      <div className="w-4/6 h-full px-6 bg-white">
        <div className="h-full px-6 mt-3 bg-gray-100 border border-gray-300 flex flex-col">
          <div>
              {(()=>{
                  if(pageContent == CONTENT_REPAIR_LIST) return <RepairList  cbFromRepairList={ onClickNewRepair }/>
                  else return <NewRepair cbFromNewRepair={ onShowRepairList }/>
              })()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Repair