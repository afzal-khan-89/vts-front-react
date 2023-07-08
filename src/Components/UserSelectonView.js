import React from 'react'

const UserSelectionView = ({userType})=>{
    return(
        <div className="flex flex-col border-t border-l border-r border-gray-200">
            {(()=>{
                if (userType.includes('admin')){
                    return (
                        <div className="flex-1 flex flex-col p-2 bg-white  ">
                            <span className="ml-1 text-xs text-yellow-600">Select Dealer</span>
                            <select className="text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none p-1.5 rounded cursor-pointer">
                                <option value="1">User 0</option>
                                <option value="2">User 1</option>
                                <option value="3">User 2</option>
                                <option value="4">User 3</option>
                                <option value="5">User 4</option>
                            </select>
                        </div> 
                    )
                } 
            })()}
            {(()=>{
                if (userType.includes('admin') || userType.includes('dealer') || userType.includes('semiadmin')){
                    return (
                        <div className="flex-1 flex flex-col pl-2 pr-2 pb-2 bg-white ">
                            <span className="ml-1 text-xs text-yellow-600">Select User</span>
                            <select className="text-gray-800 text-sm bg-white border border-gray-200 focus:outline-none p-1.5 rounded cursor-pointer">
                                <option value="1">User 0</option>
                                <option value="2">User 1</option>
                                <option value="3">User 2</option>
                                <option value="4">User 3</option>
                                <option value="5">User 4</option>
                            </select>
                        </div> 
                    )
                } 
            })()}
        </div>
    )
}

export default UserSelectionView