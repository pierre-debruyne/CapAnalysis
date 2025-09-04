import { AtSign, Linkedin, MapPin, Smartphone } from 'lucide-react'
import Link from 'next/link';
import React from 'react'


export default function Footer() {
  return (
    <div className="w-full lg:h-[73px] bg-dark flex lg:flex-row flex-col justify-center p-5 gap-5 lg:gap-[35px] items-center mx-auto">
      <div className="flex gap-2">
        <MapPin className="text-brown hidden lg:block" />
        <span className="text-[16px] font-sans font-light text-white text-center">
          118 rue du Rhône - 1204 Geneva - Switzerland
        </span>
      </div>
      <div className="flex gap-2">
        <Smartphone className="text-brown hidden lg:block" />
        <Link href="tel:+ 41 (0) 22 321 90 90" className="text-[16px] font-sans font-light text-white hover:underline">
          + 41 (0) 22 321 90 90
        </Link>
      </div>
      <div className="flex gap-2">
        <AtSign className="text-brown hidden lg:block" />
        <a
          href="mailto:contact@exemple.com"
          className="hover:underline text-[16px] font-sans font-light text-white"
        >
          info@capanalysis.ch
        </a>
      </div>
      <Link href={'https://fr.linkedin.com/company/capanalysis-sa'}>
      <Linkedin className="text-brown" />
      </Link>
    </div>
  );
}
