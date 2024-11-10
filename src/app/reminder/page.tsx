import GradientTitle from '@/app/components/GradientTitle'

export default function Reminder() {
  return (
    <div className="flex-1">
      <div>
        <GradientTitle className="from-sky-500 to-purple mb-2">
          Reminder
        </GradientTitle>

        <p></p>
      </div>

      <div className="mt-10">
        <iframe
          className="rounded-xl"
          src="https://open.spotify.com/embed/track/3QI5bIozef0HZ1kJnA2RdT#0:00?utm_source=generator"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          allowFullScreen
        ></iframe>

        <br />

        <iframe
          className="rounded-xl"
          src="https://open.spotify.com/embed/track/0IEVEtKQ4kRgZehxyfUrKS?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}
