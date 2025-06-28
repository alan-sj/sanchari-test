"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const MapView = dynamic(() => import("./Mapview"), {
  ssr: false,
});
const UserLocation=dynamic(() => import("../components/UserLocation"),
{ ssr: false});


const MapWrapper = () => {
  const[userPosition, setUserPosition] = useState(null);

  return (
    <div className="flex h-screen">
      <UserLocation setUserPosition={setUserPosition} />
      <MapView userPosition={userPosition} />
    </div>
  );
};

export default MapWrapper;
