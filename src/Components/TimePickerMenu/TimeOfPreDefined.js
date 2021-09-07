import React from 'react'

const TimeOfPreDefined=(props)=>{


    return (
        <>
            <div className="flex flex-row gap-4 bg-white  border-gray-200">
                <div className = "flex-1">
                    <label class="ml-1 text-xs text-yellow-600"> Start time</label>
                    <input class="read-only text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none rounded 
                        cursor-pointer w-full py-1.5 px-3"  id="starttime" type="text" value={props.start } />
                </div>
                <div className = "flex-1">
                    <label className="ml-1 text-xs text-yellow-600">End time</label>
                    <input className="read-only text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none rounded 
                        cursor-pointer w-full py-1.5 px-3" id="endtime" type="text" value={ props.end }/>
                </div>
            </div> 
        </>
    )

}
export default TimeOfPreDefined