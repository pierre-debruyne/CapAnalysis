import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import InfoBlock from "@/components/common/InfoBlock";

export default function PortfolioMonitoringMentorship() {
  return (
    <div>
      <Hero
        imgSrc="/assets/images/hero_pmm.jpeg"
        imgAlt=""
        title={`Portfolio Monitoring\n& Mentorship`}
        text={`Wealth needs guardianship,\nnot just management.`}
        imgPosition="object-[70%_50%] md:object-[20%_50%]"
      />

      <div className="pt-[67px] pb-[48px]">
        <h2 className="text-[35px] font-serif text-center text-[#292929] leading-11 pb-[10px]">
          Independent financial expertise for
          <br /> control, protection, and clarity.
        </h2>
        <p className="pb-[67px] text-center text-[#806863]">
          CAPAnalysis is your financial bodyguard: monitoring your wealth,
          <br /> translating complexity, and ensuring your interests come first
          – always.
        </p>

        <div className="grid grid-cols-3 grid-rows-2 gap-x-[170px] gap-y-[60px] max-w-max mx-auto items-start">
          <InfoBlock
            UppercaseText={"Portfolio Oversight\n & Health Checks\n"}
            LowercaseText={
              "Transparent reports on performance, hidden fees, and unnecessary complexity."
            }
          />
          <InfoBlock
            UppercaseText={"Independent Second Opinions.\n"}
            LowercaseText={
              "Thinking of investing? Let us assess the risks before your bank earns a commission."
            }
          />
          <InfoBlock
            UppercaseText={"Subscription-Based\n Monitoring\n"}
            LowercaseText={`A recurring model designed for UHNW clients — delivering clarity without conflict of interest.`}
          />
          <InfoBlock
            UppercaseText={`Discretionary Mandate\n Reviews\n`}
            LowercaseText={
              "We analyze how your bank is managing your assets — and whether they’re meeting expectations."
            }
          />
          <InfoBlock
            UppercaseText={"Client Education & Mentoring\n"}
            LowercaseText={
              "Designed for individuals and families who want to understand what they own and why — without feeling overwhelmed."
            }
          />
        </div>
      </div>

      <div className="flex gap-1 w-full pb-1">
        <div className="bg-[#F8F1EC] w-full  py-[65px]">
          <div className="max-w-[360px] mx-auto">
            <h3 className="text-[23px] font-normal font-serif pb-[19px]">
              Are your investments in line with your decisions?
            </h3>
            <p className="font-light font-sans text-[16px] text-[#806863] pb-2">
              We consolidate all your assets, regardless of where they are held
              or the type of instrument.
            </p>
            <p className="font-light font-sans text-[16px] text-[#806863]">
              Our approach ensures your portfolio reflects your risk profile,
              while continuously monitoring for hidden fees, errors, or
              potential fraud. You receive clear, actionable insights to help
              you stay fully informed about your investments.
            </p>
          </div>
        </div>
        <div className="bg-[#F8F1EC] w-full py-[65px]">
          <div className="max-w-[490px] mx-auto">
            <h3 className="font-normal font-serif text-[23px] pb-[19px]">
              An efficient monitoring
            </h3>
            <p className="font-light font-sans text-[16px] text-[#806863] pb-2">
              CAPAnalysis specializes in consolidation, performance measurement,
              and reporting for private and institutional clients
            </p>
            <p className="font-light font-sans text-[16px] text-[#806863] pb-2">
              Our strength lies in our ability to aggregate assets across all
              financial institutions, asset classes, currencies and ownership
              structures from public and private markets to non-financial
              instruments (fine art, collections).
            </p>
            <p className="font-light font-sans text-[16px] text-[#806863] pb-2">
              We adopt a holistic approach to assess performance and allocation,
              delivering transparent, benchmarked analysis with relevant market
              context.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="bg-[#F8F1EC] w-full py-[65px]">
          <h2 className="text-center text-[23px] font-serif font-normal">
            Verification - Assessment - Comparison
          </h2>
          <div className="flex justify-between w-full mx-auto max-w-[1166px] py-[35px] divide-x-[0.6px] divide-[#BAACA9]">
            <div className="flex-1 max-w-[360px] pr-[45px]">
              <div className="max-w-[297px]">
                <div className="text-[15px] uppercase font-sans font-semibold">
                  Risks
                </div>
                <p className="font-sans font-light text-[16px] text-[#806863]">
                  Our risk staging allow you to be pro-actively prepared to
                  financial markets erratic behaviours and think through
                  efficiently your presence on the market.
                </p>
              </div>
            </div>

            <div className="flex-1 max-w-[360px] px-[45px]">
              <div className="max-w-[297px]">
                <div className="text-[15px] uppercase font-sans font-semibold">
                  Performance
                </div>
                <p className="font-sans font-light text-[16px] text-[#806863]">
                  Our utmost mission is to demonstrate with sound elements what
                  contributed to your performance.
                </p>
              </div>
            </div>

            <div className="flex-1 max-w-[360px] pl-[45px]">
              <div className="max-w-[297px]">
                <div className="text-[15px] uppercase font-sans font-semibold">
                  Fees & Taxes
                </div>
                <p className="font-sans font-light text-[16px] text-[#806863]">
                  We monitor and report the fees and taxes you were charged
                  following your custodian agreements and fiscal
                  status/domicile.
                </p>
              </div>
            </div>
          </div>
          <p className="font-sans text-[16px] font-normal text-center">
            We enable superior control and more transparency
            <br />
            over clients’ data and status of investment.
          </p>
        </div>
      </div>

      <div className="pt-[51px] text-center">
        <h2 className="text-[35px] font-serif font-normal">Pricing</h2>
        <div className="font-serif italic text-[22px] pb-2">
          Tailored to your needs
        </div>
        <p className="font-sans font-light text-[16px] text-[#806863]">
          Our pricing is customized based on the complexity
          <br />
          and volume of the following elements:
        </p>

        <div className="flex text-start justify-between w-full mx-auto max-w-[1472px] py-[70px] divide-x-[0.6px] divide-[#BAACA9]">
          <div className="flex-1 max-w-[294px] pr-[45px]">
            <div className="max-w-[294px]">
              <div className="text-[15px] uppercase font-sans font-semibold">
                CUSTODIANS
              </div>
              <p className="font-sans font-light text-[16px] text-[#806863]">
                Where are your assets held?
                <br />
                We work with a wide range of counterparties, including banks,
                prime brokers, and insurance companies.
              </p>
            </div>
          </div>

          <div className="flex-1 max-w-[294px]">
            <div className="max-w-[294px] px-[34px]">
              <div className="text-[15px] uppercase font-sans font-semibold">
                PORTFOLIOS
              </div>
              <p className="font-sans font-light text-[16px] text-[#806863] ">
                Our system consolidates both financial (e.g. stocks, bonds,
                funds), and non-financial assets (e.g. real estate,
                collections).
              </p>
              <p className="font-sans font-light text-[16px] text-[#806863]">
                Valuations are aggregated using objective criteria and
                independent sources.
              </p>
            </div>
          </div>

          <div className="flex-1 max-w-[294px]">
            <div className="max-w-[294px] px-[34px]">
              <div className="text-[15px] uppercase font-sans font-semibold">
                INSTRUMENTS
              </div>
              <p className="font-sans font-light text-[16px] text-[#806863]">
                We monitor and report the fees and taxes you were charged
                following your custodian agreements and fiscal status/domicile.
              </p>
            </div>
          </div>

          <div className="flex-1 max-w-[294px]">
            <div className="max-w-[294px] px-[34px]">
              <div className="text-[15px] uppercase font-sans font-semibold">
                TRANSACTIONS
              </div>
              <p className="font-sans font-light text-[16px] text-[#806863]">
                We record all transactions across your portfolios and
                systematically review the associated fees and taxes for
                accuracy.
              </p>
            </div>
          </div>

          <div className="flex-1 max-w-[294px]">
            <div className="max-w-[294px] px-[34px]">
              <div className="text-[15px] uppercase font-sans font-semibold">
                TYPE OF REPORTS
              </div>
              <p className="font-sans font-light text-[16px] text-[#806863]">
                Upon request, we produce a variety of reports:
              </p>
              <ul className="font-sans font-light text-[16px] text-[#806863]">
                <li>
                  <span className="font-semibold text-[16px]">Analytical</span> snapshots
                  highlighting key performance drivers and notable financial
                  events
                </li>
                <li>
                  <span className="font-semibold text-[16px]">
                    In-depth analyses detailing<br/>
                  </span>
                  performance attribution and risk exposure across your
                  investments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
