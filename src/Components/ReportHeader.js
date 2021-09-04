import React from 'react'


const ReportHeader = ()=>{
    return(
        <div className = "test flex flex-col p-6 ">
            <div className = " border-b border-gray-300 p-2  py-2 text-gray-600">
                <h2 className = "text-gray-600">GEON Technologies Ltd.</h2>
            </div>
            <div className = " border-b border-gray-300 p-2 text-sm text-gray-600 bg-gray-200">
                <span>Report Title 	: Raw Data Report</span>
            </div>
            <div className = "border-b border-gray-300 p-2 py-2 text-sm text-gray-600">
                <span>Vehicle 	: DHK-MT-CHA-56-1153</span>
            </div>
            <div className = "border-b border-gray-300 p-2 py-2 text-sm text-gray-600 bg-gray-200">
                <span>Owner 	: AKHTAR GROUP (akhtar_group)</span>
            </div>
            <div className = "border-b border-gray-300 p-2 py-2 text-sm text-gray-600">
                <span>Report Time 	: "Aug 12, 2021 01:00:00 PM" To "Aug 12, 2021 01:45:48 PM"</span>
            </div>
            <div className = "border-b border-gray-300 p-2 py-2 text-sm text-gray-600 bg-gray-200">
                <span>Report Date 	: Aug 12, 2021</span>
            </div>        
        </div>
    )
}

export default ReportHeader
