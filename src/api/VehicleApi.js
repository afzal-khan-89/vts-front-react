import axios from "axios";

const ASSET_URL = '/api/v1/asset/'

export const getUserAllVehicle = async(user)=>{
    try{
        const data = await axios.get(`http://localhost:8080/api/v1/asset/${user}/all`)
        console.log('USER_ALL_VEHICLE : ')
        console.log(data)
        return data.data;
    }catch{
        console.log('fail: fetch user all vehicle ')
    }
}

export const getUsersVehicleByGroup = async(user, group)=>{
    try{
        const response = await axios.get(`http://localhost:8080/api/v1/asset/asset-by-group`, {
            params: {
                group_name : group,
                user_name : user
            }
        })
        console.log(response.data)
        return response.data
    }catch{
        console.log('::getUsersVehicleByGroup::in catch')
    }
}