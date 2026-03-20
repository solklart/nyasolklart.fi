"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapProps {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function Map({ lat, lng }: MapProps) {
  const center = { lat, lng };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
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
    </LoadScript>
  );
}
