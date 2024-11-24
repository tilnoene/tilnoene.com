'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pages = [
    'Home',
    'About',
    'Projects',
    'Blog',
    'Tools',
    // 'Reminder',
    'Contact',
  ]
  const currentPathname = usePathname()

  return (
    <div className="pl-2 mb-12 max-h-full overflow-x-scroll no-scrollbar">
      <header>
        <nav className="w-full">
          <ul className="flex gap-4 w-fit ml-auto mr-auto py-3">
            {pages.map(page => {
              const path = page === 'Home' ? '/' : `/${page.toLowerCase()}`

              return (
                <Link
                  key={page}
                  href={path}
                  passHref
                  className={`uppercase font-body no-underline text-xs mt-0.5 ${
                    currentPathname === path ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  <li className="hover:bg-hover transition-colors py-2.5 px-4 rounded cursor-pointer flex items-center relative">
                    {page}

                    {currentPathname === path && (
                      <div className="absolute w-full h-[1px] bottom-1.5 left-0 flex justify-center">
                        <div className="w-5 h-[1px] bg-primary" />
                      </div>
                    )}
                  </li>
                </Link>
              )
            })}
          </ul>
        </nav>
      </header>
    </div>
  )
}
