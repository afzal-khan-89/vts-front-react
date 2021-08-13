import React, {  useState, useRef, useEffect }  from 'react'
import axios from 'axios'
import ReportHeader from '../Components/ReportHeader'
import TimeOfPreDefined from '../Components/TimeOfPreDefined'
import TimeBetweenTwoDays from '../Components/TimeBetweenTwoDays'
import TimeOfSpeacificDay from '../Components/TimeOfSpeacificDay'
import TimeOfCustomSelection from '../Components/TimeOfCustomSelection'
import FuelSelectoinComponent from '../Components/FuelSelectoinComponent'

const Reports = ()=>{

    const [rawDta, setRawData] = useState([])
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [startTimeToshow, setStartTimeToShow] = useState();
    const [endTimeToShow, setEndTimeToShow] = useState();
    const [selectedTimeinterval, setSelectedTimeinterval] = useState('current-hour');

    const [reportType, setReportType] = useState('raw_data_report')

    const userType = 'vodai'

    useEffect(() => {
        axios.get('http://localhost:8080/spring/api/report/time-filter', {
            params: {
                filterTime: selectedTimeinterval
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
    }, [selectedTimeinterval])

    const onTimeSelectonChange =(e)=>{
        setSelectedTimeinterval(e.target.value)
        console.log('time selection changed ' + selectedTimeinterval);

    }
    const onReportTypeChange=(e)=>{
        setReportType(e.target.value)
        console.log('report type '+ e.target.value);
    }
    const onCustomTimeSelect = (values)=>{
        console.log('selected start date '+values.startDate)
        console.log('selected end date' +values.endDate)
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
            <div className="left-panel w-1/4 flex  space-y-2 flex-col h-screen shadow-xl"> 
                {(()=>{
                    if(userType.includes('admin')) return(
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
                    )
                })()}    
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
                                name="report_type" id="report_type" onChange={ onReportTypeChange }>                  
                            <option value="daily_distance">Distance Report</option>
                            <option value="speed_location_distance_report">Trip Report in Details</option>
                            <option value="trip_report_summary">Trip Report Summary</option>
                            <option value="engine_start_stop_report">Engine Start/Stop Report</option>
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
                    <div className="flex flex-col">
                        <span className = "text-sm text-gray-600">Select Time</span>
                        <select class="w-1/2 bg-white border border-gray-400  p-2 rounded cursor-pointer text-gray-800" 
                                name="time_period" id="time_period" onChange={ onTimeSelectonChange }>
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
                            <option value="between-two-days">Between Days</option>
                            <option value="custom">Custom</option>
                        </select>
                    </div>
         
                    {(()=>{
                        if(selectedTimeinterval.includes('custom')) return <TimeOfCustomSelection  cb={ onCustomTimeSelect }/>
                        else if(selectedTimeinterval.includes('between-two-days')) return  <TimeBetweenTwoDays cb={ onCustomTimeSelect }/>
                        else if(selectedTimeinterval.includes('specific-day')) return <TimeOfSpeacificDay cb={ onCustomTimeSelect }/>
                        else return  <TimeOfPreDefined start = { startTimeToshow } end={ endTimeToShow } />
                    })()}
                    {(()=>{
                        if(reportType.includes('engine_start_stop_report') 
                                        || reportType.includes('trip_report_summary' )
                                        || reportType.includes('speed_location_distance_report' )
                                        || reportType.includes('daily_distance' )){
                                            return <FuelSelectoinComponent />
                                        }
                    })()}
                    
                    <div className="w-full flex justify-center mt-8">
                        <button className="border border-gray-200 p-2 rounded-lg bg-green-400 text-white"  onClick={generateReort}>Generate Report</button>
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















