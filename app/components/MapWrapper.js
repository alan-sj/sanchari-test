"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("./Mapview"), {
  ssr: false,
});

const MapWrapper = () => {
  return (
    <div className="flex h-screen">
      <MapView />
    </div>
  );
};

export default MapWrapper;
