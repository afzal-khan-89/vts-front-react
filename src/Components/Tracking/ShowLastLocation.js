import React from 'react'
import { Map, TileLayer, Polyline, useMap } from "react-leaflet";
import L from "leaflet";


function ShowLastLocation(props) {
    const startPosition = [23.809405, 90.361806]
    console.log("props pos :")
    console.log(props.positions)
    const map = useMap()
    L.marker.positions(startPosition).addTo(map)

    return null 
}

export default ShowLastLocation