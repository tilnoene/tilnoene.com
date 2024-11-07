'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pages = ['Home', 'About', 'Posts', 'Projects', 'Tools', 'Contact']
  const currentPathname = usePathname()

  return (
    <div className="pl-2 mb-12 max-h-full overflow-x-scroll">
      <header>
        <nav className="w-full">
          <ul className="flex gap-12 w-fit ml-auto mr-auto py-3">
            {pages.map(page => {
              const path = page === 'Home' ? '/' : `/${page.toLowerCase()}`

              return (
                <li key={page}>
                  <Link
                    href={path}
                    passHref
                    className={`uppercase font-body no-underline text-xs text-secondary transition-color ${
                      currentPathname === path
                        ? '[&_span]:text-primary underline'
                        : '' // TODO: transition
                    }`}
                  >
                    <span>{page}</span>

                    {currentPathname === path && (
                      <div className="w-5 h-[1px] mt-0.5 bg-primary ml-auto mr-auto" />
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
