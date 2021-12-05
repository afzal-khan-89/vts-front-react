import axios from "axios";

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