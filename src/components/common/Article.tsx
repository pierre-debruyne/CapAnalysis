import Image from "next/image";
import Button from "../ui/Button";

type ArticleProps = {
  imgSrc: string;
  imgAlt?: string;
  title: string;
  date: string;
  text: string;
  text2?: string;
  posted: string;
  hashtag?: string;
};

export default function Article({ imgSrc, imgAlt, title, text, text2, posted, hashtag, date }: ArticleProps) {
  return (
    <div className='xl:max-w-[942px] p-5 xl:p-0 flex flex-col xl:flex-row border-b border-[#BAACA9] gap-[50px] mx-auto py-[34px]'>
      <div>
        <div className='sm:w-[207px] sm:h-[207px] border-beige'>
          <Image width={207} height={207} src={imgSrc} alt={imgAlt || title} className='object-cover w-full h-full' />
        </div>

        <div className='flex flex-col gap-[4px] text-[12px] pt-[10px]'>
          <span className='font-light text-[#BAACA9] '>
            Posted in
            <span className='font-medium italic text-[#806863]'> {posted}</span>
          </span>
          <span className='text-[#806863]'>{hashtag}</span>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex flex-col pb-[13px] gap-[13px]'>
          <h2 className='font-serif text-[23px]'>{title}</h2>
          <div className='flex gap-1'>
            <span className='font-sans text-[12px] text-[#BAACA9]'>Postedon</span>
            <span className='font-sans text-[12px] text-[#806863]'>{date}</span>
          </div>
        </div>

        {/* Paragraphe */}
        <div className='flex flex-col gap-2 pb-[13px]'>
          <p className='text-[16px] font-sans font-light text-[#806863]'>{text}</p>
          <p className='text-[16px] font-sans font-light text-[#806863]'>{text2}</p>
        </div>

        <Button className='w-[115px]'>READ ARTICLE</Button>
      </div>
    </div>
  );
}
