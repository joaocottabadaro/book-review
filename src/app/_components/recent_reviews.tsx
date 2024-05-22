'use client'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Image from 'next/image'

import Rating from '@/components/rating'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const RecentReviews = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <h3 className="flex h-6">Recent reviews</h3>
      {Array.from({ length: 3 }).map((_, i) => {
        return (
          <Card className="h-[300px] w-[600px] flex-grow" key={i}>
            <CardHeader className="flex flex-row items-center justify-start gap-2">
              <Avatar className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Joao</CardTitle>
                <span>hoje</span>
              </div>

              <div className="ml-auto">
                <Rating value={3} />
              </div>
            </CardHeader>
            <CardContent className="  flex  w-full  flex-row items-center justify-between gap-5 ">
              <div className="flex w-1/4">
                <AspectRatio ratio={3 / 4}>
                  <Image
                    src="/book.png"
                    alt="Photo by Drew Beamer"
                    fill
                    className="object-fit  rounded-md  "
                  />
                </AspectRatio>
              </div>
              <div className="flex h-full w-2/3 flex-grow flex-col justify-between gap-4 ">
                <div>
                  <h2>A revolução dos bichos</h2>
                  <p>George Orwell</p>
                </div>
                <p className="line-clamp-4">
                  Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                  sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                  lectus leo. Sit porta eget nec vitae sit vulputate egetNec
                  tempor nunc in egestas. Euismod nisi eleifend at et in
                  sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                  lectus leo. Sit porta eget nec vitae sit vulputate eget
                </p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default RecentReviews
