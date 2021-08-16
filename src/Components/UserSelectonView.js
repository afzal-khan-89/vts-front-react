import React from 'react'

const UserSelectionView = ({userType})=>{
    return(
        <>
            {(()=>{
                if (userType.includes('admin')){
                    return (
                        <div className="flex-1 p-4 bg-white  border-b border-gray-200">
                            <select class="w-full bg-white border border-gray-200  p-2 rounded cursor-pointer">
                                <option selected>Select Dealer</option>
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
                        <div className="flex-1 p-4 bg-white  border-b border-gray-200">
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
                } 
            })()}
        </>
    )
}

export default UserSelectionView