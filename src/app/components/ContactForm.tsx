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
    // TODO: validate data, throw errors. validate on submit is better, and then show the error message!

    sendEmail() // is there a way to check if there are errors on this? like, how to show
  }

  return (
    <form className="flex flex-col gap-5">
      <Input
        label="Name"
        placeholder="Victor Santos"
        maxLength={128}
        value={name}
        setValue={setName}
      />
      <Input
        label="Email"
        placeholder="mbvictorsantos@gmail.com"
        maxLength={128}
        value={email}
        setValue={setEmail}
      />
      <Input
        label="Message"
        placeholder="How can I help you?"
        maxLength={1024}
        multiline
        value={message}
        setValue={setMessage}
      />

      <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault()
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
