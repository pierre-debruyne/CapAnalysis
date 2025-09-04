import Footer from '@/components/common/Footer';
import Button from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <div className="bg-dark w-full h-[235px] text-beige flex items-center justify-center pt-[60px] pb-[43px] flex-col gap-[30px]">
        <h2 className="text-[60px] text-center whitespace-pre-line leading-[1.1]">
          Contact us
        </h2>
        <h3 className="text-2xl italic font-serif">Start monitoring now</h3>
      </div>

      <div className="w-full bg-[#F8F1EC] pt-[80px] pb-[85px] px-5 xl:px-0">
        <div className="xl:max-w-[1222px] mx-auto flex flex-col gap-5 ">
          <div className="flex gap-5 xl:flex-row flex-col">
            <Input placeholder="Your name" className="xl:w-[394px]" />
            <Input placeholder="Your email" className="xl:w-[394px]" />
            <Input placeholder="Subject" className="xl:w-[394px]" />
          </div>

          <Textarea placeholder="Subject" className="w-full h-[235px]" />

          <div className="flex justify-between">
            <div className="flex items-center gap-[10px]">
              <Checkbox />
              <span className="text-[11px] text-[#806863] font-sans font-light">
                I’M HUMAN!
              </span>
            </div>
            <Button children={"SEND MESSAGE"} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}