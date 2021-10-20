import React, { useState } from "react";

import logBookIcon from "../../img/pre-apps-imag/logbook.png";
import Device from "./Device";
import Install from "./Install";
import InstallLog from "./InstallLog";

import "./opearation.css";
import Repair from "./Repair";
import Users from "./Users";
import Vehicles from "./Vehicles";

// import Manager from "./Manager";
// import Driver from "./Driver";
// import Profile from "./Profile";

const Opearation = () => {
  const [opearationContent, setOpearationContent] = useState(0);

  const OPEARATION_USER = 0;
  const OPEARATION_DEVICE = 1;
  const OPEARATION_VEHICLE = 2;
  const OPEARATION_INSTALL = 3;
  const OPEARATION_REPAIR = 4;
  const OPEARATION_DEVICE_INSTALL_LOG = 5;
  const OPEARATION_VEHICLE_INSTALL_LOG = 6;

  const onUserClick = () => {
    setOpearationContent(OPEARATION_USER);
  };
  const onDeviceClick = () => {
    setOpearationContent(OPEARATION_DEVICE);
  };
  const onVehicleClick = () => {
    setOpearationContent(OPEARATION_VEHICLE);
  };
  const onInstallClick = () => {
    setOpearationContent(OPEARATION_INSTALL);
  };
  const onRepairClick = () => {
    setOpearationContent(OPEARATION_REPAIR);
  };
  const onDeviceLogClick = () => {
    setOpearationContent(OPEARATION_DEVICE_INSTALL_LOG);
  };
  const onVehicleInstallLogClick = () => {
    setOpearationContent(OPEARATION_VEHICLE_INSTALL_LOG);
  };

  return (
    <div className="opearation-container  bg-gray-100 flex flex-col items-center">
      <div className="w-4/6  h-32  px-6 pt-4   mt-14 flex flex-col bg-white">
        <div className="h-8 w-48  flex justify-start items-center bg-yellow-200">
          <span className="ml-2 text-green-800">Oparation</span>
        </div>
        <div className="w-full h-24 px-10 flex justify-between  border border-gray-300 bg-gray-100 ">
          <div className="w-3/4 h-full flex justify-start items-end gap-1">
            <button
              class="w-20 bg-warmGray-200 text-sm  text-green-600 hover:bg-warmGray-300 hover:red-500  px-2 py-2  outline-none focus:shadow-outline"
              onClick={onUserClick}
            >
              User
            </button>
            <button
              class="w-32 bg-warmGray-200 text-sm  text-green-600 hover:bg-warmGray-300 hover:red-500  px-2 py-2  outline-none focus:shadow-outline"
              onClick={onDeviceClick}
            >
              Device
            </button>
            <button
              class="w-32 bg-warmGray-200 text-sm  text-green-600 hover:bg-warmGray-300 hover:red-500  px-2 py-2  outline-none focus:shadow-outline"
              onClick={onVehicleClick}
            >
              Vehicle
            </button>
            <button
              class="w-32 bg-warmGray-200 text-sm  text-green-600 hover:bg-warmGray-300 hover:red-500  px-2 py-2  outline-none focus:shadow-outline"
              onClick={onInstallClick}
            >
              Install
            </button>
            <button
              class="w-32 bg-warmGray-200 text-sm  text-green-600 hover:bg-warmGray-300 hover:red-500  px-2 py-2  outline-none focus:shadow-outline"
              onClick={onRepairClick}
            >
              Repair
            </button>
          </div>
          <div className="w-1/4 h-full flex justify-end  items-end gap-1 ">
            <button
              class="w-32 bg-warmGray-200 text-sm  text-green-600 hover:bg-warmGray-300 hover:red-500  px-2 py-2  outline-none focus:shadow-outline"
              onClick={onDeviceLogClick}
            >
              Install-log
            </button>
          </div>
        </div>
      </div>
      <div className="h-full w-full ">
        {(() => {
          console.log("CHECK ");
          if (opearationContent == OPEARATION_DEVICE) {
            return <Device />;
          } else if (opearationContent == OPEARATION_USER) {
            return <Users />;
          } else if (opearationContent == OPEARATION_VEHICLE) {
            return <Vehicles />;
          }
          else if (opearationContent == OPEARATION_INSTALL) {
            return <Install />;
          }
          else if (opearationContent == OPEARATION_REPAIR) {
            return <Repair />;
          }
          else if (opearationContent == OPEARATION_DEVICE_INSTALL_LOG) {
            return <InstallLog />;
          }
        })()}
      </div>
    </div>
  );
};
export default Opearation;
