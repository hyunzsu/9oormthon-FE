import React, { useState, useRef } from 'react'

export default function InputImage({ photos, setPhotos }) {
  const [size, setSize] = useState(0)
  const fileInputRef = useRef(null)
  const handleImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      const fileArray = Array.from(e.target.files).map(file =>
        URL.createObjectURL(file),
      )
      setPhotos(prevPhotos => prevPhotos.concat(fileArray).slice(0, 5))
      setSize(Math.min(e.target.files.length, 5))
      Array.from(e.target.files).map(file => URL.revokeObjectURL(file))
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="flex mb-[12px]">
      <button
        type="button"
        onClick={handleUploadClick}
        className="border-gray-300 border-[1px] rounded w-[70px] h-[70px] flex flex-col justify-center items-center bg-gray-50 mr-[10px]"
      >
        <img src="https://raw.githubusercontent.com/workmeong-shimmeong/olleh-client/873e269331f41a51f9e12d2add62d54fce0a8344/src/assets/i-photo.svg"></img>
        <span className="text-gray-400 text-[11px]">{size} / 5</span>
      </button>
      <input
        type="file"
        multiple
        ref={fileInputRef}
        className="a11yHidden"
        onChange={handleImageChange}
      />
      <div className="flex flex-wrap gap-[10px]">
        {photos.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`preview-${index}`}
            className="w-[70px] h-[70px] object-cover border-gray-300 border-[1px] rounded overflow-hidden"
          />
        ))}
      </div>
    </div>
  )
}
