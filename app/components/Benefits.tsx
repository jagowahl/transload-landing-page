'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const benefits = {
  en: [
    'Reduce operational costs',
    'Increase warehouse efficiency and throughput',
    'Minimize forklift idle time and unnecessary movement',
    'Achieve faster ROI compared to full automation'
  ],
  de: [
    'Reduzierung der Betriebskosten',
    'Steigerung der Lagereffizienz und des Durchsatzes',
    'Minimierung von Gabelstapler-Leerlaufzeiten und unnötigen Bewegungen',
    'Schnellerer ROI im Vergleich zur vollständigen Automatisierung'
  ]
}

export default function Benefits({ language }) {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-400">
          {language === 'en' ? 'Benefits for Your Business' : 'Vorteile für Ihr Unternehmen'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits[language].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start bg-gray-700 p-4 rounded-lg"
            >
              <CheckCircle className="w-6 h-6 text-teal-400 mr-2 flex-shrink-0" />
              <p className="text-lg text-white">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

