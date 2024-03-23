/* eslint-disable react/prop-types */
import moment from "moment";
import React, { useState } from "react";

const HistoryUI = ({ vehicleInfo, setVehicleData, vehicleHistory }) => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [reportTime, setReportTime] = useState(null);

  const handleSelectAllCars = () => {
    setVehicleData(vehicleHistory);
  };

  const handleStartDateChange = (date) => {
    const formattedStartDate = moment(date).format("YYYY-MM-DD HH:mm:ss");
    setStartTime(formattedStartDate);
  };

  const handleEndDateChange = (date) => {
    const formattedEndDate = moment(date).format("YYYY-MM-DD HH:mm:ss");
    setEndTime(formattedEndDate);
  };

  const handleReportsTimes = (e) => {
    setReportTime(e.target.value);
  };

  const handleShowInformation = () => {
    console.log("My All Reports", {
      startTime,
      endTime,
      reportTime,
    });
  };

  return (
    <div>
      <div className="bg-white border shadow-sm p-4">
        {/* <div>
          <label
            htmlFor="HeadlineAct"
            className="block text-sm font-medium text-gray-900"
          >
            Select User
          </label>

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Please select</option>
            <option value="SRV">Stevie Ray Vaughn</option>
            <option value="JH">Jimi Hendrix</option>
            <option value="BBK">B.B King</option>
            <option value="AK">Albert King</option>
          </select>
        </div> */}

        <div>
          {/* <label
            htmlFor="HeadlineAct"
            className="block text-sm font-medium text-gray-900"
          >
            Select Vehicle
          </label>

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Please select</option>
            <option value={vehicleName}>{vehicleName}</option>
          </select> */}
          <button className="text-black" onClick={handleSelectAllCars}>
            {vehicleInfo?.vehicle}
          </button>
        </div>

        {/* <div>
          <label
            htmlFor="HeadlineAct"
            className="block text-sm font-medium text-gray-900"
          >
            Select Group
          </label>

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Please select</option>
            <option value="group-1">Group 1</option>
            <option value="group-2">Group 2</option>
            <option value="group-3">Group 3</option>
            <option value="group-4">Group 4</option>
          </select>
        </div> */}

        {/* <div>
          <label
            htmlFor="HeadlineAct"
            className="block text-sm font-medium text-gray-900"
          >
            Select Time
          </label>

          <select
            onChange={handleReportsTimes}
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
          >
            {SelectTime.map((item, i) => (
              <option key={i} value={item.value}>
                {item.key}
              </option>
            ))}
          </select>
        </div> */}

        {/* <div>
          <DatePicker
            selected={startTime}
            onChange={handleStartDateChange}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
            className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
          />
        </div>

        <div>
          <DatePicker
            selected={endTime}
            onChange={handleEndDateChange}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
            className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
          />
        </div> */}
      </div>
      <button
        className="w-2/3 mt-4 object-none object-bottom  active:bg-red-700 focus:bg-yellow-500 focus:text-white hover:bg-green-500 
                 text-yellow-700 hover:text-white py-1 px-4 border border-yellow-500  rounded"
        onClick={handleShowInformation}
      >
        Show
      </button>
    </div>
  );
};

export default HistoryUI;
