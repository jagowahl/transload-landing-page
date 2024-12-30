import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

export default function Header({ language, setLanguage }) {
  const toggleLanguage = () => setLanguage(language === 'en' ? 'de' : 'en')

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-5xl font-bold text-teal-400">transload.</Link>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleLanguage}
          aria-label="Toggle language"
          className="text-gray-300 hover:text-teal-400"
        >
          <Globe />
        </Button>
      </nav>
    </header>
  )
}

