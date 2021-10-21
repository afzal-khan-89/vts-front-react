import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./vehicle.css";


const VehiceleCreate=(props)=> {

    const [vehicleaModel, SetvehicleaModel] = useState('')
    const [engineNo, SetengineNo] = useState('')
    const [chassisNo, SetchassisNo] = useState('')
    const [numberPlate, SetnumberPlate] = useState('')
    const [vehicleCode, SetvehicleCode] = useState('')
    const [vehicleType, SetvehicleType] = useState('')
    const [vehicleOwner, SetvehicleOwner] = useState('')
    const [isActive, SetisActive] = useState('')

    const [users, setUsers] = useState([])

    useEffect(()=>{
        var itemList=[];
        axios.get('http://localhost:8080/spring/api/user/all').then(function(response){
            response.data.map(item=>{
                itemList.push(item.user_name)
            })
            console.log(response)
            console.log(itemList)
            setUsers(itemList)
            //setUsers(response.data)
        }).catch(()=>{
            console.log('akash vora tara ... hoga mara shara ...')
        })

    }, [])


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
            owner: vehicleOwner
        
      })
      .then(function (response) {
        console.log(response);
        props.cb()
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

  return (
    <div className="w-full h-full  flex justify-center bg-gray-100">
        <form className="w-full px-6 py-3 h-auto flex flex-col gap-y-4 border border-gray-300 bg-gray-50" onSubmit={onFormSubmit}>
            <div className="flex justify-center gap-6">            
              <div className="flex-1 flex flex-col">
                    <label className="text-xs  text-green-700">Vehicle Model</label>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onChangeVehicleModel }/>
              </div>
              <div className="flex-1 flex flex-col">
                    <span className="text-xs  text-green-700">Engine No </span>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onChangeEngineNo }/>
              </div>
              <div className="flex-1 flex flex-col">
                    <span className=" text-xs t text-green-700">Chassis No</span>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onChangeChassiseNo }/>
              </div>
            </div>
            <div className="flex justify-center gap-6">      
                <div className="flex-1 flex flex-col">
                    <label className="text-xs text-green-700">Number Plate</label>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onChangeNumberPlate }/>
                </div>
                <div className="flex-1 flex flex-col">
                    <span className="text-xs  text-green-700">Vehicle Code</span>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onChangeVehicleCode }/>
                </div>
                  <div className="flex-1 flex flex-col">
                    <span className=" text-xs  text-green-700">Vehicle Type</span>
                    <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                            name="user_type" id="user_type" onChange={ onChangeVehicleType }>
                            <option value="Car">Car</option>
                            <option value="Track">Track</option>
                            <option value="Byke">Byke</option>
                     </select>
                </div>
            </div>
            <div className="flex justify-center gap-6">  
                <div className="flex-1 flex flex-col">
                    <span className="text-xs text-green-700">Vehicle Owner</span>
                    <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                        name="user_type" id="user_type" onChange={ onChangeOwner }>
                        {users.map((user, index)=>(
                            <option key={index} value={user}>{user}</option>
                        ))}    
                     </select>
                </div>
                <div className="flex-1 flex flex-col">
                    <span className="text-xs text-green-700"> Active? </span>
                    <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                            name="user_type" id="user_type" onChange={ onChangeIsActive }>
                            <option value="general_report">Yes</option>
                            <option value="graph_report">No</option>
                     </select>
                </div>         
            </div>
            <div className="flex justify-end gap-6"> 
                <button className="p-2 w-32  h-8 text-sm text-white bg-yellow-400 rounded-md" onClick={()=>(props.cb())}>Cancel</button>
                <input className="w-32  h-8 text-sm text-green-800 bg-yellow-400 rounded-md" type="submit" value="Submit" />
            </div>
        </form>      
    </div>
  );
}
export default VehiceleCreate;
