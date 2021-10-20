import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./opearation.css";

import editButton from "../../img/pre-apps-imag/edit.png";
import deleteButton from "../../img/pre-apps-imag/delete.png";
import NewUser from "./NewUser";


const UsersLists=()=> {

  const[users, setUsers] = useState([])
  const[newUserToCreate, setNewUserToCreate] = useState(0)

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

  return (
     <div className="w-full h-full border border-gray-200">
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
                {users.map((user) => (
                  <tr className="h-8 bg-gray-100 text-center border-b text-sm text-gray-600">
                      <td class="border-r">{1}</td>
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
  );
}
export default UsersLists;
