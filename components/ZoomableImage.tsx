"use client"

import { useState } from "react"
import Image from "next/image"

interface ZoomableImageProps {
  alt: string
  src: string
  width: number
  height: number
  className?: string
}

export default function ZoomableImage({
  alt,
  src,
  width,
  height,
  className,
}: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <>
      <div className={`cursor-zoom-in ${className}`} onClick={toggleZoom}>
        <Image src={src} alt={alt} width={width} height={height} className="rounded-lg" />
      </div>

      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={toggleZoom}
        >
          <div className="relative max-w-screen-lg max-h-screen-lg" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="object-contain w-auto h-auto max-w-full max-h-[90vh]"
            />
            <button
              onClick={toggleZoom}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              aria-label="Close image"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  )
} 