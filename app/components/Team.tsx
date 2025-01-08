import Image from 'next/image'
import { Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: 'Nils Börner',
    role: 'Co-Founder',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGAtgcFqi2DoQ/profile-displayphoto-shrink_800_800/B4DZN_w2gWHoAc-/0/1733015334312?e=1741219200&v=beta&t=Au4ZvgIl4ziTTTLgqakDvlhpiAirVIFPBtQOBsdTcL8',
    linkedin: 'https://www.linkedin.com/in/boenils/'
  },
  {
    name: 'Jago Wahl-Schwentker',
    role: 'Co-Founder',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQGGExvMiERskg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1637304606797?e=1741219200&v=beta&t=4trHtVmFqEuhtbp14GUcXN0I7ai4NqRvwga5ZokeueQ',
    linkedin: 'https://www.linkedin.com/in/jagowahl/'
  }
]

export default function Team({ language }) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-400">
          {language === 'en' ? 'Our Team' : 'Unser Team'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
              <p className="text-gray-300 mb-4">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-400 hover:text-teal-300"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
        <p className="text-xl mb-8 text-gray-200 text-center">
          <br />
          <br />
          {language === 'en' 
            ? 'Want to be part of our team? Contact us at ' 
            : 'Möchtest du Teil unseres Teams werden? Kontaktiere uns unter '}
          <a href="mailto:contact@trans-load.de" className="underline">
            contact@trans-load.de
          </a>
        </p>
      </div>
    </section>
  )
}

