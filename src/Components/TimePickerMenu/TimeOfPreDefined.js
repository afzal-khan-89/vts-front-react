import React from 'react'

const TimeOfPreDefined=(props)=>{


    return (
        <>
            <div className="flex flex-row gap-4 bg-white  border-gray-200">
                <div className = "flex-1">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Start time
                    </label>
                    <input class="read-only shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline" id="starttime" type="text" value={props.start } />
                </div>
                <div className = "flex-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        End time
                    </label>
                    <input className="read-only shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline" id="endtime" type="text" value={ props.end }/>
                </div>
            </div> 
        </>
    )

}
export default TimeOfPreDefined