'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFormState } from 'react-use-form-state'
import { submitToHubspot } from '../actions/hubspot'

const content = {
  en: {
    title: "Revolutionizing Intralogistics",
    description: "Supercharge your transshipment warehouse with smart forklift control",
    cta: "Sign up for updates",
    placeholder: "Enter your email",
    success: "Thank you for signing up!",
    error: "An error occurred. Please try again."
  },
  de: {
    title: "Revolutionierung der Intralogistik",
    description: "Optimieren Sie Ihr Umschlaglager mit smart gesteuerten Gabelstaplern",
    cta: "Für Updates anmelden",
    placeholder: "E-Mail eingeben",
    success: "Danke für Ihre Anmeldung!",
    error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
  }
}

export default function Hero({ language }) {
  const { title, description, cta, placeholder, success, error } = content[language]
  const [email, setEmail] = useState('')
  const [state, formAction] = useFormState(submitToHubspot, null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (state) {
      setMessage(state.success ? success : error)
      if (state.success) {
        setEmail('')
      }
    }
  }, [state, success, error])

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-purple-700 opacity-70"></div>
        <div className="absolute inset-0 bg-[url('/random_graph.png')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{description}</p>
          <form action={formAction} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-gray-900"
              />
              <Button type="submit" className="bg-teal-500 text-white hover:bg-teal-600">{cta}</Button>
            </div>
          </form>
          {message && <p className="mt-4 text-lg">{message}</p>}
        </div>
      </div>
    </section>
  )
}

