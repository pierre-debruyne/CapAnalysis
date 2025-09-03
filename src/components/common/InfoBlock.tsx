import { ChevronRight } from 'lucide-react';
import React from 'react'

type InfoBlockProps = {
    UppercaseText: React.ReactNode; 
    LowercaseText: React.ReactNode;
  };
  
  export default function InfoBlock({ UppercaseText, LowercaseText}: InfoBlockProps) { 

  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <ChevronRight className="text-[#BAACA9]" />
        <div className="w-px bg-[#BAACA9] flex-1 -mt-[5px] -ml-[5px]" />
      </div>

      <div className="max-w-[276px] ml-3">
        <span className="uppercase whitespace-pre-line font-sans font-semibold text-[18px]">
          {UppercaseText}
        </span>
        <span className="font-light font-sans text-[16px] text-[#806863]">
          {LowercaseText}
        </span>
      </div>
    </div>
  );
}
