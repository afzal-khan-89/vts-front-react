import React from 'react'

export default function PolyLine({map, maps}) {
    const flightPlanCoordinates = [
        { lat: 37.772, lng: -122.214 },
        { lat: 21.291, lng: -157.821 },
        { lat: -18.142, lng: 178.431 },
        { lat: -27.467, lng: 153.027 },
      ];
      const flightPath = map.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
    const setPolyLine=()=>{
        if(map == null){
            console.log('--in polyline :: map is null --')
        }
    }
    return (
          
        <div>
            { setPolyLine }
        </div>
    )
}
