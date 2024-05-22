import { Star } from 'lucide-react'
import React from 'react'

interface RatingProps {
  value: number
}
export default function Rating({ value }: RatingProps) {
  return (
    <div className="flex flex-row gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < value) return <Star key={i} fill="bg-primary" />

        return <Star key={i} />
      })}
    </div>
  )
}
