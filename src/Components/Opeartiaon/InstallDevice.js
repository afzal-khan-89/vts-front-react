import React, { useState, useEffect } from 'react'
import axios from 'axios'

const InstallDevice = ()=>{

    const [vehicle, setVehicle] = useState('')
    const [device, seteDevice] = useState('')
    const [isActive, setIsActive] = useState('')
    const [oldDevice, setOldDevice] = useState("")
    const [technician, setTechnician] = useState('')
    const [installPlace, setInstallPlace] = useState('')
    const [installType, setInstallType] = useState('')

    const [users, setUsers] = useState([])
    const [usersVehicle, setUsersVehicle] = useState([])
    const [allDevice, setAllDevice] = useState([])
    const [selectedUser, setSelectedUser] = useState('babu')


    useEffect(() => {        
        setUsers([]) 
        getAllUsers();
        getUnInstalledDevice();

    }, [])
    useEffect(() => {
        setUsersVehicle([])
        axios.get(`http://localhost:8080/spring/api/asset-group/${selectedUser}/all`).then(function (response) {
            console.log(response.data.assets);
            console.log(response.data);
            response.data.map(item=>{
                console.log('it: '+item.groupName)
                item.assets.map(it=>{
                    console.log('asset'+ it.number_plate)
                    if(it.device===null){
                        setUsersVehicle(vehicle=>[...vehicle, it.number_plate])
                    }
                })
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [selectedUser])
    const onUserSelect=(e)=>{
        console.log('selected ...: '+e.target.value)
        setSelectedUser(e.target.value)
        console.log('selectedUser ...: '+selectedUser)
    }
    const onFormSubmit=(e)=>{
       console.log("on form submit ")
       console.log('vehicle:'+vehicle)
       console.log('device:'+ device)
       console.log('installType:'+installType)
       console.log('oldDevice:'+oldDevice)
       console.log('date_time:'+'2021-06-28 15:41:50')
       console.log('technician:'+technician)
       console.log('installPlace:'+installPlace)
       
       axios.post('http://localhost:8080/spring/api/asset/install-device', { 
        asset_id: vehicle,
	    device_id: device,
	    status:installType,
	    old_device:oldDevice,
	    date_time:'2021-06-28 15:41:50',
	    technician:technician,
	    install_place:installPlace

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
        axios.get('http://localhost:8080/spring/api/device/un-mapped/all').then(function (response) {
            console.log(response);
          
            response.data.map((item)=>{
                console.log('item value '+item.imei)
                setAllDevice(prevDevice=>[...prevDevice, item.imei])
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }


    const onSelectDevice=(d)=>{
        seteDevice(d.target.value)
    }
    const onSelectVehicle=(v)=>{
        setVehicle(v.target.value)
    }
    const onSetOldDevice=(o)=>{
        setOldDevice(o.target.value)
    }
    const onSetActiveOrInactive=(a)=>{
        setIsActive(a.target.value)
    }
    const onSetTechinician=(t)=>{
        setTechnician(t.target.value)
    }
    const onSetInstallPlace=(i)=>{
        setInstallPlace(i.target.value)
    }
    const onChangeInstallStatus=(e)=>{
        setInstallType(e.target.value)
        console.log(installType)
    }
    return(
        <div className="font-mono">
        <h3 class="p-8 text-2xl text-center">Install Device</h3>
        <form class="mx-48 md:mx-12 sm:mx-4 p-8 bg-white rounded" onSubmit={onFormSubmit}>
            <div class="flex mb-4 md:flex ">
                <div class="flex-1  mx-4">
                    <label class="block mb-1 text-sm font-bold text-gray-700" for="firstName">
                    Select User
                    </label>
                    <select className="w-full bg-white border border-gray-400 focus:outline-none p-2 rounded cursor-pointer text-gray-800 focus:ring-2 focus:ring-purple-600"
                            name="vehicle_select" id="vehicle_select" onChange={ onUserSelect }>    
                            {users.map((e)=>(<option value={e}>{e}</option>))}
                    </select>
                </div>
                <div class="flex-1  mx-4">
                    <label class="block mb-1 text-sm font-bold text-gray-700" for="firstName">
                    Select Vehicle
                    </label>
                    <select className="w-full bg-white border border-gray-400 focus:outline-none p-2 rounded cursor-pointer text-gray-800 focus:ring-2 focus:ring-purple-600"
                            name="vehicle_select" id="vehicle_select" onChange={ onSelectVehicle }>                  
                            {usersVehicle.map(item=>(<option value={item}>{item}</option>))}
                    </select>
                </div>
                <div class="flex-1 mx-4">
                    <label class="block mb-1 text-sm font-bold text-gray-700" for="lastName">
                        Select Device
                    </label>
                    <select className="w-full bg-white border border-gray-400 focus:outline-none p-2 rounded cursor-pointer text-gray-800 focus:ring-2 focus:ring-purple-600"
                            name="select_device" id="select_device" onChange={ onSelectDevice }>                  
                            {allDevice.map(item=>(<option value={item}>{item}</option>))}
                    </select>
                </div>
            </div> 
            <div class="flex  md:flex md:justify-between  mb-4 ">
                <div class="flex-1 mx-4">
                    <label class="block mb-1 text-sm font-bold text-gray-700" for="lastName">
                        Technitian
                    </label>
                     <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="technician" type="text"  onChange={ onSetTechinician } />
                </div>
                <div class="flex-1 mx-4">
                    <label class="block mb-1 text-sm font-bold text-gray-700" for="lastName">
                        Install Place
                    </label>
                     <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="install_place" type="text" onChange={ onSetInstallPlace } />
                </div>
                <div class="flex-1 mx-4">
                    <label class="block mb-1 text-sm font-bold text-gray-700" for="lastName">
                        Is Active
                    </label>
                    <select className="w-full bg-white border border-gray-400 focus:outline-none p-2 rounded cursor-pointer text-gray-800 focus:ring-2 focus:ring-purple-600"
                            name="select_device" id="select_device" onChange={ onSetActiveOrInactive }>                  
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>  
            <div class="flex  md:flex md:justify-between  mb-4 ">
            <div class="flex-1  mx-4">
                    <label class="block mb-1 text-sm font-bold text-gray-700" for="firstName">
                    Status
                    </label>
                    <select className="w-full bg-white border border-gray-400 focus:outline-none p-2 rounded cursor-pointer text-gray-800 focus:ring-2 focus:ring-purple-600"
                            name="install_status" id="install_status" onChange={ onChangeInstallStatus }>                  
                        <option value="install">Install</option>
                        <option value="repair">Repair</option>
                        <option value="replace">Replace</option>
                    </select>
                </div>
                <div class="flex-1 mx-4">
                    {(()=>{
                        if(installType.includes('replace')){
                            return(
                                <div>
                                    <label class="block mb-1 text-sm font-bold text-gray-700" for="firstName">
                                        Old Device
                                    </label>
                                    <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="old_device" type="text" onChange={ onSetOldDevice } />
                                </div>
                            )
                        }
                    })()}

                </div>
                <div class="flex-1 mx-4">

                </div>
            </div>         
            <div class="flex mb-4 mx-4">
                <input type="submit" value="Submit" />
            </div>                 
        </form>
    </div>
    )
}
export default InstallDevice