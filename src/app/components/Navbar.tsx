'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pages = [
    'Home',
    'About',
    'Projects',
    'Posts',
    'Tools',
    'Reminder',
    'Contact',
  ]
  const currentPathname = usePathname()

  return (
    <div className="pl-2 mb-12 max-h-full overflow-x-scroll">
      <header>
        <nav className="w-full">
          <ul className="flex gap-4 w-fit ml-auto mr-auto py-3">
            {pages.map(page => {
              const path = page === 'Home' ? '/' : `/${page.toLowerCase()}`

              return (
                <li key={page}>
                  <Link
                    href={path}
                    passHref
                    className={`relative uppercase hover:bg-hover transition-colors py-3 px-4 rounded font-body no-underline text-xs text-secondary transition-color ${
                      currentPathname === path
                        ? '[&_span]:text-primary underline'
                        : ''
                    }`}
                  >
                    <span>{page}</span>

                    {currentPathname === path && (
                      <div className="absolute w-full h-[1px] mt-0.5 flex justify-center">
                        <div className="w-5 h-[1px] bg-primary" />
                      </div>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </div>
  )
}
