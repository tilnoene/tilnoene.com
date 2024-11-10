import GradientTitle from '@/app/components/GradientTitle'
import ContactForm from '@/app/components/ContactForm'

export default function Contact() {
  return (
    <div className="flex-1">
      <div>
        <GradientTitle className="from-sky-500 to-purple mb-2">
          Send me an email.
        </GradientTitle>

        <p>Like in the old days.</p>
      </div>

      <div className="mt-10">
        <h2>Send an email</h2>

        <ContactForm />
      </div>
    </div>
  )
}
