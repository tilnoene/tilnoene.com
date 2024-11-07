import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

export default function Home() {
  return (
    <div className="flex-1 flex justify-center flex-col gap-5">
      <h1 className="text-5xl">Victor Santos</h1>

      <div>
        <p>
          <strong>
            Undergraduate CS Student @{' '}
            <a
              href="https://international.unb.br/"
              target="_blank"
              rel="noreferrer"
            >
              UnB
            </a>
          </strong>
        </p>

        <p className="mt-1">
          <i>Programming goes far beyond syntax</i>
        </p>
      </div>

      <Link
        href="/about"
        className="py-3 flex gap-2 no-underline hover:bg-hover transition-colors w-fit px-3 rounded-lg ml-[-12px]"
      >
        <b>About Me</b>
        <FaArrowRight />
      </Link>
    </div>
  )
}
