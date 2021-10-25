import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./user.css";

import editButton from "../../../img/pre-apps-imag/edit.png";
import deleteButton from "../../../img/pre-apps-imag/delete.png";



const UsersLists=(props)=> {
  const[users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/spring/api/user/all')
      .then(function (response) {
          let tempData=[]
          console.log(response);
          setUsers(response.data)
      })
      .catch(function (error) {
          console.log(error);
      })

  }, [])
  const onUserStatusChange=()=>{

  }
  const createNewUser=()=>{
    props.cb()
  }
  return (
    <div className="mx-4 my-6 border border-gray-300 flex flex-col">
        <div className="w-full h-12 px-3 pt-3 mb-10 flex justify-between">
            <div className="w-18 flex flex-col">
                <span className="ml-1 text-xs  text-green-700">Status</span>
                <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                    name="user_type" id="user_type" onChange={ onUserStatusChange }>
                    <option value="Car">All</option>
                    <option value="Car">Active</option>
                    <option value="Car">Inactive</option>
                </select>
            </div>
            <div className="h-20  flex justify-end items-start">
              <button className="w-40 p-2 rounded text-sm text-gray-50 transition duration-500 ease-in-out bg-green-500 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 " onClick={ createNewUser }>Create New User </button>
            </div>
        </div>
        <div>
           <table className="w-full h-full table-fixed">
                      <thead>
                <tr className="h-8 bg-green-400 border-b">
                  <th className="w-1/12 p-0.5  border-r cursor-pointer text-sm text-gray-600">
                      #sl
                  </th>
                  <th class="w-2/12  p-0.5 border-r cursor-pointer text-sm text-gray-600">
                       Name
                  </th>
                  <th class="w-2/12 p-0.5 border-r cursor-pointer text-sm text-gray-600">
                      Type
                  </th>
                  <th class="w-2/12 p-0.5 border-r cursor-pointer text-sm text-gray-600">
                     Email
                  </th>
                  <th class="w-2/12 p-0.5 border-r cursor-pointer text-sm text-sm text-gray-600">
                     Address
                  </th>
                  <th class="w-2/12 p-0.5 border-r cursor-pointer text-sm text-sm text-gray-600">
                     Phone
                  </th>
                  <th class="w-1/12 p-0.5 border-r cursor-pointer text-sm text-sm text-gray-600">
                     Action
                  </th>
                </tr>
            </thead>
            <tbody className="overflow-y-scroll">
                <tr className = "h-10  bg-gray-150 border-b  text-center">
                  <td class=" p-0.5 border-r cursor-pointer text-sm text-gray-600"></td>
                  <td class="w-full h-full   text-sm text-gray-600">
                    <input className="w-full h-full p-1.5 border border-gray-300 bg-gray-100" type="text" class="border " />
                  </td>
                  <td class="p-2 border-r cursor-pointer text-sm text-gray-600">
                    <input className="w-full h-full p-1.5 border border-gray-300 bg-gray-100" type="text" class="border " />
                  </td>
                  <td class="p-2 border-r cursor-pointer text-sm text-gray-600">
                    <input className="w-full h-full p-1.5 border border-gray-300 bg-gray-100" type="text" class="border " />
                  </td>
                  <td class="p-2 border-r cursor-pointer text-sm text-gray-600">
                    <input className="w-full h-full p-1.5 border border-gray-300 bg-gray-100" type="text" class="border " />
                  </td>
                   <td class="p-2 border-r cursor-pointer text-sm text-gray-600">
                    <input className="w-full h-full p-1.5 border border-gray-300 bg-gray-100" type="text" class="border" />
                  </td>
                  <td class=" border-r cursor-pointer text-sm text-gray-600"></td>
                </tr>
                {users.map((user, index) => (
                  <tr className={`h-8 bg-gray-100 text-center border-b text-sm text-gray-600 ${index % 2 == 0 ? 'bg-gray-200' : 'bg-white' }`}>
                      <td class="border-r">{index+1}</td>
                      <td className=" border-r">{user.first_name}</td>
                      <td class=" border-r">{ user.type } </td>
                      <td class=" border-r">{ user.email}</td>
                      <td class=" border-r">{ user.address_line_three}</td>
                      <td class=" border-r">{ user.phone }</td>
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
  </div>
      
                
        



  );
}
export default UsersLists;
