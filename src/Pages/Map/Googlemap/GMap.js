import { react, useRef, useEffect } from 'react'
import MapContent from './MapContent';

const GMap = () => {
  const googleMapRef = useRef();
  let googleMap;
//   useEffect(() => {
//     const googleMapScript = document.createElement("script");
//     googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
//     googleMapScript.async = true;
//     window.document.body.appendChild(googleMapScript);
//     googleMapScript.addEventListener("load", () => {
//       createGoogleMap()
//     });
//   }, []);
 const createGoogleMap = () =>
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 16,
      center: {
        lat: 43.642567,
        lng: -79.387054,
      },
      disableDefaultUI: true,
  })
  // const createGoogleMap = (coordinates) => {
  //   googleMap = new window.google.maps.Map(googleMapRef.current, {
  //     zoom: 16,
  //     center: {
  //       lat: coordinates.lat(),
  //       lng: coordinates.lng(),
  //     },
  //     disableDefaultUI: true,
  //   });
  // };
  // const getLatLng = () => {
  //   let lat, lng, placeId;
  //   new window.google.maps.Geocoder().geocode(
  //     { address: `dhaka` },
  //     function (results, status) {
  //       if (status === window.google.maps.GeocoderStatus.OK) {
  //         placeId = results[0].place_id;
  //         createGoogleMap(results[0].geometry.location);
  //         lat = results[0].geometry.location.lat();
  //         lng = results[0].geometry.location.lng();
  //         new window.google.maps.Marker({
  //           position: { lat, lng },
  //           map: googleMap,
  //           animation: window.google.maps.Animation.DROP,
  //           title: `dhaka`,
  //         });
  //       } else {
  //         alert(
  //           "Geocode was not successful for the following reason: " + status
  //         );
  //       }
  //     }
  //   );
  // };
  return (
    <div className = "tracking-container fixed  w-screen  m-auto mt-14">
      <div id="google-map" ref={googleMapRef} style={{ height: '100vh', width: '100%'}} />
      <MapContent />
    </div>

  );
};

export default GMap