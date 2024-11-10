'use client'

import { useState } from 'react'

import Button from '@/app/components/Button'
import Input from '@/app/components/Input'
import sendEmail from '@/app/contact/sendEmail'

import { FaArrowRight } from 'react-icons/fa6'

export default function ContactForm() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  function handleSendEmail() {
    sendEmail()
  }

  return (
    <form>
      <Input value={name} setValue={setName} />
      <Input value={email} setValue={setEmail} />
      <Input value={message} setValue={setMessage} />

      <Button
        onClick={(e: any) => {
          // TODO: tipar
          e.preventDefault()
          console.log('clicou')
          handleSendEmail()
        }}
        type="submit"
      >
        <b>Send</b>
        <FaArrowRight />
      </Button>
    </form>
  )
}
