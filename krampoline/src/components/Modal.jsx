import React, { useEffect } from 'react'
import ProductCard from './products/ProductCard'

export default function Modal({ isOpen, onClose, program }) {
  useEffect(() => {
    const handleOutsideClick = event => {
      if (event.target.classList.contains('modal-overlay')) {
        onClose()
      }
    }

    window.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-50 modal-overlay">
      <div className="w-full max-w-[390px] mb-[25px]">
        <ProductCard program={program} />
      </div>
    </div>
  )
}
