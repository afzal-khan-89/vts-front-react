import { react, useRef, useEffect } from 'react'
import MapContent from './MapContent';

const GMap = () => {
  const googleMapRef = useRef();
  let googleMap;
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      createGoogleMap()
      plotObjectHistory()
    });
  }, []);

  useEffect(() => {
    // getUserAllVehicle('ovaga').then((data)=>{
    //     //console.log("::Monitor::")
    //     //console.log(data)
    //     setSavedAsset(data)
    //     setAssets(data)
    // })

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
      zoom: 16,
      center: {
        lat: 23.3453453,
        lng: 90.543433,
      },
      disableDefaultUI: true,
  })
  googleMap.addListener("click", onMarkerClicke);
 }

 const onMarkerClicke =  (e) =>{
      
  console.log("map clicked ")
  var coordinates = {
   lat:  23.3453453,
   lng:  90.543433
 };
  var marker = new window.google.maps.Marker({
   position: coordinates,
   map: googleMap,
   icon: {
     url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
     labelOrigin: new window.google.maps.Point(75, 32),
     size: new window.google.maps.Size(32, 32),
     anchor: new window.google.maps.Point(16, 32)
   },
   label: {
     text: "5409 Madison St",
     color: "#C70E20",
     fontWeight: "bold"
   }
 });
} 




const showObjects = (objects) => {




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

const monitorObject = (object) =>{




}
const refeshMap = () => {




}
return (
  <div className = "tracking-container fixed  w-screen  m-auto mt-14">
    <div id="google-map" ref={googleMapRef} style={{ height: '100vh', width: '100%'}} />
    <MapContent monitorObjectCB = { monitorObject }  showObjectCB = { showObjects }  plotObjectRout = { plotObjectRoute } />
  </div>

  );
};

export default GMap