import React, { useState } from "react";
import Logbook from "./Logbook";
import QuickInfo from "./QuickInfo";
import SmsSettings from "./SmsSettings";
import VehicleInfo from "./VehicleInfo";
import logBookIcon from "../../img/pre-apps-imag/logbook.png";

import "./home.css";
import Manager from "./Manager";
import Driver from "./Driver";
import Profile from "./Profile";

const Home = () => {
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
            <span className="ml-2 text-green-800">Dash Board</span>
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
                Vehicle Info
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
              return <VehicleInfo />;
            }
            if (homeContent == HOME_CONTENT_LOG_BOOK) {
              console.log("HOME_CONTENT_LOG_BOOK");
              return <Logbook />;
            } else if (homeContent == HOME_CONTENT_QUICK_INFO) {
              console.log("HOME_CONTENT_QUICK_INFO");
              return <QuickInfo />;
            } else if (homeContent == HOME_CONTENT_SMS_SETTINGS) {
              console.log("HOME_CONTENT_SMS_SETTINGS");
              return <SmsSettings />;
            }
            else if (homeContent == HOME_CONTENT_MANAGER) {
              console.log("HOME_CONTENT_SMS_SETTINGS");
              return <Manager />;
            }
            else if (homeContent == HOME_CONTENT_DRIVER) {
              console.log("HOME_CONTENT_SMS_SETTINGS");
              return <Driver />;
            }
            else if (homeContent == HOME_CONTENT_PROFILE) {
              console.log("HOME_CONTENT_SMS_SETTINGS");
              return <Profile />;
            }
          })()}
        </div>
      </div>

      {/* 
                <div className="h-24 mx-72 mt-2 bg-white flex flex-col">

                <div className="h-2/3 flex  items-end border border-gray-100">
                    <div className="flex gap-1">
                        <div className="h-2/3 ">
                            <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-2  
                                outline-none focus:shadow-outline" onClick={()=>{onVehicleInfoClick('monitor')}}>Vehicle Info</button>
                        </div>
                        <div className="h-2/3 ">
                            <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-2  outline-none focus:shadow-outline"
                                onClick={()=>{onLogBookClick('monitor')}}>Log Book</button>
                        </div>
                        <div className="h-2/3 ">
                            <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-2  outline-none focus:shadow-outline"
                                onClick={()=>{onSmsSettingClick('monitor')}}>Sms Settings</button>
                        </div>
                        <div className="h-2/3 ">
                            <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-2  outline-none focus:shadow-outline"
                                onClick={()=>{onQuickInfoClick('monitor')}}>Quick Info</button>
                        </div>
                        <div className="h-2/3 ">
                            <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-2   outline-none focus:shadow-outline"
                                onClick={()=>{onManageVehicleClick('monitor')}}>Manage</button>
                        </div>
                    </div>
                    <div className="flex flex-grow justify-end mr-2">
                        <div className="h-16 w-16  bg-cover" style={{ background: `url(${logBookIcon})`}} >
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex pl-72">
                    {(()=>{
                        console.log("CHECK ")
                        if(homeContent == HOME_CONTENT_VEHICLE_STATUS){
                            console.log("HOME_CONTENT_VEHICLE_STATUS")
                            return <VehicleInfo />
                        }
                        if(homeContent == HOME_CONTENT_LOG_BOOK){
                            console.log("HOME_CONTENT_LOG_BOOK")
                            return <Logbook />
                        }
                        else if(homeContent == HOME_CONTENT_QUICK_INFO){
                            console.log("HOME_CONTENT_QUICK_INFO")
                            return <QuickInfo />
                        }
                        else if(homeContent == HOME_CONTENT_SMS_SETTINGS){
                            console.log("HOME_CONTENT_SMS_SETTINGS")
                            return <SmsSettings />
                        }
                    })()}
            </div> */}
      {/* <div className="leaflet-container flex pl-80">
                <div className="h-3/5  w-28 flex flex-col items-end mt-36 border-r-4 border-green-500 gap-3" >
                    <div className="w-full h-24 flex flex-col justify-end items-center" onClick={ onVehicleStatusClick }>
                        <div className="h-16 w-16  bg-cover" style={{ background: `url(${vehicleInfoIcon})`}} >
                        
                        </div>
                        <div className="h-1/5 w-full bg-green-500 flex justify-center items-center">
                            <span>Vehicle Info</span>
                        </div>
                    </div>
                    <div className="w-full h-24 flex flex-col justify-end items-center" onClick={ onLogBookClick }>
                        <div className=" h-16 w-16  bg-contain" style={{ background: `url(${logBookIcon})`}} >
                        
                        </div>
                        <div className="h-1/5 w-full bg-green-500 flex justify-center items-center">
                            <span>Logbook</span>
                        </div>
                    </div>
                    <div className="w-full h-24 flex flex-col justify-end items-center" onClick={ onSmsSettingClick }>
                        <div className="w-full h-24  bg-no-repeat bg-center" style={{ background: `url(${smsIcon})`}} >
                        
                        </div>
                        <div className="h-1/5 w-full bg-green-500 flex justify-center items-center">
                            <span>SMS Settings</span>
                        </div>
                    </div>
                    <div className="w-full h-24 flex flex-col justify-end items-center" onClick={ onQuickInfoClick }>
                        <div className=" h-16 w-16  bg-cover" style={{ background: `url(${mapIcon})`}} >
                        
                        </div>
                        <div className="h-1/5 w-full bg-green-500 flex justify-center items-center">
                            <span>Quick Info</span>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
};
export default Home;
