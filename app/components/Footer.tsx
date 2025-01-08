import Link from 'next/link'

export default function Footer({ language }) {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 transload. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/impressum" className="hover:text-teal-400 transition-colors">
              {language === 'en' ? 'Legal Notice' : 'Impressum'}
            </Link>
            <Link href="/privacy-policy" className="hover:text-teal-400 transition-colors">
              {language === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
