import React, { useState } from "react";
import "./reports.css";
import changeButton from "../../img/pre-apps-imag/edit.png";

const RawDataReport=()=> {
  let tArray = [];
  for (var i = 0; i < 100; i++) {
    tArray.push("" + i);
  }

  console.log("TEST ARRAY LENGTH " + tArray.length);
  return (
    <div className="flex justify-center bg-gray-100 overflow-y-auto">
      <div className="w-3/5 h-full bg-white">
        <div className = "mx-6 my-3 flex flex-col border border-gray-300 bg-gray-50">
          <div className="ml-4 mb-4 flex ">
              <div className = "w-1/2 test flex flex-col p-2">
                  <div className = " border-b border-gray-300  py-1.5 text-gray-600">
                    <span >GEON Technologies Ltd.</span>
                  </div>
                  <div className = "border-b border-gray-300 p-2 text-xs text-gray-500 bg-gray-100">
                    <span>Report Title 	: Raw Data Report</span>
                  </div>
                  <div className = "border-b border-gray-300 p-2 text-xs text-gray-500">
                    <span>Vehicle 	: DHK-MT-CHA-56-1153</span>
                  </div>
                  <div className = "border-b border-gray-300 p-2 text-xs text-gray-500 bg-gray-100">
                    <span>Owner 	: AKHTAR GROUP (akhtar_group)</span>
                  </div>
                  <div className = "border-b border-gray-300 p-2 text-xs text-gray-500">
                    <span>Report Time 	: "Aug 12, 2021 01:00:00 PM" To "Aug 12, 2021 01:45:48 PM"</span>
                  </div>
                  <div className = "border-b border-gray-300 p-2 text-xs text-gray-500 bg-gray-100">
                    <span>Report Date 	: Aug 12, 2021</span>
                </div>        
              </div>
               <div className="w-1/2 ml-16 mr-6 h-8 flex justify-end gap-1">
                  <button class="flex-1 bg-warmGray-200 text-sm text-green-600 hover:bg-warmGray-300 hover:red-500  px-1  py-1 outline-none focus:shadow-outline"
                    >
                      Save as Pdf
                  </button>
                   <button class="flex-1 bg-warmGray-200 text-sm text-green-600 hover:bg-warmGray-300 hover:red-500  px-1  py-1 outline-none focus:shadow-outline"
                    >
                      Save as word
                  </button>
                  <button class="flex-1 bg-warmGray-200 text-sm text-green-600 hover:bg-warmGray-300 hover:red-500  px-1  py-1 outline-none focus:shadow-outline"
                    >
                      Print Report
                  </button>
              </div>
          </div>
          <div className="mx-6 mb-5 border ">
            <table class="w-full border text-xs">
              <thead>
                <tr class="bg-gray-50 border-b">
                    <th class="p-2 border-r cursor-pointer  text-gray-600">
                        <div class="flex items-center justify-center">
                          ID
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-gray-600">
                        <div class="flex items-center justify-center">
                            Time
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer  text-gray-600">
                            <div class="flex items-center justify-center">
                                 Status
                            </div>
                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Lat:Lon
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Speed
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm  text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Eng
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Ac
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Fuel
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Temperature
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Action
                                        </div>
                                    </th>
                                </tr>
                            </thead>
          <tbody>
            {tArray.map((item) => (
              <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                <td class="p-2 border-r">{item}</td>
                <td className=" border-r">Aug 12, 2021 01:45:48 PM</td>
                <td className=" border-r">A</td>
                <td className=" border-r">2222222222222222</td>
                <td className=" border-r">32</td>
                <td className=" border-r">on</td>
                <td className=" border-r">1</td>
                <td className=" border-r">12</td>
                <td className=" border-r">1234</td>
                <td className=" border-r">DEl</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
      </div>
      
    </div>
  );
}
export default RawDataReport