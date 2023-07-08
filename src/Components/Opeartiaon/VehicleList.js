import React, {useState, useEffect} from 'react'
import axios from 'axios';

const VehicleList = (props)=>{
    const [vehicles, setVehicles]=useState([]);

    useEffect(() => {
        getAllVehicles()
    }, [])

    const getAllVehicles=()=>{
        axios.get('http://localhost:8080/spring/api/asset/all').then(function (response) {
            console.log(response);
            setVehicles(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    const onClickNewVehicle=()=>{
        props.cBack('new_vehicle')
    }


    return(
        <div className = "flex flex-wrap p-8">
            <div className="w-full p-2 flex justify-end">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={ onClickNewVehicle }>New Vehicle</button>
            </div>
            <div className="table w-full p-1">
                <table className="w-full border">
                    <thead>
                         <tr className="bg-gray-100 border-b">
                            <th className="border-r cursor-pointer text-sm font-thin text-gray-800">
                                <div className="flex items-center justify-center">
                                    ID
                                </div>
                            </th>
                            <th className="border-r cursor-pointer text-sm  text-gray-800">
                                <div className="flex items-center justify-center">
                                    Number Plate
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm  text-gray-600">
                                <div class="flex items-center justify-center">
                                    Type
                                </div>
                            </th>
                            <th class="border-r cursor-pointer text-sm text-gray-600">
                                <div class="flex items-center justify-center">
                                    Owner
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm  text-gray-600">
                                <div class="flex items-center justify-center">
                                    Tracking Device
                                </div>
                            </th>
                            <th class=" border-r cursor-pointer text-sm  text-gray-600">
                                <div class="flex items-center justify-center">
                                    Action
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-gray-50 text-center">
                            <td class="p-2 border-r">
                        
                            </td>
                            <td class=" border-r">
                                 <input type="text" class="border p-1" />
                            </td>
                            <td class=" border-r">
                                <input type="text" class="border p-1" />
                            </td>
                            <td class="p-2 border-r">
                                <input type="text" class="border p-1" />
                            </td>
                            <td class="p-2 border-r">
                                <input type="text" class="border p-1" />
                            </td>                  
                        </tr>
                        {vehicles.map((item)=>(
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class=" border-r">1</td>
                                <td class=" border-r">{item.number_plate}</td>
                                <td class="p-2 border-r">{item.type}</td>
                                <td class="p-2 border-r">{item.owner}</td>
                                <td class="p-2 border-r">{item.trackingDevice}</td>
                                                        <td>
                                                            <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                                                            <a href="#" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</a>
                                                        </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VehicleList