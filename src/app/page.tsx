import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import InfoBlock from "@/components/common/InfoBlock";
import Table from "@/components/common/InfoBlock";
import Button from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero
        imgSrc="/assets/images/hero_home.png"
        imgAlt=""
        title={`Uncovering the truth\nbehind your\nwealth management`}
        text={`Financial bodyguard &\nindependent forensic analysis`}
      />

      <div className="py-[65px] flex justify-center items-center flex-col bg-white">
        <h2 className="font-serif text-[35px] ">Two pillars</h2>
        <span className="text-[#806863] text-[16px] font-ligh text-center">
          CAPAnalysis supports both proactive and reactive needs,
          <br />
          from long-term monitoring to litigation.
        </span>
      </div>

      <div className="flex gap-1 w-full mb-[45px]">
        {/*   Portfolio Monitoring & Mentorship */}
        <div className="bg-[#F8F1EC] w-full py-[37px]">
          <div className="ml-[221px]">
            <div className="mb-5">
              <h2 className="text-[18px] uppercase font-semibold font-sans leading-tight">
                Portfolio Monitoring
                <br />& Mentorship
              </h2>
            </div>

            <div className="flex gap-[50px]">
              <div className="flex flex-col items-center justify-end">
                <div className="flex gap-2">
                  <div className="w-px h-[260px] bg-[#BAACA9]" />
                  <div className="w-px h-[260px] bg-[#BAACA9]" />
                  <div className="w-px h-[260px] bg-[#BAACA9]" />
                  <div className="w-px h-[260px] bg-[#BAACA9]" />
                  <div className="w-px h-[260px] bg-[#BAACA9]" />
                </div>
                <div className="w-[56px] mt-[6px] h-[10px] border border-[#BAACA9]" />
              </div>

              <div className="flex flex-col gap-[13px] justify-end">
                <p className="font-sans text-[16px]">
                  Consolidation and strategic oversight for <br /> private
                  portfolios.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="font-light text-[16px] text-[#806863] mb-[10px]">
                    Subscription oversight
                  </li>
                  <li className="font-light text-[16px] text-[#806863] mb-[10px]">
                    Cost & performance analysis
                  </li>
                  <li className="font-light text-[16px] text-[#806863] mb-[10px]">
                    Discretionary/Advisory portfolio audits
                  </li>
                  <li className="font-light text-[16px] text-[#806863] mb-[10px]">
                    Suitability testing
                  </li>
                  <li className="font-light text-[16px] text-[#806863] mb-[10px]">
                    Strategic education
                  </li>
                </ul>
                <Button className="w-[107px]">Learn more</Button>
              </div>
            </div>
          </div>
        </div>

        {/*  FORENSIC FINANCIAL  ANALYSIS */}
        <div className="bg-[#F8F1EC] w-full py-[37px]">
          <div className="ml-[221px]">
            <div className="mb-5">
              <h2 className="text-[18px] uppercase font-semibold font-sans leading-tight">
                FORENSIC FINANCIAL
                <br />
                ANALYSIS
              </h2>
            </div>

            <div className="flex gap-[50px]">
              <div className="flex flex-col items-center justify-end">
                <div className="flex gap-2">
                  <div className="w-px h-[260px] bg-[#BAACA9]" />
                  <div className="w-px h-[260px] bg-[#BAACA9]" />
                  <div className="w-px h-[260px] bg-[#BAACA9]" />
                  <div className="w-px h-[260px] bg-[#BAACA9]" />
                  <div className="w-px h-[260px] bg-[#BAACA9]" />
                </div>
                <div className="w-[56px] mt-[6px] h-[10px] border border-[#BAACA9]" />
              </div>

              <div className="flex flex-col gap-[13px] justify-end">
                <p className="font-sans text-[16px]">
                  Trusted by courts and legal teams <br /> since 2018
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="font-light text-[16px] text-[#806863] mb-[10px]">
                    For high-stakes wealth disputes
                  </li>
                  <li className="font-light text-[16px] text-[#806863] mb-[10px]">
                    Damage modelling
                  </li>
                  <li className="font-light text-[16px] text-[#806863] mb-[10px]">
                    Benchmark reconstruction
                  </li>
                  <li className="font-light text-[16px] text-[#806863] mb-[10px]">
                    Financial market exposure diagnostics
                  </li>
                  <li className="font-light text-[16px] text-[#806863] mb-[10px]">
                    Legal support
                  </li>
                </ul>
                <Button className="w-[107px]">Learn more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark w-full px-[50px] py-[37px]">
        <div className="flex">
          <Image
            src="/assets/images/CAPAct_home.png"
            alt=""
            width={900}
            height={415}
            className="object-contain"
            priority
          />
          <div className="w-full mt-[56px] flex flex-col items-center">
            <h2 className="text-beige font-serif font-normal text-[35px] text-center">
              CAPAct,
              <br /> the forensic core of <br /> every investigation.
            </h2>
            <p className="text-[#BAACA9] mt-[10px] mb-[28px] text-center">
              Behind every analysis, every model, and every strategic alert is{" "}
              <br />
              CAPAct: CAPAnalysis’ proprietary software for reconstructing{" "}
              <br />
              portfolios, diagnosing misalignment, and quantifying damage.
            </p>
            <Button>LEARN ARTICLE</Button>
          </div>
        </div>
      </div>

      <div className="pt-[67px] pb-[48px]">
        <h2 className="text-[35px] font-serif text-center text-[#292929] pb-[67px]">
          Uncovering conflicts, costs, and mismanagement
          <br /> in investment portfolios.
        </h2>

        <div className="grid grid-cols-3 grid-rows-2 gap-x-[170px] gap-y-[60px] max-w-max mx-auto items-start">
          <InfoBlock
            UppercaseText={"Rebuilds full investment history"}
            LowercaseText={
              ", enabling analysis of evolving exposures, allocations, and decisions."
            }
          />
          <InfoBlock
            UppercaseText={
              "Reveals when advice served the bank – not\n the client. "
            }
            LowercaseText={
              "CAPAct compares selected products to independent options and quantifies the cost of conflicted selection."
            }
          />
          <InfoBlock
            UppercaseText={"Quantifies avoidable losses through comparison"}
            LowercaseText={
              <>
                , with properly constructed portfolios. Used in arbitration,
                litigation, and private settlements to{" "}
                <span className="font-semibold">
                  demonstrate negligence, excessive risk, or unsuitable
                  strategies.
                </span>
              </>
            }
          />
          <InfoBlock
            UppercaseText={`Extracts and monitors all layers of cost,\nvisible and hidden.\n`}
            LowercaseText={
              "It quantifies the real impact of fees, retrocessions, and product spreads over time, and determines whether a fund, product, or entire mandate justifies its cost."
            }
          />
          <InfoBlock
            UppercaseText={"Constructs precise, mandate-aligned benchmarks "}
            LowercaseText={
              "using currency-specific indices, risk levels, and real allocation logic showing not just how the portfolio performed, but how it should have performed."
            }
          />
          <InfoBlock
            UppercaseText={"Audits the execution\n layer"}
            LowercaseText={
              " checking that purchase and redemption prices align with market prices, coupons are paid when due and promised cash flows are honored. Flags discrepancies for deeper investigation."
            }
          />
        </div>
      </div>

      <div className="relative w-full h-[415px] mb-[9px]">
        <Image
          src="/assets/images/Slide-2-1.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />

        {/* Texte en overlay */}
        <div className="absolute inset-0 flex justify-start items-center gap-[140px] ml-[189px]">
          <div className="flex flex-col items-center max-w-[330px]">
            <h2 className="text-[35px] text-dark font-serif text-center leading-11">
              The real risk isn’t underperformance, it’s misinformation
            </h2>
            <p className="text-brown text-[16px] font-sans text-center">
              Wealth is more than portfolio value, it’s a reflection of trust,
              structure, and intent. When something feels off, it usually is.
            </p>
          </div>

          <div className="flex flex-col items-start max-w-[330px]">
            <p className="text-[16px] text-[#806863] font-sans font-light mb-[18px]">
              CAPAnalysis uncovers the underlying reality of investment
              decisions: identifying misalignments and quantifying their
              financial impact. For clients, counsel, and family offices facing
              complexity, we deliver what the institutions won’t:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li className="font-normal font-sans text-[16px] text-[#806863] mb-[3px]">
                Impartial and unbiased analysis
              </li>
              <li className="font-normal font-sans text-[16px] text-[#806863] mb-[3px]">
                Strategic leverage
              </li>
              <li className="font-normal font-sans text-[16px] text-[#806863]">
                Evidence that holds up under pressure
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
