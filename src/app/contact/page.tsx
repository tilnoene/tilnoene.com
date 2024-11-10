import GradientTitle from '@/app/components/GradientTitle'
import ContactForm from '@/app/components/ContactForm'

export default function Contact() {
  return (
    <div className="flex-1">
      <div>
        <GradientTitle className="from-cyan to-green mb-2">
          Send me an email.
        </GradientTitle>

        <p>Like in the old days.</p>
      </div>

      <div className="mt-7">
        {/* <h2 className="mb-2">Send an email</h2> */}

        <ContactForm />
      </div>
    </div>
  )
}
