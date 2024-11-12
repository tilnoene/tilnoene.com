'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import ToastProvider from '@/app/utils/toastProvider'

import Button from '@/app/components/Button'
import Input from '@/app/components/Input'
import sendEmail from '@/app/contact/sendEmail'

import { FaArrowRight } from 'react-icons/fa6'
import { CgSpinner } from 'react-icons/cg'

const messageSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(128, 'Name cannot exceed 128 characters'),
  email: z
    .string()
    .min(3, 'Email must be at least 3 characters')
    .max(128, 'Email cannot exceed 128 characters')
    .email('Invalid email format'),
  message: z
    .string()
    .min(3, 'Message must be at least 3 characters')
    .max(1024, 'Message cannot exceed 1024 characters'),
})

type messageData = z.infer<typeof messageSchema>

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = (data: messageData) => {
    setLoading(true)

    sendEmail(data.name, data.email, data.message)
      .then(() => {
        toast.success('Message sent successfully!')
        reset()
      })
      .catch(error => {
        toast.error(
          'An error occurred while sending your message. Please try again later.'
        )
        console.error(error)
      })
      .finally(() => setLoading(false))
  }

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<messageData>({
    resolver: zodResolver(messageSchema),
  })

  return (
    <ToastProvider>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Input
          label="Name"
          placeholder="Victor Santos"
          maxLength={128}
          error={errors.name !== undefined}
          errorMessage={
            errors.name === undefined ? '' : (errors.name.message as string)
          }
          {...register('name')}
          disabled={loading}
        />

        <Input
          label="Email"
          type="email"
          placeholder="mbvictorsantos@gmail.com"
          maxLength={128}
          error={errors.email !== undefined}
          errorMessage={
            errors.email === undefined ? '' : (errors.email.message as string)
          }
          {...register('email')}
          disabled={loading}
        />

        <Input
          label="Message"
          placeholder="How can I help you?"
          maxLength={1024}
          multiline
          error={errors.message !== undefined}
          errorMessage={
            errors.message === undefined
              ? ''
              : (errors.message.message as string)
          }
          {...register('message')}
          disabled={loading}
        />

        <Button
          type="submit"
          className={`w-fit ${loading ? 'cursor-not-allowed' : ''}`}
        >
          <b className={`${loading ? 'text-secondary' : 'text-primary'}`}>
            Send
          </b>
          {loading ? (
            <CgSpinner className="animate-spin" size={22} />
          ) : (
            <FaArrowRight />
          )}
        </Button>
      </form>
    </ToastProvider>
  )
}
