import React, { useState, useEffect } from "react";
import axios from "axios";
import "./repair.css";
import moment from "moment";

const dFormat = ()=>(moment(new Date()).format('YYYY-MM-DD hh:mm:ss'))

const NewRepair = (props) => {    
    
    const [imei, setImaei] = useState('')

    


    const [users, setUsers] = useState([])
    const [usersUnInstalledVehicle, setUsersUnInstalledVehicle] = useState([])
    const [allUnInstalledDevice, setAllUninstallDevice] = useState([])
    const [selectedUser, setSelectedUser] = useState('babu')
    const [vehicle, setVehicle] = useState('')
    const [device, seteDevice] = useState('')
    const [technician, setTechnician] = useState('uzzol')
    const [installPlace, setInstallPlace] = useState('')
    const [installDate, setInstallDate] = useState(dFormat)
    const [status, setStatus] = useState('REPAIR')
    const [oldDevice, setOldDevice] = useState('')

    useEffect(() => {
        let unInstallDevices = []
        axios.get('http://localhost:8080/spring/api/device/un-mapped/all').then(function (response) {
            console.log(response);
            response.data.map((item)=>{
                console.log('item value '+item.imei)
                unInstallDevices.push(item.imei)
            })
            setAllUninstallDevice(unInstallDevices)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])
    useEffect(() => {        
        let allUser = []
        axios.get('http://localhost:8080/spring/api/user/all').then(function (response) {
            console.log(response);
            response.data.map((item)=>{
                console.log('item value '+item.user_name)
                allUser.push(item.user_name)
            })
            setUsers(allUser)
        })
        .catch(function (error) {
            console.log(error);
        })

    }, [])

    useEffect(() => {        
        // let allUser = []
        // axios.get('http://localhost:8080/spring/api/technitian/all').then(function (response) {

        // })
        // .catch(function (error) {
        //     console.log(error);
        // })

    }, [])

    useEffect(() => {
        let deviceList = []
        axios.get(`http://localhost:8080/spring/api/asset-group/${selectedUser}/all`).then(function (response) {
            console.log(response.data.assets);
            console.log(response.data);
            response.data.map(item=>{
                console.log('it: '+item.groupName)
                item.assets.map(it=>{
                    console.log('asset'+ it.number_plate)
                    if(it.device===null){
                        deviceList.push(it.number_plate)
                    }
                })
            })
            setUsersUnInstalledVehicle(deviceList)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [selectedUser])
    const onFormSubmit=(e)=>{
        console.log('asset_id : ' + vehicle);
        console.log('device_id : ' + device);
        console.log('date_time : ' + installDate);
        console.log('technician : ' + technician);
        console.log('install_place : ' + installPlace);


       axios.post('http://localhost:8080/spring/api/asset/install-device', { 
        asset_id: vehicle,
	    device_id: device,
	    date_time: installDate,
	    technician: technician,
	    install_place: installPlace,
        opearator:'BABU',
        status:'INSTALL'

      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
       e.preventDefault();
    }

    const getAllUsers=()=>{
        axios.get('http://localhost:8080/spring/api/user/all').then(function (response) {
            console.log(response);
            response.data.map((item)=>{
                console.log('item value '+item.user_name)
                setUsers(prevUsers=>[...prevUsers, item.user_name])
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    const getUnInstalledDevice=()=>{

    }
    const onUserSelect=(e)=>{
        console.log('selected ...: '+e.target.value)
        setSelectedUser(e.target.value)
        console.log('selectedUser ...: '+selectedUser)
    }

    const onSelectDevice=(d)=>{
        console.log('===device ==='+ d.target.value)
        seteDevice(d.target.value)
    }
    const onSelectVehicle=(v)=>{
        setVehicle(v.target.value)
    }
    const onSetTechinician=(t)=>{
        setTechnician(t.target.value)
    }
    const onSetInstallPlace=(i)=>{
        setInstallPlace(i.target.value)
    }
    const onStatusChange=(e)=>{
        setStatus(e.target.value)
    }
    const onSetOldDevice=(e)=>{
        setOldDevice(e.target.value)
    }
  return (
    <div className="mt-6 w-full h-full  flex justify-center bg-gray-100">
       <form className="w-full h-auto px-6 py-3 h-auto flex flex-col gap-y-4 border border-gray-300 bg-gray-50" onSubmit={onFormSubmit}>
            <div className="flex justify-center gap-6">
                <div className="flex-1 flex flex-col">
                    <span className="pl-1 text-xs text-green-700">Select User</span>
                    <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                        name="user_type" id="user_type" onChange={ onUserSelect }>
                        {users.map((user, index)=>(
                            <option key={index} value={user}>{ user }</option>
                        ))}    
                    </select>
                </div>
                <div className="flex-1 flex flex-col">
                    <span className="pl-1 text-xs text-green-700">Select Vehicle</span>
                    <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                        name="user_type" id="user_type" onChange={ onSelectVehicle }>
                        {usersUnInstalledVehicle.map((vehicle, index)=>(
                            <option key = {index} value={ vehicle }>{ vehicle }</option>
                        ))}
                    </select>
                </div>
                <div className="flex-1 flex flex-col">
                    <span className="pl-1 text-xs text-green-700">Select Device</span>
                    <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                        name="user_type" id="user_type" onChange={ onSelectDevice }>
                        { allUnInstalledDevice.map(((device, index)=>(
                            <option key={ index } value={ device }>{ device }</option>
                        ))) }    
                    </select>
                </div>
            </div>    
             <div className="flex justify-center gap-6">


                <div className="flex-1 flex flex-col">
                    <span className="pl-1 text-xs text-green-700">Status</span>
                    <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                        name="user_type" id="user_type" onChange={ onStatusChange }>
                        <option value="REPAIR">Repair</option>
                        <option value="REPLACE">Replace</option>
                    </select>
                </div>
                <div class="flex-1 mx-4">
                    {(()=>{
                        if(status.includes('REPLACE')){
                            return(
                                <div>
                                    <span className="pl-1 text-xs text-green-700">Old Device</span>
                                     <input className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                                        name="user_type" id="user_type" onChange={ onSetOldDevice }>
                                    </input>
                                </div>
                            )
                        }
                    })()}

                </div>


            </div> 
            <div className="flex justify-center gap-6">
                <div className="flex-1 flex flex-col">
                    <span className="pl-1 text-xs text-green-700">Technitian</span>
                    <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                        name="user_type" id="user_type" onChange={ onSetTechinician }>
                        <option value="general_report">uzzol</option>
                    </select>
                </div>
                <div className="flex-1 flex flex-col">
                    <span className="pl-1 text-xs text-green-700"> Install Place</span>
                    <input className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                        name="user_type" id="user_type" onChange={ onSetInstallPlace }>
                    </input>
                </div>
            </div>         
            <div className="mt-10 flex justify-end gap-6">
                <button className="p-2 w-32  h-8 text-sm text-white bg-yellow-400 rounded-md" onClick={() => props.cbFromNewRepair()}>
                    Cancel
                </button>
                <input className="w-32  h-8 text-sm text-green-800 bg-yellow-400 rounded-md" type="submit" value="Submit"/>
            </div>
        </form>
    </div>
  );
};
export default NewRepair;
