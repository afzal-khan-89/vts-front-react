import React, { useState } from "react";
import axios from "axios";
import "./opearation.css";

const CreateDevice = (props) => {    const [imei, setImaei] = useState('')
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
        props.cb()
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

  return (
    <div className="w-full h-full  flex justify-center bg-gray-100">
      <form
        className="w-full px-6 py-3 h-auto flex flex-col gap-y-4 border border-gray-300 bg-gray-50"
        onSubmit={onFormSubmit}
      >
        <div className="flex justify-center gap-6">
          <div className="flex-1 flex flex-col">
            <label className="text-xs  text-green-700">Imei</label>
            <input
              className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
              id="endtime"
              type="text"
              onChange={onChangeImei}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <span className="text-xs  text-green-700">Origin</span>
            <input
              className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
              id="endtime"
              type="text"
              onChange={onChangeOrigin}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <span className=" text-xs t text-green-700">Model</span>
            <input
              className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
              id="endtime"
              type="text"
              onChange={onChangeModel}
            />
          </div>
        </div>
        
        <div className="flex justify-end gap-6">
          <button
            className="p-2 w-32  h-8 text-sm text-white bg-yellow-400 rounded-md"
            onClick={() => props.cb()}
          >
            Cancel
          </button>
          <input
            className="w-32  h-8 text-sm text-green-800 bg-yellow-400 rounded-md"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};
export default CreateDevice;
