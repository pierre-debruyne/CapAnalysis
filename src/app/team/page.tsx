import Footer from "@/components/common/Footer";
import Profil from "@/components/common/Profil";
import React from "react";

export default function Team() {
  return (
    <div>
      {/* Header */}
      <div className='bg-dark w-full h-[692px]'>
        <div className='max-w-[1105px] h-[692px] bg-brown mx-auto flex items-center justify-center text-center'>Embed the VIDEO here</div>
      </div>

      <div className=' mx-auto pt-[99px] pb-[37px] grid xl:grid-cols-2 gap-x-[100px] gap-y-[100px] xl:max-w-[1268px] px-5 xl:px-0'>
        <Profil
          imgAlt=''
          imgSrc='/assets/images/profil/LP_Website.jpg'
          name='Lital Puller'
          job='CO-CEO'
          title_job='Strategic Business Developer & Negotiator'
          resume={`Former Private Banker at JPMorgan (Suisse) SA and Bank of China (Suisse) SA, Lital PULLER brings extensive experience in strategic business development, negotiation, and client relationship management. Her core clientele includes Ultra-High-Net-Worth Individuals (UHNWIs), Family Offices, and Institutional Investors.\b
            A dynamic and proactive multilingual professional, she excels in client acquisition, negotiation, and portfolio management. Lital thrives in high-performing environments where communication, strategic thinking, and collaboration are key to long-term success.`}
          tel=''
          linkedin=''
          mail=''
        />

        <Profil
          imgSrc='/assets/images/profil/BG_Website.jpg'
          imgAlt=''
          name='Bruno Gillet'
          job='CO-CEO'
          title_job={`Senior Macro Analyst\n30 Years of Experience in Finance`}
          resume={`Bruno GILLET is a seasoned macroeconomic analyst with three decades of experience across financial analysis, alternative fund management, and trading. He has developed a strong reputation for delivering precise, tailor-made reporting solutions for institutional investors and ultra-high-net-worth individuals (UHNWI).\b 
            His expertise lies in providing a transparent and objective view of financial performance and contribution, enabling clients to make well-informed decisions. Through his analytical approach, he helps optimise investments in alignment with each client’s risk profile and tax considerations.`}
          tel=''
          linkedin=''
          mail=''
        />

        <Profil
          imgSrc=''
          imgAlt=''
          name='Imran Husein'
          job='Head of Data Science'
          title_job='Financial analyst'
          resume={`Imran HUSEIN joined CAPAnalysis in 2017 as an intern while pursuing a degree in Physics at the University of Toronto. He earned his Bachelor’s degree in Physics in 2024.\b 
          Throughout his time at CAPAnalysis, Imran has developed strong analytical and quantitative skills, particularly in data processing, financial modeling, and performance attribution. His scientific background, combined with hands-on experience in wealth consolidation and investment strategy analysis, enables him to approach complex financial data with rigor, structure, and precision.`}
          tel=''
          linkedin=''
          mail=''
        />

        <Profil
          imgSrc=''
          imgAlt=''
          name='Olivier Rochaix'
          job='Head of Technology'
          title_job=''
          resume={`Olivier ROCHAIX joined CAPAnalysis in 2020 as Head of Technology. With a strong background in software development and systems architecture, he plays a key role in designing and maintaining the firm’s proprietary tools for portfolio consolidation and investment analysis.\b 
          Specialising in Java web-based technologies, his technical expertise extends to artificial intelligence, where he leverages Python and machine learning frameworks to automate and enrich financial data analysis, Olivier combines technical expertise with a deep understanding of the financial domain. He develops tailored solutions to streamline data integration, enhance user experience, and support advanced analytical workflows. His contributions ensure that CAPAnalysis remains agile, secure, and technologically robust.`}
          tel=''
          linkedin=''
          mail=''
        />
      </div>
      <Footer />
    </div>
  );
}
