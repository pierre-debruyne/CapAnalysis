import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import InfoBlock from "@/components/common/InfoBlock";
import Button from "@/components/ui/Button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CAPANALYSIS | Your Wealth Your Terms",
  description: "Experts in portfolio consolidation, financial analysis, and forensic expertise for private clients in civil and criminal cases.",
};

export default function Home() {
  return (
    <div>
      {/* Hero - Uncovering the truth behind your wealth management */}
      <Hero
        imgSrc="/assets/images/hero_home.png"
        imgAlt=""
        title={`Uncovering the truth\nbehind your\nwealth management`}
        text={`Financial bodyguard &\nindependent forensic expert`}
        imgPosition="object-[28%_58%] md:object-[42%_55%]"
      />

      {/* Bloc 1 - Two pillars */}
      <div className="py-[35px] md:py-[65px] flex justify-center items-center flex-col bg-white">
        <h2 className="font-serif text-[35px] text-[#2D2D2D]">Two pillars</h2>
        <span className="text-[#806863] text-[16px] font-light text-center">
          CAPAnalysis supports both proactive and reactive needs,
          <br />
          from long-term monitoring to litigation.
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-1 w-full lg:mb-[45px]">
        {/*  Bloc 2 - Portfolio Monitoring & Mentorship */}
        <div className="bg-[#F5EDE6] w-full py-[35px] px-[35px] md:py-[37px] md:px-5 lg:px-0">
          <div className="flex justify-center flex-col items-start md:items-center">
            <div className="mb-5 md:w-[427px]">
              <h2 className="text-[18px] text-[#2D2D2D] uppercase font-semibold font-sans leading-tight text-start">
                Portfolio Monitoring
                <br />& Mentorship
              </h2>
            </div>

            <div className="flex gap-[50px]">
              <div className="flex flex-col items-center justify-start md:justify-end">
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
                <p className="font-sans text-[16px] text-[#2D2D2D]">
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
                <Link
                  href={"/portfolio-monitoring-&-mentorship"}
                  className="shrink-0"
                >
                  <Button>Learn more</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bloc 2 - FORENSIC FINANCIAL  ANALYSIS */}
        <div className="bg-[#F5EDE6] w-full py-[35px] px-[35px] md:py-[37px] md:px-5 lg:px-0">
          <div className="flex justify-center flex-col items-start md:items-center">
            <div className="mb-5 md:w-[425px]">
              <h2 className="text-[18px] uppercase text-[#2D2D2D] font-semibold font-sans leading-tight text-start">
                FORENSIC FINANCIAL
                <br />
                ANALYSIS
              </h2>
            </div>

            <div className="flex gap-[50px]">
              <div className="flex flex-col items-center justify-start md:justify-end">
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
                <p className="font-sans text-[16px] text-[#2D2D2D]">
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
                <Link
                  href={"/forensic-financial-analysis"}
                  className="shrink-0"
                >
                  <Button>Learn more</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Bloc 3 - CAPAct. The forensic core of every investigation. */}
      <div className="bg-dark w-full pb-[35px] py-[35px] px-[35px] md:pb-[37px] md:px-[50px] md:py-[37px]">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="relative w-full h-[300px] md:h-[415px]">
            <Image
              src="/assets/images/CAPAct_home.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="w-full flex flex-col items-center">
            <h2 className=" font-serif font-normal text-[35px] leading-11 text-center text-white">
              CAPAct.
              <br /> The forensic core of <br /> every investigation.
            </h2>
            <p className="text-[#BAACA9] mt-[10px] mb-[28px] text-center font-light">
              Behind every analysis, every model, and every strategic alert is{" "}
              <br />
              CAPAct: CAPAnalysis’ proprietary software for reconstructing{" "}
              <br />
              portfolios, diagnosing misalignment, and quantifying damage.
            </p>

            <Link
              href={"/capact-innovation-software-performance-investments"}
              className="shrink-0"
            >
              <Button iconColor="#BAACA9" className="text-[#BAACA9]">
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bloc 4 - Exposing conflicts */}
      <div className="md:pt-[67px] md:pb-[48px] md:px-[50px] p-[35px]">
        <h2 className="text-[35px] font-serif text-center text-[#2D2D2D] pb-[35px] md:pb-[67px] leading-11">
          Exposing conflicts, costs, and mismanagement
          <br /> in investment portfolios.
        </h2>

        <div className="grid xl:grid-cols-3 md:grid-cols-2  auto-rows-auto gap-x-[170px] gap-y-[60px] max-w-max mx-auto items-start">
          <InfoBlock
            UppercaseText={"Rebuilds full portfolio history"}
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
              <>
                It quantifies the{" "}
                <span className="font-semibold">
                  real impact of fees, retrocessions, and product spreads
                </span>{" "}
                over time, and determines whether a fund, product, or entire
                mandate justifies its cost.
              </>
            }
          />
          <InfoBlock
            UppercaseText={"Constructs precise, mandate-aligned benchmarks "}
            LowercaseText={
              "using currency-specific indices, risk levels, and real allocation logic showing not just how the portfolio performed, but how it should have performed."
            }
          />
          <InfoBlock
            UppercaseText={"Audits the execution\n layer"}
            LowercaseText={
              <>
                {" "}
                checking that purchase and redemption prices align with market
                prices, coupons are paid when due and promised cash flows are
                honored.{" "}
                <span className="font-semibold">
                  Flags discrepancies for deeper investigation
                </span>
                .
              </>
            }
          />
        </div>
      </div>

      {/* Bloc 5 - The real risk isn’t underperformance */}
      <div className="relative w-full aspect-video h-[544px] md:h-[415px] mb-[9px]">
        <Image
          src="/assets/images/Slide-2-1.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />

        {/* Texte en overlay */}
        <div className="absolute inset-0 h-full flex flex-col md:flex-row gap-5 md:py-10 py-[35px] lg:p-0 justify-start items-center lg:gap-[140px] px-[35px] md:px-0 md:ml-[50px] xl:ml-[189px]">
          <div className="flex flex-col items-center md:max-w-[330px] mx-auto md:m-0">
            <h2 className="text-[35px] text-[#2D2D2D] font-serif md:text-start text-center leading-11">
              The real risk isn’t underperformance, it’s misinformation
            </h2>
            <p className="text-brown text-[16px] font-light font-sans md:text-start text-center">
              Wealth is more than portfolio value, it’s a reflection of trust,
              structure, and intent. When something feels off, it usually is.
            </p>
          </div>

          <div className="flex flex-col items-start max-w-[330px] mx-auto lg:m-0">
            <p className="text-[16px] text-[#806863] font-sans text-center md:text-start font-light mb-[18px]">
              CAPAnalysis uncovers the underlying reality of investment
              decisions: identifying misalignments and quantifying their
              financial impact. For clients, counsel, and family offices facing
              complexity, we deliver what the institutions won’t:
            </p>
            <ul className="list-disc pl-5 space-y-1 ">
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
