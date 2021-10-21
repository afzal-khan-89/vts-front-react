import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./opearation.css";

import editButton from "../../img/pre-apps-imag/edit.png";
import deleteButton from "../../img/pre-apps-imag/delete.png";



const DeviceList=(props)=> {

  const[Devices, SetDevices] = useState([])
  const[newUserToCreate, setNewUserToCreate] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:8080/spring/api/device/all')
      .then(function (response) {
          let tempData=[]
          console.log(response);
          SetDevices(response.data)
      })
      .catch(function (error) {
          console.log(error);
      })

  }, [])

  return (
   
      
            <div className=" border border-gray-300 flex flex-col">
                <div className="">

                </div>
               
                    <table className="w-full h-full table-fixed">
                        <thead>
                            <tr className="h-8 bg-green-400 border-b">
                                <th className="w-1/12 p-0.5  border-r cursor-pointer text-sm text-gray-600">
                                    #sl
                                </th>
                                <th class="w-3/12  p-0.5 border-r cursor-pointer text-sm text-gray-600">
                                    Imei
                                </th>
                                <th class="w-3/12 p-0.5 border-r cursor-pointer text-sm text-gray-600">
                                    Origin
                                </th>
                                <th class="w-3/12 p-0.5 border-r cursor-pointer text-sm text-gray-600">
                                     Model
                                </th>
                                <th class="w-2/12 p-0.5 border-r cursor-pointer text-sm text-sm text-gray-600">
                                     Action
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
                            </tr>
                            {Devices.map((device) => (
                                <tr className="h-8 bg-gray-100 text-center border-b text-sm text-gray-600">
                                    <td class="border-r">{1}</td>
                                    <td className=" border-r">{device.imei}</td>
                                    <td class=" border-r">{ device.origin } </td>
                                    <td class=" border-r">{ device.model}</td>
                                    <td class=" border-r">
                                        <div className="flex justify-center gap-2">
                                            <button className="p-0 w-3 h-3" style={{ background: `url(${editButton})` }}></button>
                                            <button className="p-0 w-3 h-3" style={{ background: `url(${deleteButton})` }}></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
          

  );
}
export default DeviceList;
