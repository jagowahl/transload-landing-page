'use client'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Team from './components/Team'
import CTA from './components/CTA'

export default function Home() {
  const [language, setLanguage] = useState('de')

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <Features language={language} />
        <HowItWorks language={language} />
        <Benefits language={language} />
        <Team language={language} />
        <CTA language={language} />
      </main>
    </div>
  )
}

