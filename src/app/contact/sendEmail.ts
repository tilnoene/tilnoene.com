'use server'

import { Resend } from 'resend'

export default async function sendEmail(name: string, email: string, message: string) {
  return new Promise(resolve => setTimeout(resolve, 3000));

  const resend = new Resend(process.env.RESEND_API_KEY)

  if (process.env.RESEND_FROM_EMAIL && process.env.RESEND_TO_EMAIL) {
    return resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject: 'Contato pelo site',
      html: `<div>
              <p>De: ${name}</p>
              <p>Email: ${email}</p>
              <br />
              <p>${message}</p>
            </div>`,
    })
  } else {
    throw new Error("Missing enviroment variables RESEND_FROM_EMAIL and/or RESEND_TO_EMAIL")
  }
}