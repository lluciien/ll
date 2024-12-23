'use client'

import * as React from "react"
import Image from "next/image"

const images = [
  { src: '/placeholder.svg?height=300&width=400', alt: 'Gallery Image 1' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Gallery Image 2' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Gallery Image 3' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Gallery Image 4' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Gallery Image 5' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Gallery Image 6' },
]

export function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div>
  )
}

