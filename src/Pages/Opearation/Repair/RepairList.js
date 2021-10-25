import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./repair.css";

import editButton from "../../../img/pre-apps-imag/edit.png";
import deleteButton from "../../../img/pre-apps-imag/delete.png";



const RepairList=(props)=> {

    const[logData, setLogData] = useState([])
    let newTime='12-23-23'

    useEffect(() => {
        axios.get(`http://localhost:8080/spring/api/install-log/install/${newTime}`)
        .then(function (response) {
            let tempData=[]
            console.log(response);
            setLogData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

    }, [])

    const onDeviceStatusChange=()=>{

    }
    const repairVehicleDevice=()=>{
        props.cbFromRepairList()
    }
  return (
    <div className="mt-6 border border-gray-300 flex flex-col">
        <div className="w-full h-12 px-3 pt-3 mb-10 flex justify-between gap-3">
            <div className="w-24 flex flex-col">
                <span className="ml-1 text-xs  text-green-700">Status</span>
                <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                    name="user_type" id="user_type" onChange={ onDeviceStatusChange }>
                    <option value="Car">All</option>
                    <option value="Car">Installed</option>
                    <option value="Car">Uninstalled</option>
                </select>
            </div>
            <div className="h-20  flex justify-end items-start">
              <button className="w-40 p-2 rounded text-sm text-white bg-yellow-400 " onClick={ repairVehicleDevice }> New Repair </button>
            </div>
        </div>
        <div className="">
            </div>
                <table className="w-full h-full table-fixed">
                        <thead>
                            <tr className="h-8 bg-green-400 border-b">
                                <th className="w-1/12 p-0.5  border-r cursor-pointer text-sm text-gray-600">
                                    #sl
                                </th>
                                <th class="w-3/12  p-0.5 border-r cursor-pointer text-sm text-gray-600">
                                    Vehicle
                                </th>
                                <th class="w-3/12 p-0.5 border-r cursor-pointer text-sm text-gray-600">
                                    Device
                                </th>
                                <th class="w-3/12 p-0.5 border-r cursor-pointer text-sm text-gray-600">
                                    Install Date
                                </th>
                                <th class="w-2/12 p-0.5 border-r cursor-pointer text-sm text-sm text-gray-600">
                                    Technician
                                </th>
                                <th class="w-2/12 p-0.5 border-r cursor-pointer text-sm text-sm text-gray-600">
                                    Install-Place
                                </th>
                                <th class="w-2/12 p-0.5 border-r cursor-pointer text-sm text-sm text-gray-600">
                                    Opearator
                                </th>
                            </tr>
                        </thead>
                        <tbody className="overflow-y-scroll">
                            <tr className = "w-full h-10  bg-gray-150 border-b  text-center">
                                <td class="border-r    text-sm text-gray-600"></td>
                                <td class="border-r p-2 cursor-pointer text-sm text-gray-600">
                                    <input className="p-3 border border-gray-300 bg-gray-100" type="text" class="border " />
                                </td>
                                <td class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                    <input className="w-full h-full p-1.5 border border-gray-300 bg-gray-100" type="text" class="border " />
                                </td>
                                <td class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                    <input className="w-full h-full p-1.5 border border-gray-300 bg-gray-100" type="text" class="border" />
                                </td>
                                <td class=" border-r cursor-pointer text-sm text-gray-600"></td>
                                <td class=" border-r cursor-pointer text-sm text-gray-600"></td>
                            </tr>
                            {logData.map((log, index) => (
                                <tr className="h-8 bg-gray-100 text-center border-b text-sm text-gray-600">
                                    <td class="border-r">{index}</td>
                                    <td className=" border-r">{log.asset_id}</td>
                                    <td class=" border-r">{ log.device_id } </td>
                                    <td class=" border-r">{ log.date_time}</td>
                                    <td class=" border-r">{ log.technician}</td>
                                    <td class=" border-r">{ log.install_place}</td>
                                    <td class=" border-r">{ log.opearator}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
          

  );
}
export default RepairList;
