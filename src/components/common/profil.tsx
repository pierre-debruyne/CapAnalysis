import React from 'react'
import Image from "next/image"
import { AtSign, Linkedin, Smartphone } from 'lucide-react';
import Link from 'next/link';

type ProfilProps = {
  imgSrc: string;
  imgAlt: string;
  name: string;
  job: string;
  title_job: string;
  resume: string;
  tel: string;
  linkedin: string;
  mail: string;

};

export default function Profil({
    imgSrc,
    imgAlt,
    name,
    job,
    title_job,
    resume,
    linkedin,
    tel,
    mail,
  }: ProfilProps) {
    return (
      <div className="flex sm:flex-row flex-col gap-[48px] xl:max-w-[584px] ">
        <div>
          {imgSrc ? (
            <Image
              width={210}
              height={266}
              src={imgSrc}
              alt={imgAlt}
              className="w-[210px] h-[266px] object-cover mb-[10px] block"
            />
          ) : (
            <div className="w-[210px] h-[266px] mb-[10px] bg-[#F8F1EC] flex items-center justify-center">
              {name}
            </div>
          )}

          <div className="flex gap-[6px]">
            <Link
              className="w-[22px] h-[22px] bg-dark flex items-center justify-center"
              href={`tel:${tel}`}
            >
              <Smartphone className="text-white w-[14px] h-[14px]" />
            </Link>

            <Link
              className="w-[22px] h-[22px] bg-dark flex items-center justify-center"
              href={`mailto:${mail}`}
            >
              <AtSign className="text-white w-[14px] h-[14px]" />
            </Link>

            <Link
              className="w-[22px] h-[22px] bg-dark flex items-center justify-center"
              href={linkedin}
            >
              <Linkedin className="text-white w-[14px] h-[14px]" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-start xl:max-w-[334px] sm:w-2/3">
          <h2 className="font-serif text-[23px] font-normal mb-[16px]">{name}</h2>
          <span className="font-sans font-semibold">{job}</span>
          <span className="font-sans font-semibold whitespace-pre-line mb-[10px]">{title_job}</span>
          <span className="font-sans text-[16px] font-light text-[#806863] whitespace-pre-line">
            {resume}
          </span>
        </div>
      </div>
    );
  }