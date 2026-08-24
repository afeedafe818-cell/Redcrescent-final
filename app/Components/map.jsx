"use client";
import React, { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import Box from "@mui/material/Box";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const Feroke = { lng: 75.8481732, lat: 11.1824855 };
  const zoom = 16;
  maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;
        console.log(
  "API KEY:",
  process.env.NEXT_PUBLIC_MAPTILER_API_KEY
);

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
    style: maptilersdk.MapStyle.STREETS, 
      center: [Feroke.lng, Feroke.lat],
      zoom: zoom,
      cooperativeGestures: true,
    });
  }, [Feroke.lng, Feroke.lat, zoom]);

  return (
    <div className="map-wrap">
      <Box
        ref={mapContainer}
        className="map"
        sx={{
          marginLeft: 1,
          width: 1500,
          height: 600,
          marginTop: 15,
          position: "relative",
          zIndex: 50,
        }}
      />

      
    </div>
  );
}
