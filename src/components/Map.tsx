"use client";

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

interface MapProps {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function Map({ lat, lng }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const center = { lat, lng };

  if (!isLoaded) return <div className="w-full h-full bg-gray-100 animate-pulse rounded-lg" />;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      options={{
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
