import React from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

export default function KakaoMap() {
  return (
    <>
      <div className="bg-black w-full flex justify-center py-[20px]">
        <img
          src="https://raw.githubusercontent.com/workmeong-shimmeong/olleh-client/873e269331f41a51f9e12d2add62d54fce0a8344/src/assets/Logo.svg"
          alt=""
        />
      </div>
      <Map
        center={{ lat: 37.5665, lng: 126.978 }}
        style={{ width: '100%', height: '750px' }}
      >
        <MapMarker position={{ lat: 37.5665, lng: 126.978 }}>
          <div style={{ color: '#000' }}>Hello, World!</div>
        </MapMarker>
      </Map>
    </>
  )
}
