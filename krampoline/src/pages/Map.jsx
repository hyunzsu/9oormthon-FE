import React, { useState, useEffect } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { getPrograms } from '../api/api'
import Modal from '../components/Modal'

export default function KakaoMap() {
  const [programs, setPrograms] = useState([])
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPrograms()
        setPrograms(data.programs)
        console.log(data.programs)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const handleMarkerClick = program => {
    setSelectedMarker(program)
    setIsOpenModal(true)
  }

  const handleModalClose = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <div className="bg-black w-full flex justify-center py-[20px]">
        <img
          src="https://raw.githubusercontent.com/workmeong-shimmeong/olleh-client/873e269331f41a51f9e12d2add62d54fce0a8344/src/assets/Logo.svg"
          alt=""
        />
      </div>
      <Map
        center={{ lat: 33.4499268, lng: 126.9185555 }}
        style={{ width: '100%', height: '750px' }}
        level={6}
      >
        {programs.map(program => (
          <MapMarker
            key={program.id}
            position={{ lat: program.latitude, lng: program.longitude }}
            image={{
              src: 'https://raw.githubusercontent.com/sryung1225/olleh-client/7170b292cc8931a4c5a95fcce204e74d96c9a602/src/assets/i-location.svg',
              size: {
                width: 64,
                height: 40,
              },
            }}
            title={program.name}
            onClick={() => handleMarkerClick(program)}
          />
        ))}
      </Map>
      <Modal
        isOpen={isOpenModal}
        onClose={handleModalClose}
        program={selectedMarker}
      />
    </>
  )
}
