import React, {  useState, useRef, useEffect }  from 'react'
import axios from 'axios'
import ReportHeader from '../Components/ReportHeader'

const Reports = ()=>{

    const [rawDta, setRawData] = useState([])
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [startTimeToshow, setStartTimeToShow] = useState();
    const [endTimeToShow, setEndTimeToShow] = useState();
    const [currentTimeSelected, setCurrentTimeSelected] = useState('current-hour');

    useEffect(() => {
        axios.get('http://localhost:8080/spring/api/report/time-filter', {
            params: {
                filterTime: currentTimeSelected
            }
          })
          .then(function (response) {
            setStartTime(response.data.start_time)
            setEndTime(response.data.end_time)
            setStartTimeToShow(response.data.start_time_details)
            setEndTimeToShow(response.data.end_time_details)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            
          });
    }, [currentTimeSelected])

    const timeSeletionChange =(e)=>{
        setCurrentTimeSelected(e.target.value)
        console.log('time selection changed ' + currentTimeSelected);

    }
    const formatTime=()=>{
        const generateReort = ()=>{
            axios.get('http://localhost:8080/spring/api/report/raw-data', {
                params: {
                    filterTime:'current-hour'
                }
              })
              .then(function (response) {
                setRawData(response.data)
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })
              .then(function () {
                
              });
        }
    }
    const generateReort = ()=>{
        axios.get('http://localhost:8080/spring/api/report/raw-data', {
            params: {
              vehicleId:'85691231231234',
			  startTime:'2021-08-10 02:30:08',
			  endTime:'2021-08-11 22:30:08',
			  fuel:'0.2',
			  litterGallon:'litter',
			  kmHour:'40'
            }
          })
          .then(function (response) {
            setRawData(response.data)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            
          });
    }











    return(
        <div className = "fixed  w-screen flex flex-wrap m-auto  h-5/6  bg-gray-100">            
            <div className="left-panel w-1/4 flex  space-y-2 flex-col h-screen">    
                <div class="p-4 bg-white  border-b border-gray-200">
                    <select class="w-full bg-white border border-gray-200  p-2 rounded cursor-pointer">
                        <option selected>Select User</option>
                        <option value="1">User 0</option>
                        <option value="2">User 1</option>
                        <option value="3">User 2</option>
                        <option value="4">User 3</option>
                        <option value="5">User 4</option>
                    </select>
                </div>  
                <div class="flex flex-row gap-4 p-2 bg-white  border-b border-gray-200">
                        <select class="w-full bg-white border border-gray-200  p-2 rounded cursor-pointer">
                            <option selected>Select Vehicle</option>
                            <option value="1">User 0</option>
                        </select>
                        <select class="w-full bg-white border border-gray-200  p-2 rounded cursor-pointer">
                            <option selected>Select Group</option>
                            <option value="1">User 0</option>
                        </select>
                </div>
                <div class="flex flex-row gap-4 p-2 pb-2 bg-white  border-b border-gray-200">
                    <div className="flex-1">
                        <span className = "p-0 text-sm text-gray-600">Report type</span>
                        <select className="w-full bg-white border border-gray-400 focus:outline-none p-2 rounded cursor-pointer text-gray-800"
                                name="report_type" id="report_type">                  
                            <option value="daily_distance">Distance Report</option>
                            <option value="speed_location_distance_report">Trip Report in Details</option>
                            <option value="trip_report_summary">Trip Report Summary</option>
                            <option value="start_stop_report">Engine Start/Stop Report</option>
                            <option value="over_speed_report">Over Speeding Report</option>
                            <option value="ac_start_stop_report">AC On-OFF Report</option>
                            <option value="raw_data_report">Raw Data</option>
                        </select>
                    </div>
                    <div className="flex-1">
                    <span className = "text-sm text-gray-600">Select Time</span>
                        <select className="w-full bg-white border border-gray-400 focus:outline-none p-2 rounded cursor-pointer text-gray-800" name="report_format" id="report_format">
                            <option value="general_report">General Report</option>
                            <option value="graph_report">Graph Report</option>
                        </select>
                    </div>
                </div>   
                <div class="flex flex-col gap-4 p-2 bg-white border-gray-400 h-screen">
                    <div className="w-full">
                        <span className = "text-sm text-gray-600">Select Time</span>
                        <select class="w-full bg-white border border-gray-400  p-2 rounded cursor-pointer text-gray-800" name="time_period" id="time_period" onChange={ timeSeletionChange }>
                            <option value="current-hour">Current Hour</option>
                            <option value="last-hour">Last Hour</option>
                            <option value="last-2-hour">Last 2 Hour</option>
                            <option value="last-3-hour">Last 3 Hour</option>
                            <option value="last-6-hour">Last 6 Hour</option>
                            <option value="last-12-hour">Last 12 Hour</option>
                            <option value="today">Today</option>
                            <option value="yesterday">Yesterday</option>
                            <option value="this-week">This Week</option>
                            <option value="last-week">Last Week</option>
                            <option value="this-month">This Month</option>
                            <option value="last-month">Last Month</option>
                            <option value="specific-day">Specific Day</option>
                            <option value="specific-period">Between Days</option>
                            <option value="custom">Custom</option>
                        </select>
                    </div>
                    <div className="flex flex-row gap-4 bg-white  border-gray-200">
                        <div className = "flex-1">
                            <label class="block text-gray-700 text-sm font-bold mb-2">
                                Start time
                            </label>
                            <input class="read-only shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={ startTimeToshow } />
                        </div>
                        <div className = "flex-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                End time
                            </label>
                            <input className="read-only shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                    </div> 
                    <div className="flex flex-row gap-4 bg-white  border-gray-200">
                        <div className = "flex-1">
                            <span className = "text-sm text-gray-600">Start Day</span>
                            <select class="w-full bg-white border border-gray-400  p-2 rounded cursor-pointer">
                                <option selected>Start time</option>
                                <option value="1">User 0</option>
                            </select>
                        </div>
                        <div className = "flex-1">
                            <span className = "text-sm text-gray-600">End Day</span>
                            <select class="w-full bg-white border border-gray-400  p-2 rounded cursor-pointer">
                                <option selected>End Time</option>
                                <option value="1">User 0</option>
                            </select>
                        </div>
                    </div> 
                    <div className="gap-4 bg-white  border-gray-200">
                        <span className = "text-sm text-gray-600">Select Day</span>
                        <select class="w-full bg-white border border-gray-400  p-2 rounded cursor-pointer text-gray-800" 
                            name="time_period" id="time_period">
                            <option value="current-hour">we ew ew</option>
                        </select>
                    </div> 
                    <div className="flex flex-row flex-wrap bg-white  border-gray-200" id="fuel_consumption">
                        <div className = "w-2/4">
                            <span className = "text-sm text-gray-600">Fuel Consumption: { 0.2 }</span>
                        </div>
                        <div className = "w-1/4">
                            <select class="w-full bg-white border border-gray-400  rounded cursor-pointer" name="litter_gallon" id="litter_gallon">
                                <option value="Liter">Liter</option>
                                <option value="Gallon">Gallon</option>
                                <option value="CFT">CNG Unit(CFT)</option>
                            </select>
                        </div>
                        <div className = "flex flex-row justify-center w-1/4">
                            <div>
                                <span className = "text-sm text-gray-600"> km </span>
                            </div>
                        </div>
                    </div> 
                    <div className="w-full flex justify-center">
                        <button className="border border-gray-200 p-4 rounded-lg bg-green-600 text-white"  onClick={generateReort}>Generate Report</button>
                    </div>
                </div>      
            </div>           
            <div className="content-panel w-3/4  overflow-y-auto flex flex-col   h-screen  bg-gray-100">  
                <div className = "flex flex-row">
                    <div className="w-1/2">
                        <ReportHeader />
                    </div>
                    <div className="w-1/2 relative">
                        <div className="p-2 absolute right-0  bottom-0">               
                            <button className="border border-gray-200 p-2 rounded-lg bg-green-400 text-white">Save as PDF</button>                      
                            <button className="border border-gray-200 p-2 rounded-lg bg-green-400 text-white">Save as word</button>       
                            <button className="border border-gray-200 p-2 rounded-lg bg-yellow-400 text-white">Print Report</button>
                        </div>
                    </div>
                </div>    
                <div class="table w-full p-2">
                        <table class="w-full border">
                            <thead>
                                <tr class="bg-gray-50 border-b">
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            ID
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Time
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                           Status
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Lat:Lon
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Speed
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm  text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Eng
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Ac
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Fuel
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Temperature
                                        </div>
                                    </th>
                                    <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                        <div class="flex items-center justify-center">
                                            Action
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rawDta.map((item)=>(
                                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                    <td class="p-2 border-r">1</td>
                                    <td class=" border-r">{item.data_time}</td>
                                    <td class=" border-r">{item.is_valid}</td>
                                    <td class=" border-r">{item.latitude} : {item.longitude}</td>
                                    <td class=" border-r">{item.speed}</td>
                                    <td class=" border-r">{item.eng_status}</td>
                                    <td class=" border-r">{item.ac_status}</td>
                                    <td class=" border-r">{item.fuel}</td>
                                    <td class=" border-r">{item.temperature}</td>
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
        </div>

    )
}
export default Reports















