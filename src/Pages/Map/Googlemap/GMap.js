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
 
  const[markerQueue, setMarkerQueue] = useState([])
  const[markerQueueToFollow, setMarkerQueueToFollow] = useState([{object: '', markers:[{}]}])
  
  const[objectId, setObjectId] = useState(1)
  
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
              ariaLabel: "oppooppo",
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

          console.log(`ADDED TAG MARKER ${e.object}`)
          var tempQueue = markerQueue;
 
          for(let  ii=0; ii<tempQueue.length; ii++){
            if(tempQueue[ii].tag.includes(e.object)){
                console.log(`Marker exists !!!`)
                tempQueue[ii].setMap(null);
                tempQueue.splice(ii, 1); 
                break;
            }
          }
          tempQueue.push(marker)
          //setMarkerQueue(prevMarkerQueue => [...prevMarkerQueue, marker]);
          setMarkerQueue(tempQueue);
        
          markerQueue.map(m=>{
            console.log(`markers Lists : ${m.tag}`)
          })
      }
  }

const plotObjectRoute= (location) => {
    console.log(`next polt ${location.object}`)
    var newCoordinate = {
        lat:  parseFloat(location.latitude),
        lng:  parseFloat(location.longitude),
    }
    var newMarker = new window.google.maps.Marker({
        position: newCoordinate,
        map: gMap,
        title: location.object, 
        latitude: location.latitude,
        longitude: location.longitude
    });
    newMarker.addListener("click", (e) => {

    });

    var markersArray = markerQueueToFollow
    var lastCoordinate = null
    var strokeColor 
    markersArray.map(e=>{
        if(e.object.includes(location.object)){
            console.log(`FIND LAST OBJECT ${e.object} id:${e.id}`)
            lastCoordinate =  {
                lat:  parseFloat(e.markers[e.markers.length-1].latitude),
                lng:  parseFloat(e.markers[e.markers.length-1].longitude)
            }
            if(e.id==1) {  strokeColor = '#FF0000'}
            if(e.id==2) {  strokeColor = '#80ced6'}

            const coordinates = [
                lastCoordinate,
                newCoordinate
            ]
            const line = new window.google.maps.Polyline({
                path: coordinates,
                geodesic: true,
                strokeColor: strokeColor,
                strokeOpacity: 1.0,
                strokeWeight: 5,
            });               
            line.setMap(gMap);

            e.markers.push(newMarker)  
        }
    })
    if(!lastCoordinate){
        console.log(`FIRST SAVE ::::::::  ${location.object}`)
        var x = {id:objectId, object: location.object, markers:[newMarker]}
        markersArray.push(x)
        setObjectId(prevObjectId=>prevObjectId+1)
    }
   // console.log(`markers array ${markersArray}`)
    setMarkerQueueToFollow(markersArray)
}

const clearMarker = (marker)=>{
    console.log(`marker to remove ${marker}`)
//     var tempQueue = markerQueue;
//     for(let i=0; i<tempQueue.length; i++){
//         console.log(`IN TEMP QUEUE ${tempQueue[i].tag} `)
//         if(tempQueue[i].tag.includes(marker)){
//  //          tempQueue[i].setMap(null);
//             tempQueue.splice(i, 1);
//         }
//     }
//    // setMarkerQueue(tempQueue)  
}
const clearAllMarkers =() => {
    // var tempQueue = markerQueue;
    // for(let i=0; i<tempQueue.length; i++){      
    //     tempQueue[i].setMap(null);
    //     console.log(`marker clear for ${tempQueue[i].tag}`)
    // }
    // setMarkerQueue([])
}

const followObject=(s)=>{
 //  console.log(`to follow : ${s.object}`)

   plotObjectRoute(s)


}
const showObject=(s)=>{
 //   console.log(`TO SHOW : `)
    console.log(s)
    //clearMarker(s.object)
    // markerQueue.map((m)=>{
    //   console.log(` ~~~~~~~~~~Homondir fo : ${m.tag}~~~~~~~~~~~~~~~~~~`)
    // })
    showOnMap(s)
}
const removeObject=(s)=>{
  clearMarker(s.object)
}



const cbFromNotification=(vehicle)=>{





}
const cbFromHistory=(historyParam)=>{





}




const onClickTrackingMenu=((value)=>
{
    if(value.includes('monitor'))
    {
        console.log('monitor clicked')
        if(!trackintOption.includes('monitor')){
           setTrackingOption('monitor')
        }
        else{
            console.log('do nothing ...')
        }
    }
    else if(value.includes('history'))
    {
        console.log('history clicked ')
        if(!trackintOption.includes('history')){
            if(trackintOption.includes('monitor')){
                console.log('markar clear kora lagbe')
                clearAllMarkers()
            }               
            setTrackingOption('history')
        }
        else{
            console.log('do nothing ...')
        }
    }
    else if(value.includes('notifications'))
    {
        console.log('notifications clicked ')
        if(!trackintOption.includes('notifications')){
            if(trackintOption.includes('monitor')){
                clearAllMarkers()
            } 
            setTrackingOption('notifications')
        }
        else{
            console.log('do nothing ...')
        }
    }
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