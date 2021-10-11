import React, { useState } from 'react'
import './home.css'

export default function VehicleInfo() {


    let tArray = []
    for(var i=0; i<10; i++){
        tArray.push(''+i)
    }

    console.log('TEST ARRAY LENGTH '+tArray.length)
    return (
            <div className="mx-10 mt-2 bg-gray-100 border-l border-r border-t border-gray-300 overflow-y-auto">
                <div className="h-16 mt-2 mx-10">
                    <span>Toal {tArray.length} vehicles</span>
                </div>
                <div className="mx-10 border ">
                    <table class="w-full border">
                        <thead>
                            <tr class="bg-gray-50 border-b">
                                <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                    <div class="flex items-center justify-center">
                                        sl
                                    </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                <div class="flex items-center justify-center">
                                    Number Plate
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                <div class="flex items-center justify-center">
                                    Vehicle Code
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                <div class="flex items-center justify-center">
                                    Status
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm text-gray-600">
                                
                                    Speed Limit
                                
                            </th>
                            <th class="border-r cursor-pointer text-sm text-sm text-gray-600">
                                
                                    Driver
                              
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        {tArray.map((item)=>(
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 border-r">{item}</td>
                                <td class=" border-r">12345678901234</td>
                                <td class=" border-r">rtwert</td>
                                <td class=" border-r">active</td>
                                <td class=" border-r">50.00</td>
                                <td class=" border-r">Abdul Malek</td>
                            </tr>
                        ))}   
                    </tbody>
                </table>
                </div>      
            </div>     
    )
}
