import { useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 55.668253, lng: 12.558536 }), []);

  return <GoogleMap zoom={19} center={center} mapContainerClassName="w-full h-full"></GoogleMap>;
}
