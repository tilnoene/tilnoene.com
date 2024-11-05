'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const pages = ['About', 'Articles', 'Projects', 'Uses', 'Contact']
  const [hovered, setHovered] = useState('')

  return (
    <div>
      <header>
        <nav>
          <ul>
            {pages.map(page => {
              const path = `/${page.toLowerCase()}`
              const isHovered = hovered === page

              return (
                <li key={page}>
                  <Link href={path} passHref>
                    <span
                    // onHoverStart={() => setHovered(page)}
                    // onHoverEnd={() => setHovered('')}
                    // css={
                    //   router.pathname == path
                    //     ? {
                    //         color: '$primary',
                    //         '&::after': { opacity: 1 },
                    //       }
                    //     : ''
                    // }
                    >
                      {isHovered && (
                        <span
                        // layoutId="nav"
                        // initial={{ opacity: 0 }}
                        // animate={{ opacity: 1 }}
                        // exit={{ opacity: 0 }}
                        />
                      )}
                      {page}
                    </span>
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
