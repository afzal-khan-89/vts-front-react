import { react, useState, useRef, useEffect } from 'react'
import axios from 'axios';
import UserSelectionView from '../../../Components/UserSelectonView';
import Monitor from '../../../Components/Tracking/LeftMenu/Monitor';
import History from '../../../Components/Tracking/LeftMenu/History';
import Notifications from '../../../Components/Tracking/LeftMenu/Notificatons';

const GMap = () => {

  const googleMapRef = useRef();

  const[gMap, setGMap] = useState()
  const[trackintOption, setTrackingOption]=useState('monitor');    
  const[assets, setAssets] = useState([])
 
  const[assetToPlot, setAssetToPlot] = useState()
  const[assetToShow, setAssetToShow] = useState()

  const[markerQueue, setMarkerQueue] = useState([])
   
  let googleMap ;
  let userType = 'admin'
  let vehicleArray=[]
  let [objectsInfo, setObjectsInfo] = useState({latitude : "", longitude : ""})
  let fObjects = []

  useEffect(() => {
    axios.post('http://localhost:8000/api/v1/object/info', { })
         .then(function (response) {
              response.data.data.map(e => {
                  e.objects.map(p=>{
                      fObjects.push(p)
                  })
              })
              setAssets(fObjects)
         })
        .catch(function (error) {
              console.log(error);
         })
  }, [])

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
        createGoogleMap()
        setGMap(googleMap)
        //showObjects({latitude : '23.030202', longitude: '90.2344322'})     
    });
  }, []);

  // useEffect(() => {
  //     console.log('----map use effect l-----')
  //     //showObjects({latitude : '23.330202', longitude: '90.2344322'})


  // }, [assetToPlot.time])

  // useEffect(() => {
  //     console.log('----map use effect l-----')
  //     showOnMap({latitude : '23.330202', longitude: '90.2344322'})



  // }, [assetToShow.time])



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
      console.log('map clicked')






  } 

  const showOnMap = (e) => {
      if(gMap){
          console.log(`let show ${e.latitude}  ${e.longitude}`)
              var lastOpenedInfoWindow 
              var coordinates = {
              lat:  parseFloat(e.latitude),
              lng:  parseFloat(e.longitude),
          }
          var infowindow = new window.google.maps.InfoWindow({
            content: 'hello world',
            ariaLabel: "Uluru",
          });
          var marker = new window.google.maps.Marker({
              position: coordinates,
              map: gMap,
              title: 'Hello World!', 
              tag: e.object
              // icon: {
              // url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              //   labelOrigin: new window.google.maps.Point(15, -5),
              //   size: new window.google.maps.Size(32, 32),
              //   anchor: new window.google.maps.Point(16, 32)
              // },
              // label: {
              //   text: "dk-metro-cha-005",
              //   color: "#D70E20",
              //   fontWeight: "bold"
              // }
          });
          marker.addListener("click", (e) => {
              if (lastOpenedInfoWindow) {
                  lastOpenedInfoWindow.close();
              }
              infowindow.open({
                  anchor: marker,
                  gMap,
              });
              lastOpenedInfoWindow = infowindow
              // setObject({
              //   imei:e.imei, 
              //   currentLocation: 'EEQWRQEWR', 
              //   nearby_location:'QWERQER',
              //   historyData:["ADSAF","ASFDSAF","ASFDFDS"]
              // })
          });
          setMarkerQueue([...markerQueue, marker]);
      }
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

const removeObjectFromMap = (e)=>{
  markerQueue.map((m)=>{
    if(m.tag){
      console.log(`"""TAG : ${m.tag}************`)
      if(m.tag.includes(e.object)){
          m.setMap(null);
          setMarkerQueue(markerQueue.filter(item => item === m));
      }
    }
  })
}




const followObject=(s)=>{
   console.log(`to follow : ${s.object}`)




}
const showObject=(s)=>{
    console.log(`To  show : ${s.latitude}  ${s.longitude}`)
    removeObjectFromMap(s)

    showOnMap(s)
}
const removeObject=(object)=>{




}



const cbFromNotification=(vehicle)=>{





}
const cbFromHistory=(historyParam)=>{





}




const onClickTrackingMenu=((value)=>
{
  let m=[] ;
  if(value.includes('monitor'))
  {
    console.log('monitor selected')
    setTrackingOption('monitor')
  }
  else if(value.includes('history'))
  {
    setTrackingOption('history')
  }
  else if(value.includes('notifications'))
  {
    setTrackingOption('notifications')
  }
 // setSelectedAssets([])
})




return (
  <div className = "tracking-container fixed  w-screen  m-auto mt-14">
    <div id="google-map" ref={googleMapRef} style={{ height: '100vh', width: '100%'}} />
    <div  className="inline-block absolute  z-10000  w-1/5 rounded-t-lg inset-y-28 left-0 bg-white border border-gray-200 shadow-xl">              
                <div class="flex  rounded-lg text-sm gap-0.5" role="group">
                        <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-2  rounded-tl-lg outline-none focus:shadow-outline"
                            onClick={()=>{onClickTrackingMenu('monitor')}}>Monitor</button>
                        <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-1.5  outline-none focus:shadow-outline"
                            onClick={()=>{onClickTrackingMenu('history')}}>History</button>
                        <button class="flex-1 bg-warmGray-200 text-red-500 hover:bg-warmGray-300 hover:red-500  px-4  py-1.5  rounded-tr-lg outline-none focus:shadow-outline"
                            onClick={()=>{onClickTrackingMenu('notifications')}}>Noitfications</button>
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
                            return  <Monitor follow = { followObject } show = { showObject }  remove = { removeObject }   objects = { assets }/>
                        }else if(trackintOption.includes('history')){
                            return  <History cb={cbFromHistory}/>
                        }else{
                            return  <Notifications cb={cbFromNotification}/>
                        }
                    })()}
                </div>  
            </div>  
            <div className="inline-block bg-white absolute  z-10000  w-2/5 mx-48 p-5 rounded-t-md inset-x-96 bottom-2 border border-gray-200 shadow-xl" >
                    <span className="text-sm font-light ">Vehicle: {objectsInfo.object}</span>
                    <hr />
                    <span className="text-sm font-light ">Location: {objectsInfo.currentLocation}</span>
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