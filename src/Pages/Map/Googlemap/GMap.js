import { react, useState, useRef, useEffect } from 'react'
import axios from 'axios';
import UserSelectionView from '../../../Components/UserSelectonView';
import Monitor from '../../../Components/Tracking/LeftMenu/Monitor';
import History from '../../../Components/Tracking/LeftMenu/History';
import Notifications from '../../../Components/Tracking/LeftMenu/Notificatons';

const GMap = () => {
  let googleMap;
  const googleMapRef = useRef();
  let[object, setObject] = useState({ imei:'', currentLocation: '', nearby_location:'',historyData:[] })

  const[trackintOption, setTrackingOption]=useState('monitor');                                 
  let userType = 'admin'
  let vehicleArray=[]

  const [assets, setAssets] = useState([
    {
      object: "",
      imei: "",
      status :"",
      latitude: "",
      longitude: "",
      speed: "",
      date : ""
    }
  ]);

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      createGoogleMap()
    });
  }, []);

  useEffect(() => {
        // axios.post('http://localhost:8000/api/v1/location/last', { })
        //      .then(function (response) {
        //           console.log('api ok ')
        //           console.log(response.data)
        //           showObjects(response.data)
        //      })
        //     .catch(function (error) {
        //           console.log(error);
        //      })
  }, [])

   useEffect(() => {
    // fetchAssetGroup('ovaga').then((data)=>{
    //     //console.log("::Monitor::assetgrpup::")
    //     //console.log(data)
    //     setAssetGroup(data)
    // })

}, [])



  const createGoogleMap = () =>{
      googleMap = new window.google.maps.Map(googleMapRef.current, {
        zoom: 8,
        center: {
          lat: 23.3453453,
          lng: 90.543433,
        },
        disableDefaultUI: true,
      })
      googleMap.addListener("click", onMapClick);
  }
  const onMapClick =  (e) =>{
      

  } 
  const showObjects = (objects) => {
    //  console.log("object view")
    //  console.log( objects.latitude )
    //  console.log( objects)
    var lastOpenedInfoWindow 
    objects.data.map(e => {
//      console.log(e.latitude )
//      console.log(e.longitude)
      var coordinates = {
          lat:  parseFloat(e.latitude),
          lng:  parseFloat(e.longitude),
      };
    
      var infowindow = new window.google.maps.InfoWindow({
        content: 'hello world',
        ariaLabel: "Uluru",
      });

      var marker = new window.google.maps.Marker({
        position: coordinates,
        map: googleMap,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
          labelOrigin: new window.google.maps.Point(15, -5),
          // size: new window.google.maps.Size(32, 32),
          anchor: new window.google.maps.Point(16, 32)
        },
        label: {
          text: "dk-metro-cha-005",
          color: "#D70E20",
          fontWeight: "bold"
        }
      });
      marker.addListener("click", (e) => {
        if (lastOpenedInfoWindow) {
          lastOpenedInfoWindow.close();
        }
        infowindow.open({

          anchor: marker,
          googleMap,

        });
        
        lastOpenedInfoWindow = infowindow
        setObject(
          {
            
              imei:e.imei, 
              currentLocation: 'EEQWRQEWR', 
              nearby_location:'QWERQER',
              historyData:["ADSAF","ASFDSAF","ASFDFDS"]
          }         
        )
      });
  })
}
const plotObjectRoute= (object) => {

  const flightPlanCoordinates = [
    { lat: 23.31422,   lng: 90.354542 },
    { lat: 23.5632324, lng: 90.438991 },
    { lat: 23.213444,  lng: 90.085653 },
    { lat: 23.623244,  lng: 90.567868 },
  ];
  const flightPath = new window.google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(googleMap);
}




const cbFromNotification=(vehicle)=>{


}
const cbFromHistory=(historyParam)=>{

}
const cbFromMonitor=(objects, message)=>{
  objects.map((o)=>{
    console.log(o.object)
    console.log(o.action)
    if(o.action.includes('show')){
      console.log('to show '+o.object)
    }
  })
    // console.log('asdffffffffffffffffffffffffffffffffffff')
    // if(message.includes('follow'))
    // {

    // }
    // else if(message.includes('show'))
    // {
    //   console.log('in ------')
    //   console.log(vehicles)

    //   axios.post('http://localhost:8000/api/v1/location/last', { 
    //       objects : vehicles
    //   })
    //   .then(function (response) {
    //         console.log('api okkk ')
    //         console.log(response.data)
    //         showObjects(response.data)
    //   })
    //   .catch(function (error) {
    //         console.log(error);
    //   })
    // }
}










return (
  <div className = "tracking-container fixed  w-screen  m-auto mt-14">
    <div id="google-map" ref={googleMapRef} style={{ height: '100vh', width: '100%'}} />
    <div  className="inline-block absolute  z-10000  w-1/5 rounded-t-lg inset-y-28 left-0 bg-white border border-gray-200 shadow-xl">              
                <div class="flex  rounded-lg text-sm gap-0.5" role="group">
                        <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-2  rounded-tl-lg outline-none focus:shadow-outline"
                            onClick={()=>{setTrackingOption('monitor')}}>Monitor</button>
                        <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-1.5  outline-none focus:shadow-outline"
                            onClick={()=>{setTrackingOption('history')}}>History</button>
                        <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-1.5  rounded-tr-lg outline-none focus:shadow-outline"
                            onClick={()=>{setTrackingOption('notifications')}}>Noitfications</button>
                 </div>
                {(()=>{
                    if(userType.includes('admin')){
                        return (
                            <div  className="bg-white pl-2 pt-2 pr-2">
                                <div className = "w-full">
                                    <UserSelectionView  userType = {'admin'} /> 
                                </div> 
                            </div> 
                        )
                    }
                    else{
                        return(
                            <div  className="bg-white p-1">
           
                            </div>
                        )
                    }
                })()}
                <div class="w-full px-2 ">
                    {(()=>{
                        if(trackintOption.includes('monitor')){
                            return  <Monitor cb={cbFromMonitor} objects = { assets }/>
                        }else if(trackintOption.includes('history')){
                            return  <History cb={cbFromHistory}/>
                        }else{
                            return  <Notifications cb={cbFromNotification}/>
                        }
                    })()}
                </div>  
            </div>  
            <div className="inline-block bg-white absolute  z-10000  w-2/5 mx-48 p-5 rounded-t-md inset-x-96 bottom-2 border border-gray-200 shadow-xl" >
                    <span className="text-sm font-light ">Vehicle: {object.imei}</span>
                    <hr />
                    <span className="text-sm font-light ">Location: {object.currentLocation}</span>
                    <hr />
                    <span className="text-sm font-light ">Vehicle: {vehicleArray}</span>
                    <hr />
                    <span className="text-sm font-light ">Location: {vehicleArray}</span>
                    <hr />
            </div>  
  </div>

  );
};

export default GMap