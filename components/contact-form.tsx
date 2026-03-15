'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre es necesario para iniciar el diálogo'),
  email: z.string().email('Por favor, ingresa un email válido'),
  subject: z.string().min(3, 'Indica el motivo de tu mensaje'),
  message: z.string().min(10, 'Permíteme conocer un poco más tus necesidades'),
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
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
      onSuccess?.()
      setTimeout(() => setSubmitStatus('idle'), 4000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Estilo base para los inputs "Zen"
  const inputClasses = "rounded-none border-0 border-b border-gray-200 bg-transparent px-0 py-4 focus-visible:ring-0 focus-visible:border-[#B22222] transition-all placeholder:text-[10px] placeholder:tracking-[0.3em] placeholder:text-gray-300 uppercase text-xs tracking-widest text-[#1A1A1A]"

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto space-y-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Nombre */}
        <div className="flex flex-col">
          <Input
            placeholder="Nombre"
            {...register('name')}
            className={`${inputClasses} ${errors.name ? 'border-[#B22222]' : ''}`}
            disabled={isSubmitting}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-[#B22222] mt-2 tracking-wider italic uppercase">{errors.name.message}</motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <Input
            type="email"
            placeholder="Email"
            {...register('email')}
            className={`${inputClasses} ${errors.email ? 'border-[#B22222]' : ''}`}
            disabled={isSubmitting}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-[#B22222] mt-2 tracking-wider italic uppercase">{errors.email.message}</motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Asunto */}
      <div className="flex flex-col">
        <Input
          placeholder="Asunto"
          {...register('subject')}
          className={`${inputClasses} ${errors.subject ? 'border-[#B22222]' : ''}`}
          disabled={isSubmitting}
        />
        <AnimatePresence>
          {errors.subject && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-[#B22222] mt-2 tracking-wider italic uppercase">{errors.subject.message}</motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Mensaje */}
      <div className="flex flex-col">
        <Textarea
          placeholder="Tu mensaje..."
          rows={4}
          {...register('message')}
          className={`${inputClasses} ${errors.message ? 'border-[#B22222]' : ''} resize-none`}
          disabled={isSubmitting}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-[#B22222] mt-2 tracking-wider italic uppercase">{errors.message.message}</motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Botón de envío con efecto de "Sello" */}
      <div className="flex flex-col items-center pt-6">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group relative overflow-hidden rounded-none bg-[#1A1A1A] hover:bg-[#B22222] text-white px-16 py-7 transition-all duration-700"
        >
          <span className="relative z-10 text-[10px] font-bold tracking-[0.4em] uppercase">
            {isSubmitting ? 'Enviando...' : 'Enviar Correspondencia'}
          </span>
          <motion.div 
            className="absolute inset-0 bg-[#B22222] translate-y-full group-hover:translate-y-0 transition-transform duration-500"
          />
        </Button>

        {/* Mensajes de Estado Flotantes */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0 }}
              className="mt-6 text-[11px] tracking-widest uppercase text-gray-500 italic"
            >
              El mensaje ha sido entregado. Gracias por tu paciencia.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.form>
  )
}