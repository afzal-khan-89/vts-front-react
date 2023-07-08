import React, { useState } from "react";

import logBookIcon from "../../img/pre-apps-imag/logbook.png";

import "./admin.css";
import Users from "./Users";
// import Manager from "./Manager";
// import Driver from "./Driver";
// import Profile from "./Profile";

const Admin = () => {
  const [homeContent, setHomeContent] = useState(2);

  const HOME_CONTENT_VEHICLE_STATUS = 2;
  const HOME_CONTENT_LOG_BOOK = 3;
  const HOME_CONTENT_SMS_SETTINGS = 4;
  const HOME_CONTENT_QUICK_INFO = 5;
  const HOME_CONTENT_DRIVER = 6;
  const HOME_CONTENT_MANAGER = 7;
  const HOME_CONTENT_PROFILE= 8;

  const onShowMapClick = () => {
    //setHomeContent(HOME_CONTENT_MAP)
  };
  const onVehicleInfoClick = () => {
    console.log("vehicle status clicked ... ");
    setHomeContent(HOME_CONTENT_VEHICLE_STATUS);
  };
  const onLogBookClick = () => {
    console.log("Logbook clicked ... ");
    setHomeContent(HOME_CONTENT_LOG_BOOK);
  };
  const onSmsSettingClick = () => {
    console.log("Sms settings clicked ... ");
    setHomeContent(HOME_CONTENT_SMS_SETTINGS);
  };
  const onQuickInfoClick = () => {
    console.log("Quick info clicked ... ");
    setHomeContent(HOME_CONTENT_QUICK_INFO);
  };
  const onManagerClick = () => {
    console.log("Quick info clicked ... ");
    setHomeContent(HOME_CONTENT_MANAGER);
  };
  const onDriverClick = () => {
    console.log("Quick info clicked ... ");
    setHomeContent(HOME_CONTENT_DRIVER);
  };
  const onProfileClick = () => {
    console.log("Quick info clicked ... ");
    setHomeContent(HOME_CONTENT_PROFILE);
  };

  return (
    <div className="home-container flex  justify-center bg-gray-100">
      <div className="w-3/5 h-full flex flex-col items-center bg-white">
        <div className="h-8 w-full px-10 mt-5 flex items-end ">
          <div className="h-8 w-48 flex justify-start items-center bg-yellow-200">
            <span className="ml-2 text-green-800">Admin</span>
          </div>
        </div>
        <div className="h-24 w-full px-10 flex items-end ">
          <div className="h-24 w-full px-10 flex items-end justify-between border border-gray-300 bg-gray-100">
            <div className="w-4/5 h-8 flex gap-1">
              <button
                class="flex-1 bg-warmGray-200 text-sm text-green-600 hover:bg-warmGray-300 hover:red-500  px-1  py-1 
                                        outline-none focus:shadow-outline"
                onClick={() => {
                  onVehicleInfoClick();
                }}
              >
                User
              </button>
              <button
                class="flex-1 bg-warmGray-200 text-sm  text-green-600 hover:bg-warmGray-300 hover:red-500  px-2 py-2  outline-none focus:shadow-outline"
                onClick={() => {
                  onLogBookClick();
                }}
              >
                Log Book
              </button>
              <button
                class="flex-1 bg-warmGray-200 text-sm  text-green-600 hover:bg-warmGray-300 hover:red-500  px-4  py-2  outline-none focus:shadow-outline"
                onClick={() => {
                  onSmsSettingClick();
                }}
              >
                Sms{" "}
              </button>
              <button
                class="flex-1 bg-warmGray-200 text-sm  text-green-600 hover:bg-warmGray-300 hover:red-500  px-4  py-2  outline-none focus:shadow-outline"
                onClick={() => {
                  onQuickInfoClick();
                }}
              >
                Quick Info
              </button>
              <button
                class="flex-1 bg-warmGray-200 text-sm  text-green-600 hover:bg-warmGray-300 hover:red-500  px-4  py-2   outline-none focus:shadow-outline"
                onClick={() => {
                  onManagerClick();
                }}
              >
                Manager
              </button>
              <button
                class="flex-1 bg-warmGray-200 text-sm  text-green-600 hover:bg-warmGray-300 hover:red-500  px-4  py-2   outline-none focus:shadow-outline"
                onClick={() => {
                  onDriverClick()
                }}
              >
                Driver
              </button>
            </div>
            <div className="w-1/5 h-8 flex justify-end">
              <button
                class="bg-warmGray-200 text-sm  text-green-600 hover:bg-warmGray-300 hover:red-500  px-4  py-2   outline-none focus:shadow-outline"
                onClick={() => {
                  onProfileClick();
                }}
              >
                Profile
              </button>
            </div>
          </div>
        </div>
        <div className="table-height w-full">
          {(() => {
            console.log("CHECK ");
            if (homeContent == HOME_CONTENT_VEHICLE_STATUS) {
              console.log("HOME_CONTENT_VEHICLE_STATUS");
              return <Users />;
            }
          })()}
        </div>
      </div>
    </div>
  );
};
export default Admin;
