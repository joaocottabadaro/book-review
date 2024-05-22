import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

interface SidebarItemPops {
  Icon: LucideIcon
  name: string
  open: boolean
}
export default function SidebarItem({ Icon, name, open }: SidebarItemPops) {
  const pathname = usePathname()

  const isActive = pathname === `/${name}`

  return (
    <Link
      href={name}
      className={cn(
        `text-md flex  w-full  flex-1 justify-center  gap-4  border-l-4   border-transparent p-3  capitalize`,
        isActive && '    border-indigo-500',
      )}
    >
      {/* <Image src={icon} width={25} height={25} alt={name} /> */}
      {<Icon />}
      {open && <h2 className="flex-1 text-left text-foreground">{name}</h2>}
    </Link>
  )
}
