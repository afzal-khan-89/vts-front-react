import React, {  useState, useRef, useEffect }  from 'react'
import TimeBetweenTwoDays from './TimeBetweenTwoDays';
import TimeOfCustomSelection from './TimeOfCustomSelection';
import TimeOfPreDefined from './TimeOfPreDefined';
import TimeOfSpeacificDay from './TimeOfSpeacificDay';


const TimePickerView=()=> {
    const [timeSelectionOption, setTimeSelectionOption] = useState('current-hour');
    const [startTimeToshow, setStartTimeToShow] = useState();
    const [endTimeToShow, setEndTimeToShow] = useState();

    const onTimeSelectonChange =(e)=>{
        setTimeSelectionOption(e.target.value)
        console.log('time selection changed ' + timeSelectionOption);

    }
    const onCustomTimeSelect = (values)=>{
        console.log('selected start date '+values.startDate)
        console.log('selected end date' +values.endDate)
    }
    return (
        <div>
            <div className="flex flex-col">
                        <span className = "text-xs text-gray-600">Select Time</span>
                        <select class="w-1/2 text-sm bg-white border border-gray-400  p-1.5 rounded cursor-pointer text-gray-800" 
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
                        if(timeSelectionOption.includes('custom')) return <TimeOfCustomSelection  cb={ onCustomTimeSelect }/>
                        else if(timeSelectionOption.includes('between-two-days')) return  <TimeBetweenTwoDays cb={ onCustomTimeSelect }/>
                        else if(timeSelectionOption.includes('specific-day')) return <TimeOfSpeacificDay cb={ onCustomTimeSelect }/>
                        else return  <TimeOfPreDefined start = { startTimeToshow } end={ endTimeToShow } />
                    })()}
        </div>
    )
}
export default TimePickerView