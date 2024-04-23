import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import DocScribeHomeIcon from '../icons/DocScribeHomeIcon'
import DocScribeSettingsIcon from '../icons/DocScribeSettingsIcon'
import DocScribeTrashIcon from '../icons/DocScribeTrashIcon'
import Settings from '../settings/Settings'
import Trash from '../trash/Trash'

interface NativeNavigationProps {
  myWorkspaceId: string
  className?: string
}

const NativeNavigation: React.FC<NativeNavigationProps> = ({
  myWorkspaceId,
  className,
}) => {
  return (
    <nav className={cn('my-2', className)}>
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            className="group/native flex text-Neutrals/neutrals-7 transition-all gap-2"
            href={`/dashboard/${myWorkspaceId}`}
          >
            <DocScribeHomeIcon />
            <span>My Workspace</span>
          </Link>
        </li>
        <Settings>
          <li className="group/native flex text-Neutrals/neutrals-7 transition-all gap-2 cursor-pointer">
            <DocScribeSettingsIcon />
            <span>Settings</span>
          </li>
        </Settings>
        <Trash>
          <li className="group/native flex text-Neutrals/neutrals-7 transition-all gap-2 cursor-pointer">
            <DocScribeTrashIcon />
            <span>Trash</span>
          </li>
        </Trash>
      </ul>
    </nav>
  )
}

export default NativeNavigation
