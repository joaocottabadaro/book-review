import Image from 'next/image'

import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'

import dicordIcon from '../../../public/discord-icon.svg'
export default async function Page() {
  return (
    <div className=" bg-black-500 h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 lg:grid-rows-1 xl:min-h-[800px] ">
      <div className="relative ">
        <Image
          src="/signin-background.png"
          alt="Image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=" h-full object-contain p-14   "
        />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center py-12">
        <div className="mb-8 flex  w-full max-w-lg flex-col text-white">
          <h2 className="text-bold text-2xl">Boas vindas!</h2>
          <h3>Faça seu login! ou acesse como visitante</h3>
        </div>

        <div className=" flex  w-full max-w-lg  flex-col items-center gap-4">
          <form
            className="w-full"
            action={async () => {
              'use server'
              await signIn('discord')
            }}
          >
            <Button
              variant={'secondary'}
              type="submit"
              className="  h-20 w-full items-center justify-start  gap-4 p-6 "
            >
              <>
                <Image src={dicordIcon} alt={'img'} width={'32'} height="32" />
                Entrar com Discord
              </>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
