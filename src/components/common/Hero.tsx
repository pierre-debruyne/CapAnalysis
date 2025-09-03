import Image from "next/image"

type HeroProps = {
  imgSrc: string
  imgAlt?: string
  title: string
  text?: string
  imgPosition?: string; 
}

export default function Hero({ imgSrc, imgAlt, title, text, imgPosition }: HeroProps) {
  return (
    <div className="w-full h-[692px] relative overflow-x-clip">
      <div className="hidden md:flex w-full h-full">
        <div className="w-[69%] relative h-full">
          <Image
            src={imgSrc}
            alt={imgAlt || title}
            fill
            className={["object-cover bg-dark", imgPosition].filter(Boolean).join(" ")}
          />
        </div>
        <div className="bg-dark w-[31%]" />
      </div>

      <div className="absolute right-0 top-[142px] bottom-[95px] w-[54%] bg-dark rounded-s-[230px] flex flex-col justify-center overflow-hidden pl-[45px] pt-[35px] box-border">
        <Image
          className="mt-[31px]"
          src="/assets/images/logo.png"
          alt=""
          width={376}
          height={450}
          unoptimized
        />

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
  <h2 className="whitespace-pre-line w-full text-beige text-[60px] pb-[45px] font-serif font-normal leading-none">
    {title}
  </h2>
  <p className="whitespace-pre-line text-beige text-[21px] mx-20 font-sans font-light leading-none">
    {text}
  </p>
</div>
      </div>
    </div>
  );
}