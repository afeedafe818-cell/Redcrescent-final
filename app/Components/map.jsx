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
  const zoom = 14;

  useEffect(() => {
    if (map.current) return;

    maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: "base-v4",
      center: [Feroke.lng, Feroke.lat],
      zoom: zoom,
      cooperativeGestures: true,
    });
  }, [Feroke.lng, Feroke.lat, zoom]);

  return (
    <div className="map-wrap">
      <Box
        ref={mapContainer}
        className="map relative z-50 mt-8 h-[28rem] w-full sm:mt-12 sm:h-[37.5rem]"
        sx={{ marginLeft: 0 }}
      />
    </div>
  );
}
