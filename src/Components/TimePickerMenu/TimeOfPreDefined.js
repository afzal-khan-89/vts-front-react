import React from 'react'

const TimeOfPreDefined=(props)=>{
    return (
        <>
            <div className="w-full h-full flex flex-col  gap-2 ">
                <div className = "flex flex-col">
                    <span className = "ml-1 text-xs text-yellow-600">Start time</span>
                    <input class="w-full text-gray-800 text-sm bg-gray-50 border border-gray-200 focus:outline-none p-1 rounded "  
                    id="starttime" type="text" value={props.start } />
                </div>
                <div className = "flex flex-col">
                    <span className="ml-1 text-xs text-yellow-600">End time</span>
                    <input className="w-full text-gray-800 text-sm bg-gray-50 border border-gray-200 focus:outline-none p-1 rounded "
                    id="endtime" type="text" value={ props.end }/>
                </div>
            </div> 
        </>
    )

}
export default TimeOfPreDefined