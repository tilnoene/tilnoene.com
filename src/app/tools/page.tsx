import GradientTitle from '@/app/components/GradientTitle'

import { categories, Category, Item } from '@/app/data/tools'

export default function Projects() {
  return (
    <div>
      <div>
        <GradientTitle className="from-orange to-yellow mb-2">
          Tools, Apps & Gear
        </GradientTitle>

        <p>
          I often get messages asking about specific pieces of{' '}
          <strong>software or hardware I use</strong>. This is not a static
          page, it's a <strong>living document</strong> with everything that I'm
          using nowadays.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {categories.map((category: Category) => (
          <div key={category.name}>
            <h2>{category.name}</h2>

            <ul>
              {category.items.map((item: Item) => (
                <li key={item.title}>
                  <p>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>{' '}
                    <span>- {item.description}</span>
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
