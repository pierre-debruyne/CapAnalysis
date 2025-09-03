import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import InfoBlock from "@/components/common/InfoBlock";

export default function ForensicFinancialAnalysis() {
  return (
    <div>
      <Hero
        imgSrc="/assets/images/hero_ffa.jpg"
        imgAlt=""
        title={`Forensic financial\n analysis`}
        text={`When things go wrong, we bring clarity,\n evidence, and impact.`}
        imgPosition="object-[35%_58%] md:object-[42%_55%]"
      />

      <div className="pt-[67px]">
        <h2 className="text-[35px] font-serif text-center text-[#292929] leading-11 pb-[10px]">
          Trusted by courts and legal teams, our forensic <br /> financial
          analysis supports litigation, mediation, <br /> and complex financial
          disputes.
        </h2>
        <p className="pb-[67px] text-center text-[#806863]">
          CAPAnalysis has been officially recognised as a Forensic <br />
          Financial Expert by the Geneva Court since 2018.
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 pb-[48px] gap-x-[170px] gap-y-[60px] max-w-max mx-auto items-start">
        <InfoBlock
          UppercaseText={"Damage Calculation"}
          LowercaseText={
            "Using our proprietary tool CAPAct tool, we quantify financial harm in cases of mismanagement, hidden fees, and strategy drift."
          }
        />
        <InfoBlock
          UppercaseText={"Expert Witness &\n Litigation Support\n"}
          LowercaseText={
            "Court-ready analysis, including testimony in cases involving portfolio mismanagement, abuse of leverage, and product mis-selling."
          }
        />
        <InfoBlock
          UppercaseText={`Fee & Risk Profiling\n Audits\n`}
          LowercaseText={
            "Are your bank’s actions aligned with your stated risk profile? We find out, and prove it."
          }
        />
        <InfoBlock
          UppercaseText={"Structured Product &\n Derivative Reviews\n"}
          LowercaseText={
            "We analyze complex financial instruments for suitability, transparency, and actual risk exposure."
          }
        />

        <InfoBlock
          UppercaseText={"Multi-Bank Asset \n Consolidation\n"}
          LowercaseText={`We untangle fragmented portfolios and trace financial movements for full transparency.`}
        />
      </div>

      <div className="flex gap-1 w-full">
        <div className="bg-[#F8F1EC] w-full  py-[65px]">
          <div className="max-w-[417px] mx-auto">
            <h3 className="text-[23px] font-normal font-serif pb-[19px]">
              We regularly assist Law Firms in cases which involve:
            </h3>

            <div className="flex text-[#806863] font-light font-sans text-[16px]">
              <ul className="list-disc list-outside pl-5 w-2/4">
                <li>Churning</li>
                <li>Leverage</li>
                <li>Disloyal management</li>
                <li>Conflict of interest</li>
                <li>Hidden fees </li>
                <li>Retrocessions</li>
                <li>Benchmarking</li>
              </ul>

              <ul className="list-disc list-outside pl-5 w-2/4">
                <li>Simulations</li>
                <li>Compliance with risk profile</li>
                <li>Verification of execution prices</li>
                <li>Investment diversification</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F1EC] w-full py-[65px]">
          <div className="max-w-[417px] mx-auto">
            <h3 className="font-normal font-serif text-[23px] pb-[19px]">
              We are proficient in several technical products involving:
            </h3>
            <div className="flex justify-between text-[#806863] font-light font-sans text-[16px]">
              <ul className="list-disc list-outside pl-5">
                <li>
                  Structured products: RKOF, Pivot, TARF, TARPF, BRC, etc.
                </li>
                <li>Options: vanilla and exotic</li>
                <li>
                  Swap, Swaption and
                  <br /> CDS
                </li>
              </ul>

              <ul className="list-disc list-outside pl-5">
                <li>Private equity</li>
                <li>
                  Vanilla products such: Stocks, Bonds, Funds, Hedged funds
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark py-[49px]">
        <div className="max-w-[564px] mx-auto text-[23px] text-white text-center">
          <p className="mb-[15px]">
            The development of CAPAct enables us to perform a variety of
            simulations to compare various scenarios and perform damage
            calculations.
          </p>
          <p>
            Our expertise is also solicited to arbitrate between parties to find
            an agreeable settlement.
          </p>
        </div>
      </div>

      <div className="flex w-full">
        <div className="bg-[#F8F1EC] w-full py-[65px]">
          <h2 className="text-center text-[23px] font-serif font-normal">
            Our Role as Forensic Financial Experts:
          </h2>
          <div className="flex justify-between w-full mx-auto max-w-[1450px] py-[35px] divide-x-[0.6px] divide-[#BAACA9]">
            <div className="flex-1 max-w-[360px] pr-[45px]">
              <div className="max-w-[297px]">
                <div className="text-[15px] uppercase font-sans font-semibold">
                  Portfolio Consolidation
                </div>
                <p className="font-sans font-light text-[16px] text-[#806863]">
                  We reconstruct and consolidate the portfolio in which the loss
                  occurred, with a specific focus on the relevant time period.
                </p>
              </div>
            </div>

            <div className="flex-1 max-w-[360px] px-[45px]">
              <div className="max-w-[297px]">
                <div className="text-[15px] uppercase font-sans font-semibold">
                  Preliminary Report
                </div>
                <p className="font-sans font-light text-[16px] text-[#806863]">
                  We submit a detailed preliminary report to the legal team,
                  identifying and explaining all factors that contributed to the
                  loss.
                </p>
              </div>
            </div>

            <div className="flex-1 max-w-[360px] pl-[45px]">
              <div className="max-w-[297px]">
                <div className="text-[15px] uppercase font-sans font-semibold">
                  Damage Assessment
                </div>
                <p className="font-sans font-light text-[16px] text-[#806863]">
                  In close collaboration with the lawyer(s), we quantify the
                  financial damage based on objective, documented evidence.
                </p>
              </div>
            </div>

            <div className="flex-1 max-w-[360px] pl-[45px]">
              <div className="max-w-[297px]">
                <div className="text-[15px] font-sans font-semibold">
                  Final Expert Report
                </div>
                <p className="font-sans font-light text-[16px] text-[#806863]">
                  We draft the final expert report independently for use in
                  court proceedings, ensuring it aligns with legal arguments and
                  meets all evidentiary standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-[60px] h-full text-center">
        <div className="max-w-[420px] h-full mx-auto">
          <h2 className="text-[35px] font-serif text-[#292929] leading-11 pb-[10px]">
            Pricing
          </h2>
          <p className="text-[16px] font-light font-sans text-[#806863] pb-[30px]">
            CAPAnalysis SA invoices its forensic and analytical services based
            on time spent by its experts, according to the following hourly
            rates (excluding VAT):
          </p>

          <div className="border-y border-[#BAACA9] max-w-[350px] py-[16px] mx-auto">
            <div className="grid grid-cols-2 grid-rows-2 ">
              <span className="uppercase font-semibold font-sans text-[15px]">
                Partners
              </span>
              <span className="text-[#BAACA9] font-light font-sans text-[16px]">
                CHF 400.– / hour
              </span>
              <span className="uppercase font-semibold font-sans text-[15px]">
                Senior Experts
              </span>
              <span className="text-[#BAACA9] font-light font-sans text-[16px]">
                CHF 300.– / hour
              </span>
              <span className="uppercase font-semibold font-sans text-[15px]">
                Junior Analysts
              </span>
              <span className="text-[#BAACA9] font-light font-sans text-[16px]">
                CHF 200.– / hour
              </span>
            </div>
          </div>

          <p className="text-[16px] font-light font-sans text-[#806863] pt-[30px]">
            Rates may vary depending on the complexity and scope of the
            engagement. A detailed estimate is provided upon request.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
