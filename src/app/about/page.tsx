import Image from 'next/image'

import profileImage from '@/app/assets/victor-computador.jpg'
import GradientTitle from '@/app/components/GradientTitle'

export default function About() {
  return (
    <div>
      <GradientTitle className="from-pink to-purple mb-4">
        Programming goes far beyond syntax
      </GradientTitle>

      <div className="flex gap-8">
        <Image
          width={333}
          height={333}
          src={profileImage}
          alt="Victor Santos profile picture"
          className="rounded-lg"
          priority
          // placeholder="blur"
          // blurDataURL="" TODO: colocar 10px or less image base64
        />

        <div>
          <p>
            <strong>Hey, I'm Victor Santos!</strong> I started programming in
            2019, etc
          </p>

          <br />

          <p>OBI Medalist and ICPC Finalist</p>

          <br />

          <p>
            When I'm not working, I like running, playing guitar and{' '}
            <strong>cooking</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}
