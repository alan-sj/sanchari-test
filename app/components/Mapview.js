"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState  } from "react";

const MapView = ({userPosition}) => {
  const defaultPosition=[10.8505, 76.2711];
  const [position, setPosition]= useState(defaultPosition);

  useEffect(()=>{
    if(userPosition){
        setPosition(userPosition);
    }
  },[userPosition]);

  return (
    <div className="flex-1">
      <MapContainer center={position} zoom={5} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
      </MapContainer>
    </div>
  );
};
export default MapView;
