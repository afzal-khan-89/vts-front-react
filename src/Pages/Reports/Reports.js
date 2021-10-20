import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReportHeader from "../../Components/ReportHeader";
import TimeOfPreDefined from "../../Components/TimePickerMenu/TimeOfPreDefined";
import TimeBetweenTwoDays from "../../Components/TimePickerMenu/TimeBetweenTwoDays";
import TimeOfSpeacificDay from "../../Components/TimePickerMenu/TimeOfSpeacificDay";
import TimeOfCustomSelection from "../../Components/TimePickerMenu/TimeOfCustomSelection";
import FuelSelectoinComponent from "../../Components/FuelSelectoinComponent";
import UserSelectionView from "../../Components/UserSelectonView";
import RawDataReport from "./RawDataReport";

import './reports.css'

const Reports = () => {
  const [rawDta, setRawData] = useState([]);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [startTimeToshow, setStartTimeToShow] = useState();
  const [endTimeToShow, setEndTimeToShow] = useState();
  const [selectedTimeinterval, setSelectedTimeinterval] = useState("current-hour");

  const [reportType, setReportType] = useState("raw_data_report");  

  const RAW_DATA_REPORTS = 'raw_data_report'
  const REPORT_TYPE = [ {key:'Distance Report', value:'' },
                        {key:'Trip Report Summary', value:'' },
                        {key:'Engine Start/Stop Report', value: ''},
                        {key:'Over Speeding Report', value: ''},
                        {key: 'AC On-OFF Report', value: '' }
                      ] 
   const TIME_SELECTION = [
                            { key:'Current Hour', value:'current-hour'},
                            { key:'Last Hour', value:'last-hour'},
                            { key:'Last 2 Hour', value:'last-2-hour'},
                            { key:'Last 3 Hour', value:'last-3-hour'},
                            { key:'Last 6 Hour', value:'last-6-hour'},
                            { key:'Last 12 Hour', value:'last-12-hour'},
                            { key:'Today', value:'today'},
                            { key:'Yesterday', value:'yesterday'},
                            { key:'This Week', value:'this-week'},
                            { key:'Last Week', value:'last-week'},
                            { key:'This Month', value:'this-month"'},
                            { key:'Last Month', value:'last-month'},
                            { key:'Specific Day', value:'specific-day'},
                            { key:'Between Days', value:'between-two-days'},
                            { key:'Custom', value:'custom'},
   ]                   
                  

  useEffect(() => {
    axios
      .get("http://localhost:8080/spring/api/report/time-filter", {
        params: {
          filterTime: selectedTimeinterval,
        },
      })
      .then(function (response) {
        setStartTime(response.data.start_time);
        setEndTime(response.data.end_time);
        setStartTimeToShow(response.data.start_time_details);
        setEndTimeToShow(response.data.end_time_details);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, [selectedTimeinterval]);

  const onTimeSelectonChange = (e) => {
    setSelectedTimeinterval(e.target.value);
    console.log("time selection changed " + selectedTimeinterval);
  };
  const onReportTypeChange = (e) => {
    setReportType(e.target.value);
    console.log("report type " + e.target.value);
  };
  const onCustomTimeSelect = (values) => {
    console.log("selected start date " + values.startDate);
    console.log("selected end date" + values.endDate);
  };
  const generateReort = () => {
    axios
      .get(`http://localhost:8080/spring/api/report/${reportType}`, {
        params: {
          vehicleId: "85691231231234",
          startTime: "2021-08-10 02:30:08",
          endTime: "2021-08-11 22:30:08",
          fuel: "0.2",
          litterGallon: "litter",
          kmHour: "40",
        },
      })
      .then(function (response) {
        setRawData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  return (
    <div className="report-container  flex  flex-col items-center bg-gray-100">
        <div className="w-3/5 h-60 mt-12  flex flex-col items-center bg-white">
            <div className="h-8 w-full px-5 mt-6 flex items-end ">
                <div className="h-8 w-48 flex justify-start items-center bg-yellow-200">
                    <span className="ml-2 text-green-800">Reports</span>
                </div>
            </div>
            <div className="h-52 w-full flex flex-col ">
                <div className="h-full mx-5 flex bg-gray-50 border border-gray-300">
                    <div className="w-1/3 h-full border-r border-gray-200 flex flex-col justify-start">
                        <div className="h-1/3 px-3 py-0.5 border-b border-gray-200 ">
                            <div className="flex flex-col">
                                <span className="text-xs text-yellow-600">Select User</span>
                                <select className="text-gray-800 text-sm bg-gray-50 border border-gray-200 focus:outline-none p-1 rounded cursor-pointer">
                                    <option value="1">User 0</option>
                                    <option value="2">User 1</option>
                                </select>
                            </div>
                        </div >
                        <div className="h-1/3 px-3 py-0.5 border-b border-gray-200 ">
                            <div className="flex flex-col">
                                <span className="text-xs text-yellow-600">Select Group</span>
                                <select className="text-gray-800 text-sm bg-gray-50 border border-gray-200 focus:outline-none p-1 rounded cursor-pointer">
                                    <option selected>Select Group</option>
                                    <option value="1">User 0</option>
                                </select>
                            </div>
                        </div >
                         <div className="h-1/3 px-3 py-0.5 ">
                            <div className="flex flex-col">
                                <span className="text-xs text-yellow-600">Select Vehicle</span>
                                    <select className="text-gray-800 text-sm bg-gray-50 border border-gray-200 focus:outline-none p-1 rounded cursor-pointer">
                                        <option selected>Select Group</option>
                                        <option value="1">User 0</option>
                                    </select>
                            </div>
                        </div >
                    </div >
                    <div  className="w-1/3 h-full border-r border-gray-200">
                        <div className="h-1/3  px-3 py-0.5 border-b border-gray-200 ">
                            <div className="flex flex-col">
                                <span className="text-xs text-yellow-600">Reaport Type</span>
                                <select className="text-gray-800 text-sm bg-gray-50 border border-gray-200 focus:outline-none p-1 rounded cursor-pointer"
                                    name="report_format" id="report_format">
                                    <option value="general_report">General Report</option>
                                    <option value="graph_report">Graph Report</option>
                                </select>
                            </div>
                        </div >
                        <div className="h-1/3  px-3 py-0.5 border-b border-gray-200 ">
                            <div className="flex-1 flex flex-col">
                                <span className="text-xs text-yellow-600">Report type</span>
                                <select className="text-gray-800 text-sm bg-gray-50 border border-gray-200 focus:outline-none p-1 rounded cursor-pointer"
                                    name="report_type" id="report_type" onChange={onReportTypeChange}>
                                    {REPORT_TYPE.map((item)=>(
                                        <option value={item.value}>{item.key}</option>
                                    ))}                
                                </select>
                            </div>
                        </div >
                         <div className="h-1/3 flex justify-center items-center">
                            <button className="w-2/3 h-2/3 p-2 border border-gray-200 bg-gray-300">Generate Report</button>
                        </div >
                    </div>
                    <div className="w-1/3 h-full ">
                        <div className="h-1/3 px-3 py-0.5 border-b border-gray-200 ">
                            <div className="flex flex-col">
                                <span className="text-xs text-yellow-600">Select Time</span>
                                <select className="text-gray-800 text-sm bg-gray-50 border border-gray-200 focus:outline-none p-1 rounded cursor-pointer"
                                    name="time_period" id="time_period" onChange={onTimeSelectonChange} >
                                    {TIME_SELECTION.map((item)=>(
                                        <option value={item.value}>{item.key}</option>
                                    ))}
                                </select>
                            </div>
                        </div >
                        <div className="h-2/3  px-3 py-0.5  ">
                            <div className="">
                                {(() => {
                                    if (selectedTimeinterval.includes("custom"))
                                        return <TimeOfCustomSelection cb={onCustomTimeSelect} />;
                                    else if (selectedTimeinterval.includes("between-two-days"))
                                        return <TimeBetweenTwoDays cb={onCustomTimeSelect} />;
                                    else if (selectedTimeinterval.includes("specific-day"))
                                        return <TimeOfSpeacificDay cb={onCustomTimeSelect} />;
                                    else
                                        return ( <TimeOfPreDefined start={startTimeToshow} end={endTimeToShow}/>)
                                })()}
                                {(() => {
                                    if (
                                        reportType.includes("engine_start_stop_report") ||
                                        reportType.includes("trip_report_summary") ||
                                        reportType.includes("speed_location_distance_report") ||
                                        reportType.includes("daily_distance")
                                    ) {
                                        return <FuelSelectoinComponent />;
                                    }
                                })()}
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-full ">

                {(() => {
                    if (reportType.includes(RAW_DATA_REPORTS)) {
                        console.log("HOME_CONTENT_VEHICLE_STATUS");
                        return <RawDataReport />;
                    }
                })()}

        </div>
    </div>
  );
};
export default Reports;
