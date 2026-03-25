"use client";

import { useEffect, useRef } from "react";
import type { KakaoPlaceResult } from "@/types/kakao";
import "@/types/kakao";

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=930983315c5ab82403514bc85728fa01&libraries=services&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!mapRef.current) return;

        const map = new window.kakao.maps.Map(mapRef.current, {
          center: new window.kakao.maps.LatLng(37.3947, 126.9566),
          level: 3,
        });

        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch("누리봄아동청소년발달연구소", (data: KakaoPlaceResult[], status: string) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(Number(data[0].y), Number(data[0].x));
            map.setCenter(coords);

            const marker = new window.kakao.maps.Marker({ map, position: coords });

            const infowindow = new window.kakao.maps.InfoWindow({
              content: '<div style="padding:6px 10px;font-size:13px;font-weight:600;">누리봄아동청소년발달연구소</div>',
            });
            infowindow.open(map, marker);
          }
        });
      });
    };
    document.head.appendChild(script);
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
}
