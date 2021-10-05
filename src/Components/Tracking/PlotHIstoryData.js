import React, { useRef, useEffect } from "react";
import { Map, TileLayer, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-polylinedecorator";


const PlotHistoryData = (props) =>{
    console.log("props pos :")
    console.log(props.positions)
    const map = useMap()
    var polyline = L.polyline(props.positions, {color: 'purple', weight: '4'}).addTo(map);
    L.polylineDecorator(polyline, {
        patterns: props.patterns
    }).addTo(map);

    return null 
}

export default PlotHistoryData