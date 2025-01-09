import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

export default function Header({ language, setLanguage }) {
  const toggleLanguage = () => setLanguage(language === 'en' ? 'de' : 'en')

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center">
        <Image
        src="./our_logo.svg"
        alt="Company Logo"
        width={200}
        height={200}
        className=""
        />
        </Link>
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

