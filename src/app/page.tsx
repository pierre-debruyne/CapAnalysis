import Hero from "@/components/common/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        imgSrc="/assets/images/hero_home.png"
        imgAlt=""
        title={`Uncovering the truth\nbehind your\nwealth management`}
        text={`Financial bodyguard &\nindependent forensic analysis`}
      />
    </div>
  );
}
