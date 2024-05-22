'use client'

import { ArrowLeft, Book, HomeIcon, Telescope } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import SidebarItem from './sidebar-item'

interface SidebarProps {
  className?: string
}
export default function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState(false)

  const handleToggle = () => {
    setStatus(true)
    setIsOpen(!isOpen)
    setTimeout(() => setStatus(false), 500)
  }
  return (
    <div
      className={cn(
        `relative inset-x-4 bottom-4 top-4 hidden h-[calc(100vh-2rem)] rounded-lg  md:block`,
        status && 'duration-500',
        isOpen ? 'w-64' : 'w-[100px]',
        className,
      )}
    >
      <div className=" flex justify-center gap-2 border-l-4  border-transparent   p-4 ">
        <Book />
        {isOpen && <h1 className="text-nowrap ">Book Review</h1>}
      </div>
      <nav>
        <ArrowLeft
          className={cn(
            'absolute -right-3 top-20 cursor-pointer rounded-full  bg-background text-3xl text-foreground',
            !isOpen && 'rotate-180',
          )}
          onClick={handleToggle}
        />
        <div className="flex flex-col items-center justify-center  gap-2 p-4">
          <SidebarItem name="home" Icon={HomeIcon} open={isOpen} />
          <SidebarItem name="explorar" Icon={Telescope} open={isOpen} />
        </div>
      </nav>
    </div>
  )
}
