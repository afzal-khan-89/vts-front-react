import React, { useState} from 'react'
import VehicleList from './VehicleList'
import NewVehicle from './NewVehicle'

const Vehicle = ()=>{
    const [content, setContent]=useState('vehicle_list')

    const onContentChange=(c)=>{
        setContent(c)
    }
    const getContent=()=>{
        if(content.includes('vehicle_list')){
            return <VehicleList cBack= {onContentChange}/>
        }else{
            return  <NewVehicle />
        }
    }

    return(
        <>
            {getContent()}
        </>
    )
}
export default Vehicle