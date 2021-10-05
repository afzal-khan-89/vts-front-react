import React, {  useState, useRef, useEffect }  from 'react'
import TimeBetweenTwoDays from './TimeBetweenTwoDays';
import TimeOfCustomSelection from './TimeOfCustomSelection';
import TimeOfPreDefined from './TimeOfPreDefined';
import TimeOfSpeacificDay from './TimeOfSpeacificDay';
import axios from 'axios';

const TimePickerView=(props)=> {
    const [timeSelectionOption, setTimeSelectionOption] = useState('current-hour');
    const [predefTime, setPredefTime] = useState({ startTime : '' ,endTime : ''})

    const formatTime=(value)=>{
          axios.get('http://localhost:8080/spring/api/report/time-filter', {
              params: {
                'filterTime' : value
              }
          }).then(response=>{
              console.log(response)
              props.cb(response.data.start_time, response.data.end_time)

              setPredefTime({
                startTime:response.data.start_time_details, 
                endTime: response.data.end_time_details
              });
          })
    }

    const onTimeSelectonChange =(e)=>{
        if(e.target.value.includes('custom') || e.target.value.includes('between-two-days') || e.target.value.includes('specific-day')){
            setTimeSelectionOption(e.target.value)
        }else{
            console.log('TIME :: '+e.target.value)
            formatTime(e.target.value)
        }
    }
    const onCustomTimeSelect = (values)=>{
        //console.log('TimePickerView start date==> '+values.startDate)
        //console.log('TimePickerView end date  ==>' +values.endDate)
        props.cb(values.startDate, values.endDate)
    }
    return (
        <div>
            <div className="flex flex-col">
                <span className="ml-1 text-xs text-yellow-600">Select Time</span>
                <select className="text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none p-1.5 rounded cursor-pointer"
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
            <div className="mt-3">
                {(()=>{
                    if(timeSelectionOption.includes('custom')) return <TimeOfCustomSelection  cb={ onCustomTimeSelect }/>
                    else if(timeSelectionOption.includes('between-two-days')) return  <TimeBetweenTwoDays cb={ onCustomTimeSelect }/>
                    else if(timeSelectionOption.includes('specific-day')) return <TimeOfSpeacificDay cb={ onCustomTimeSelect }/>
                    else return  <TimeOfPreDefined start = { predefTime.startTime } end={ predefTime.endTime } />
                })()}
            </div>
        </div>
    )
}
export default TimePickerView