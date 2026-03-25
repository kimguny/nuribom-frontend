export interface KakaoLatLng {
  getLat: () => number;
  getLng: () => number;
}

export interface KakaoMapInstance {
  setCenter: (latlng: KakaoLatLng) => void;
}

export interface KakaoMarker {
  setMap: (map: KakaoMapInstance | null) => void;
}

export interface KakaoInfoWindow {
  open: (map: KakaoMapInstance, marker: KakaoMarker) => void;
}

export interface KakaoPlaceResult {
  x: string;
  y: string;
}

export interface KakaoSDK {
  maps: {
    load: (callback: () => void) => void;
    Map: new (container: HTMLDivElement, options: object) => KakaoMapInstance;
    LatLng: new (lat: number, lng: number) => KakaoLatLng;
    Marker: new (options: object) => KakaoMarker;
    InfoWindow: new (options: object) => KakaoInfoWindow;
    services: {
      Places: new () => {
        keywordSearch: (
          query: string,
          callback: (data: KakaoPlaceResult[], status: string) => void
        ) => void;
      };
      Status: { OK: string };
    };
  };
}

declare global {
  interface Window {
    kakao: KakaoSDK;
  }
}
