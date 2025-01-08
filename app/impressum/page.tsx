'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

export default function ImpressumPage() {
  const [language, setLanguage] = useState('de')
  
  return (
    <div className="min-h-screen bg-gray-900">
      <Header language={language} setLanguage={setLanguage} />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold mb-8 text-teal-400">
          {language === 'en' ? 'Legal Notice' : 'Impressum'}
        </h1>
        <div className="text-white space-y-4">

        <p>{language === 'en' ? 'Adress:' : 'Adresse:'}</p>
        <a>Nils B&ouml;rner<br />
        Taubenstra&szlig;e 1<br />
        81541 M&uuml;nchen</a>

        <p>{language === 'en' ? 'Contact:' : 'Kontakt:'}</p>
        <a>Telefon: +4915258549146<br />
        E-Mail: contact@trans-load.de </a>

        <p>{language === 'en' ? 'Editorial Responsibility:' : 'Redaktionell verantwortlich:'}</p>
        <a>Jago Wahl-Schwentker {language === 'en' ? 'and' : 'und'} Nils B&ouml;rner</a>

        <p>{language === 'en' ? 'Quelle:' : 'Source:'}</p>
        <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a>
        </div>
      <Footer language={language} />
      </main>
    </div>
    
  )
}

