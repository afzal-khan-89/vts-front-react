import axios from "axios";


export const fetchAssetGroup = async(user)=>{
    try{
        const response = await axios.get(`http://localhost:8080/api/v1/asset-group/${user}/all`)
        console.log("fetch assetGroup ")
        console.log(response)
        const assetGroup = response.data
        return assetGroup;
    }catch{
        console.log('fail to fetch asset group ')
    }

}