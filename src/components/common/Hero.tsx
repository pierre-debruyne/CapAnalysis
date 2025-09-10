import { cn } from "@/lib/cn";
import Image from "next/image"

type HeroProps = {
  imgSrc: string;
  imgAlt?: string;
  title: string;
  text?: string;
  imgPosition?: string;
  className?: string;
};

export default function Hero({
  imgSrc,
  imgAlt,
  title,
  text,
  imgPosition,
  className,
}: HeroProps) {
  return (
    <div className={cn( "relative w-full min-h-[350px] md:h-[692px] overflow-x-clip mt-[87px] md:mt-0 md:mb-0 xl:mt-[95px]",className)}>
      <div className="relative w-full block md:hidden bg-dark">
        <Image
          src="/assets/images/logo.png"
          alt=""
          width={376}
          height={450}
          unoptimized
          className="w-[280px] h-auto mx-auto"
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               text-center w-full px-6"
        >
          <h1 className="whitespace-pre-line text-[#E9D7C8] text-[35px] pb-[15px] font-serif font-normal leading-none">
            {title}
          </h1>
          <h2 className="whitespace-pre-line text-[#B4AAA7] md:text-[21px] mx-8 font-sans font-thin leading-none">
            {text}
          </h2>
        </div>
      </div>
      <div className="w-full lg:flex h-full">
        <div className="xl:w-[69%] w-full relative h-full">
          <img
            src={imgSrc}
            alt={imgAlt || title}
            className={cn(
              "block w-full h-full object-cover bg-dark",
              imgPosition
            )}
          />
        </div>
        <div className="bg-dark w-[31%] xl:block hidden" />
      </div>
      <div className="md:absolute hidden right-0 top-[142px] bottom-[95px] md:w-[54%] bg-dark rounded-s-[230px] md:flex flex-col justify-center overflow-hidden pl-[45px] pt-[35px] box-border">
        <Image
          className="mt-[31px]"
          src="/assets/images/logo.png"
          alt=""
          width={376}
          height={450}
          unoptimized
        />

        <div className=" absolute inset-0 flex flex-col items-center justify-center text-center 2xl:ml-[50px] max-w-[900px] mx-auto">
          <h1 className="whitespace-pre-line w-full text-[#E9D7C8] text-[35px] xl:text-[60px] pb-[45px] font-serif font-normal leading-none">
            {title}
          </h1>
          <h2 className="whitespace-pre-line text-[#B4AAA7] text-[21px] mx-20 font-sans font-thin leading-none">
            {text}
          </h2>
        </div>
      </div>
    </div>
  );
}