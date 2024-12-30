import { Forklift, BarChart2, Users } from 'lucide-react'

const features = {
  en: [
    {
      icon: Forklift,
      title: 'Optimized Routes',
      description: 'Minimize forklift travel distance'
    },
    {
      icon: BarChart2,
      title: 'Reduced Costs',
      description: 'Lower operational expenses'
    },
    {
      icon: Users,
      title: 'Human-Centric',
      description: 'Enhance driver productivity'
    }
  ],
  de: [
    {
      icon: Forklift,
      title: 'Optimierte Routen',
      description: 'Minimieren Sie die Fahrwege der Gabelstapler'
    },
    {
      icon: BarChart2,
      title: 'Reduzierte Kosten',
      description: 'Senken Sie die Betriebskosten'
    },
    {
      icon: Users,
      title: 'Menschenzentriert',
      description: 'Steigern Sie die Produktivität der Fahrer'
    }
  ]
}

export default function Features({ language }) {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          {language === 'en' ? 'Key Features' : 'Hauptfunktionen'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features[language].map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

