import { Map, GoogleApiWrapper } from 'google-maps-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react'

const MyTrackingMap=(props)=>{
    const mapStyles = {
        width: '100%',
        height: '100%',
    };
    return (
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAebbR9Gxlqp3tvMytjivpOAfPiCpzZxs8'
})(MyTrackingMap);