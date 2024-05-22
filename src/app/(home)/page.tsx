import { auth } from '@/auth'

import PopularBooks from '../_components/popular_books'
import RecentReviews from '../_components/recent_reviews'

export default async function Home() {
  const session = await auth()
  console.log('🚀 ~ Home ~ session:', session)

  return (
    <section className=" flex  w-full flex-col   gap-4  px-40">
      <h2 className="flex-1 text-2xl">Início</h2>

      <div className="flex flex-row gap-20">
        <RecentReviews />
        <PopularBooks />
      </div>
    </section>
  )
}
