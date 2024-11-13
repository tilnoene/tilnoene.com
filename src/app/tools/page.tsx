import Head from 'next/head'

import GradientTitle from '@/app/components/GradientTitle'

import { categories, Category, Item } from '@/app/data/tools'

export default function Tools() {
  return (
    <div className="flex-1">
      <Head>
        <title>Tools | Victor Santos</title>
        <meta property="og:title" content="Tools | Victor Santos" key="title" />
      </Head>

      <div>
        <GradientTitle className="from-orange to-yellow mb-2">
          Tools, Apps & Gear
        </GradientTitle>

        <p>
          {/* I often get messages asking about specific pieces of{' '}
          <strong>software or hardware I use</strong>. */}
          This is not a static page, it's a <strong>living document</strong>{' '}
          with everything that I'm using nowadays.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-7">
        {categories.map((category: Category) => (
          <div key={category.name}>
            <h2>{category.name}</h2>

            <ul className="flex flex-col gap-2 mt-1.5">
              {category.items.map((item: Item) => (
                <li key={item.title}>
                  <p>
                    <span className="mr-1 ml-2"> • </span>

                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:opacity-75"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span className="text-primary">{item.title}</span>
                    )}

                    {item.description && <span> - {item.description}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
