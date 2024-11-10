'use server'

import { Resend } from 'resend'

export default async function sendEmail() {
  const resend = new Resend(process.env.RESEND_API_KEY)

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'mbvictorsantos@gmail.com',
    subject: 'Contato pelo site',
    html: '<p>A nathalia eh muito chata</p>',
  })
}