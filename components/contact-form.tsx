'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un email válido'),
  subject: z.string().min(3, 'El asunto debe tener al menos 3 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  onSuccess?: () => void
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real app, you would send this to an API endpoint
      console.log('Form data:', data)

      setSubmitStatus('success')
      reset()
      onSuccess?.()

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Name field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
          Nombre
        </label>
        <Input
          id="name"
          placeholder="Tu nombre"
          {...register('name')}
          className={errors.name ? 'border-destructive' : ''}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          {...register('email')}
          className={errors.email ? 'border-destructive' : ''}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Subject field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
          Asunto
        </label>
        <Input
          id="subject"
          placeholder="¿En qué puedo ayudarte?"
          {...register('subject')}
          className={errors.subject ? 'border-destructive' : ''}
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
          Mensaje
        </label>
        <Textarea
          id="message"
          placeholder="Tu mensaje aquí..."
          rows={5}
          {...register('message')}
          className={errors.message ? 'border-destructive' : ''}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Status messages */}
      {submitStatus === 'success' && (
        <motion.div
          className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ¡Mensaje enviado con éxito! Te contactaré pronto.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
        </motion.div>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </Button>
    </motion.form>
  )
}
