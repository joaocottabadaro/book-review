'use client'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

import Rating from '@/components/rating'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function PopularBooks() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-6 flex-row items-center justify-between">
        <h3>Popular reviews</h3>
        <Button variant={'ghost'} className="flex ">
          See all
          <ArrowRight />
        </Button>
      </div>
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <Card
            key={i}
            className="flex  h-[150px]  min-w-[400px]  flex-row  p-4"
          >
            <CardContent className="  flex  w-full  flex-row items-center justify-between gap-5 p-0">
              <div className="flex h-full w-1/4">
                <AspectRatio ratio={16 / 9} className="   bg-muted  ">
                  <Image
                    src="/book.png"
                    alt="Photo by Drew Beamer"
                    fill
                    sizes="(max-width: 768px) 100px, (max-width: 1200px) 100px"
                    className="object-fit  rounded-md  "
                  />
                </AspectRatio>
              </div>
              <div className="flex h-full flex-grow flex-col justify-between">
                <div>
                  {' '}
                  <h2>A revolução dos bichos</h2>
                  <p>George Orwell</p>
                </div>

                <Rating value={3} />
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
