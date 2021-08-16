import React, { useState } from 'react'
import axios from 'axios'


const NewVehicle = ()=>{
    const [vehicleaModel, SetvehicleaModel] = useState('')
    const [engineNo, SetengineNo] = useState('')
    const [chassisNo, SetchassisNo] = useState('')
    const [numberPlate, SetnumberPlate] = useState('')
    const [vehicleCode, SetvehicleCode] = useState('')
    const [vehicleType, SetvehicleType] = useState('')
    const [vehicleOwner, SetvehicleOwner] = useState('')
    const [isActive, SetisActive] = useState('')

    const onFormSubmit=(e)=>{
        console.log(vehicleaModel)
        console.log(engineNo)
        console.log(chassisNo)
        console.log(numberPlate)
        console.log(vehicleCode)
        console.log(vehicleType)
        console.log(vehicleOwner)
        console.log(isActive)
       console.log('on form sublic ')
       console.log(e.name)
       axios.post('http://localhost:8080/spring/api/asset/create', {
  
            number_plate: numberPlate,
            type: vehicleType,
            owner: 'babu'
        
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })

       e.preventDefault();
    }
    const onChangeVehicleModel=(e)=>{
        SetvehicleaModel(e.target.value)
    }
    const onChangeEngineNo=(e)=>{
        SetengineNo(e.target.value)
    }
    const onChangeChassiseNo=(e)=>{
        SetchassisNo(e.target.value)
    }
    const onChangeNumberPlate=(e)=>{
        SetnumberPlate(e.target.value)
    }
    const onChangeVehicleCode=(e)=>{
        SetvehicleCode(e.target.value)
    }
    const onChangeVehicleType=(e)=>{
        SetvehicleType(e.target.value)
    }
    const onChangeOwner=(e)=>{
        SetvehicleOwner(e.target.value)
    }
    const onChangeIsActive=(e)=>{
        console.log('is active or inactive ')
        SetisActive(e.target.value)
    }



    return(
        <div className="font-mono">
            <h3 class="p-8 text-2xl text-center">Create  Vehicle</h3>
            <form class="mx-48 p-8 bg-white rounded" onSubmit={onFormSubmit}>
                <div class="flex  gap-6 md:flex md:justify-between  mb-4 ">
                    <div class="flex-1 md:mr-2 md:mb-0">
                        <label class="block mb-1 text-sm font-bold text-gray-700" for="firstName">
                            Vehicle Model 
                        </label>
                        <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="vehicle_model" type="text" onChange={onChangeVehicleModel} />
                    </div>
                    <div class="flex-1 md:ml-2">
                        <label class="block mb-1 text-sm font-bold text-gray-700" for="lastName">
                            Engine No
                        </label>
                         <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="engine no" type="text"  onChange={ onChangeEngineNo } />
                    </div>
                    <div class="flex-1 md:ml-2">
                        <label class="block mb-1 text-sm font-bold text-gray-700" for="lastName">
                            Chassis No
                        </label>
                         <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="chassis_no" type="text" onChange={ onChangeChassiseNo } />
                    </div>
                </div>    
                <div class="flex  gap-6 mb-4 md:flex md:justify-between mb-4">
                    <div class="flex-1 mb-4 md:mr-2 md:mb-0">
                        <label class="block mb-1 text-sm font-bold text-gray-700" for="firstName">
                            Number Plate 
                        </label>
                        <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="number_plate" type="text" onChange={ onChangeNumberPlate } />
                    </div>
                    <div class="flex-1 md:ml-2">
                        <label class="block mb-1 text-sm font-bold text-gray-700" for="lastName">
                            Vehicle Code
                        </label>
                         <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="vehicle_code" type="text" placeholder="Last Name" onChange={ onChangeVehicleCode } />
                    </div>
                    <div class="flex-1 md:ml-2">
                        <label class="block mb-1 text-sm font-bold text-gray-700" for="lastName">
                            Vehicle Type
                        </label>
                         <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="lastName" type="text" placeholder="Last Name" onChange={onChangeVehicleType}/>
                    </div>
                </div>     
                <div class="flex mb-4 md:flex ">
                    <div class="w-1/3 mb-4 md:mr-2 md:mb-0">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                        Vehicle Owner
                        </label>
                        <select className="w-full bg-white border border-gray-400 focus:outline-none p-2 rounded cursor-pointer text-gray-800 focus:ring-2 focus:ring-purple-600"
                                name="vehicle_owner" id="vehicle_owner" onChange={ onChangeOwner }>                  
                            <option value="babu">babu</option>
                            <option value="aro">aro</option>
                            <option value="zaman">zaman</option>
                        </select>
                    </div>
                    <div class="w-1/3 md:ml-2">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                            Active? 
                        </label>
                        <select className="w-full bg-white border border-gray-400 focus:outline-none p-2 rounded cursor-pointer text-gray-800 focus:ring-2 focus:ring-purple-600"
                                name="vehicle_owner" id="vehicle_owner" onChange={ onChangeIsActive }>                  
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>   
                <div class="flex mb-4 md:flex ">
                    <input type="submit" value="Submit" />
                </div>                 
            </form>
        </div>
    )
}

export default NewVehicle