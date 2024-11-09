import GradientTitle from '@/app/components/GradientTitle'

export default function Reminder() {
  return (
    <div className="flex-1">
      <div>
        <GradientTitle className="from-orange to-yellow mb-2">
          Tools, Apps & Gear
        </GradientTitle>
      </div>

      <iframe
        className="rounded-xl"
        src="https://open.spotify.com/embed/track/3QI5bIozef0HZ1kJnA2RdT?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}
