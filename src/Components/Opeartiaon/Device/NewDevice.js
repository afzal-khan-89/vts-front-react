import React, { useState } from 'react'
import axios from 'axios'


const NewDevice = ()=>{
    const [imei, setImaei] = useState('')
    const [model, setModel] = useState('')
    const [origin, setOrigin] = useState('')


    const onFormSubmit=(e)=>{
        console.log(imei)
        console.log(model)
        console.log(origin)

       axios.post('http://localhost:8080/spring/api/device/create', {
        imei: imei,
        model: model,
        origin: origin
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })

       e.preventDefault();
    }
    const onChangeImei=(e)=>{
        setImaei(e.target.value)
    }
    const onChangeOrigin=(e)=>{
        setModel(e.target.value)
    }
    const onChangeModel=(e)=>{
        setOrigin(e.target.value)
    }


    return(
        <div className="font-mono">
            <h3 class="p-8 text-2xl text-center">Create  Device</h3>
            <form class="mx-48 p-8 bg-white rounded" onSubmit={onFormSubmit}>
                <div class="flex  gap-6 md:flex md:justify-between  mb-4 ">
                    <div class="flex-1 md:mr-2 md:mb-0">
                        <label class="block mb-1 text-sm font-bold text-gray-700" for="firstName">
                            Imei
                        </label>
                        <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="device_imei" type="text" onChange={onChangeImei} />
                    </div>
                    <div class="flex-1 md:ml-2">
                        <label class="block mb-1 text-sm font-bold text-gray-700" for="lastName">
                            Origin
                        </label>
                         <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="device_origin" type="text"  onChange={ onChangeOrigin } />
                    </div>
                    <div class="flex-1 md:ml-2">
                        <label class="block mb-1 text-sm font-bold text-gray-700" for="lastName">
                            Model
                        </label>
                         <input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="device_model" type="text" onChange={ onChangeModel } />
                    </div>
                </div>         
                <div class="flex mb-4 md:flex ">
                    <input type="submit" value="Submit" />
                </div>                 
            </form>
        </div>
    )
}

export default NewDevice