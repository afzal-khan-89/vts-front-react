import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./vehicle.css";

import editButton from "../../../img/pre-apps-imag/edit.png";
import deleteButton from "../../../img/pre-apps-imag/delete.png";



const VehicleList=()=> {
  const[Vehicles, SetVehicles] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/spring/api/asset/all')
      .then(function (response) {
          let tempData=[]
          console.log(response);
          SetVehicles(response.data)
      })
      .catch(function (error) {
          console.log(error);
      })

  }, [])

  const onDealerChange = ()=>{

  }
  const onUserChange=()=>{

  }
  const onGroupChante=()=>{

  }

  return (
    <div className=" border border-gray-300 flex flex-col gap-3">
        <div className="w-1/2 h-12 px-3 pt-3 mb-8 flex justify-start gap-3">
            <div className="flex-1 flex flex-col">
                <span className=" text-xs  text-green-700">Dealer</span>
                <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                    name="user_type" id="user_type" onChange={ onDealerChange }>
                    <option value="Car">All</option>
                </select>
            </div>
            <div className="flex-1 flex flex-col">
                <span className=" text-xs  text-green-700">User</span>
                <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                    name="user_type" id="user_type" onChange={ onUserChange }>
                    <option value="Car">All</option>
                </select>
            </div>
            <div className="flex-1 flex flex-col">
                <span className=" text-xs  text-green-700">Group</span>
                <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                    name="user_type" id="user_type" onChange={ onGroupChante }>
                    <option value="Car">All</option>
                </select>
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
                                    Number Plate
                                </th>
                                <th class="w-2/12 p-0.5 border-r cursor-pointer text-sm text-gray-600">
                                    Type
                                </th>
                                <th class="w-3/12 p-0.5 border-r cursor-pointer text-sm text-gray-600">
                                     Owner
                                </th>
                                <th class="w-1/12 p-0.5 border-r cursor-pointer text-sm text-sm text-gray-600">
                                     Status
                                </th>
                                <th class="w-4/12 p-0.5 border-r cursor-pointer text-sm text-sm text-gray-600">
                                     Installed Device
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
                            {Vehicles.map((vehicle, index) => (
                                <tr className="h-8 bg-gray-100 text-center border-b text-sm text-gray-600">
                                    <td class="border-r">{index}</td>
                                    <td className=" border-r">{vehicle.number_plate}</td>
                                    <td class=" border-r">{ vehicle.type } </td>
                                    <td class=" border-r">{ vehicle.type}</td>
                                    <td class=" border-r">{ index }</td>
                                    <td class=" border-r">{ index }</td>
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
export default VehicleList;
