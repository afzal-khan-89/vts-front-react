import axios from "axios";

const URL_LOCATION_LAST = 'http://localhost:8080/api/v1/location/last'
const URL_LOCATION_HISTORY = 'http://localhost:8080/api/v1/location/history'

export const getLastLocation = async()=>{
    try{
        const data = await axios.get(URL_LOCATION_LAST, {
            params : {

            },
            headers : {

            }
        })
    }catch{

    }

}
export const getLocationHistory = async(vehicle, start_time, end_time)=>{
    try{
        const data = await axios.get(URL_LOCATION_HISTORY, {
            params: {
                vehicle : vehicle,
                startTime : start_time,
                endTime : end_time
            },
            headers : {


            }
        })
        console.log('data >>>')
        console.log(data)
    }catch{
        console.log("fail to fetch location data !")
    }
}

export const getRawData = async(p, h, v)=>{
    try{
        const data = await axios.get(`url/demo/${p}`, {
            params: {

            },
            headers: {

            }
        })
        return data
    }catch{
        console.log('error to fetch raw data ')
    }
}