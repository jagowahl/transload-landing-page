import { Button } from '@/components/ui/button'

const content = {
  en: {
    title: "Ready to Revolutionize Your Transshipment Warehouse?",
    description: "Transform your operations with our smart control systems.",
    cta: "Get Started"
  },
  de: {
    title: "Bereit, Ihr Umschlagslager zu revolutionieren?",
    description: "Transformieren Sie Ihre Abläufe mit unseren smarten Steuerungssystemen.",
    cta: "Jetzt starten"
  }
}

export default function CTA({ language }) {
  const { title, description, cta } = content[language]

  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-purple-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-xl mb-8 text-gray-200">{description}</p>
        <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">{cta}</Button>
      </div>
    </section>
  )
}

