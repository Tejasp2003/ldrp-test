'use client'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'

import DocScribePageIcon from '../icons/DocScribePageIcon'
import { cn } from '@/lib/utils'

interface MobileSidebarProps {
  children: React.ReactNode
}

const nativeNavigations = [
  {
    title: 'Sidebar',
    id: 'sidebar',
    customIcon: Menu,
  },
  {
    title: 'Pages',
    id: 'pages',
    customIcon: DocScribePageIcon,
  },
] as const

const MobileSidebar: React.FC<MobileSidebarProps> = ({ children }) => {
  const [selectedNav, setSelectedNav] = useState('')

  return (
    <>
      {selectedNav === 'sidebar' && <>{children}</>}
      <nav className="bg-black/10 backdrop-blur-lg sm:hidden fixed z-50 bottom-0 right-0 left-0">
        <ul className="flex justify-between items-center p-4">
          {nativeNavigations.map((item) => (
            <li
              className="flex items-center flex-col justify-center"
              key={item.id}
              onClick={() => setSelectedNav(item.id)}
            >
              <item.customIcon />
              <small
                className={cn('', {
                  'text-muted-foreground': selectedNav !== item.id,
                })}
              >
                {item.title}
              </small>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default MobileSidebar
