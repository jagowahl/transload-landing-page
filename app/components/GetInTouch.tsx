import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Calendar, Newspaper } from 'lucide-react'

const content = {
  en: {
    title: "Ready to Revolutionize Your Transshipment Warehouse?",
    description: "Transform your operations with our smart control systems.",
    cta: "Sign up for newsletter",
    newsletterUrl: "https://share.hsforms.com/1jvcgnOE4RLiOJSGOdSJM6gt0skb",
    meeting: "Schedule a Zoom Meeting",
    meetingUrl: "https://meetings.hubspot.com/nils-boerner",
    email: "Send us an Email",
    emailUrl: "mailto:contact@trans-load.de",
    footer: "We look forward to hearing from you!"
  },
  de: {
    title: "Bereit, Ihr Umschlagslager zu revolutionieren?",
    description: "Transformieren Sie Ihre Abläufe mit unseren smarten Steuerungssystemen.",
    cta: "Für Newsletter anmelden",
    newsletterUrl: "https://share.hsforms.com/1jvcgnOE4RLiOJSGOdSJM6gt0skb",
    meeting: "Planen Sie ein Zoom-Meeting",
    meetingUrl: "https://meetings.hubspot.com/nils-boerner",
    email: "Senden Sie uns eine E-Mail",
    emailUrl: "mailto:contact@trans-load.de",
    footer: "Wir freuen uns, von Ihnen zu hören!"
  }
}

export default function GetInTouch({ language }) {
  const { title, description, cta, newsletterUrl, meeting, meetingUrl, email, emailUrl, footer } = content[language]

  return (
    <section className="py-20 bg-gradient-to-r from-orange-800 to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-xl mb-8 text-gray-200">{description}</p>
        <Card className="w-full max-w-md mx-auto bg-white/10 text-white pt-0">
          <CardContent className="grid gap-4 pt-4">
            <Button asChild variant="outline" className="bg-white text-orange-800 hover:bg-gray-200 hover:text-orange-900 transition-colors duration-300 text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105">
              <Link href={newsletterUrl} className="flex items-center justify-start">
                <Newspaper className="mr-2 h-4 w-4" aria-hidden="true" />
                <span>{cta}</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-white text-orange-800 hover:bg-gray-200 hover:text-orange-900 transition-colors duration-300 text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105">
              <Link href={meetingUrl} className="flex items-center justify-start" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                <span>{meeting}</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-white text-orange-800 hover:bg-gray-200 hover:text-orange-900 transition-colors duration-300 text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105">
              <Link href={emailUrl} className="flex items-center justify-start">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                <span>{email}</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
        <p className="text-xl text-gray-300 mt-4">{footer}</p>
      </div>
    </section>
  )
}