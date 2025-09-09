import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import InfoBlock from "@/components/common/InfoBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio monitoring | CAPANALYSIS",
  description: "Consolidation and strategic oversight for private portfolios with subscription oversight, performance analysis, and suitability testing.",
};

export default function PortfolioMonitoringMentorship() {
  return (
    <div>
      {/* Hero - Portfolio Monitoring & Mentorship */}
      <Hero
        imgSrc="/assets/images/hero_pmm.jpeg"
        imgAlt=""
        title={`Portfolio Monitoring\n& Mentorship`}
        text={`Wealth needs guardianship,\nnot just management.`}
        imgPosition="object-[10%_90%] lg:object-[20%_50%]"
      />

      {/* Bloc 1 - Independent financial expertise for control, protection, and clarity. */}
      <div className="md:pt-[67px] md:pb-[48px] p-[35px] md:px-[50px]">
        <h2 className="text-[35px] font-serif text-center text-[#292a2a] leading-11 pb-[10px]">
          Independent financial expertise for
          <br /> control, protection, and clarity.
        </h2>
        <p className="pb-[67px] font-sans font-light text-center text-[#806863] text-[16px]">
          CAPAnalysis is your financial bodyguard: monitoring your wealth,
          <br /> translating complexity, and ensuring your interests come first
          – always.
        </p>
        <div className="grid xl:grid-cols-3 md:grid-cols-2  auto-rows-auto gap-x-[170px] gap-y-[60px] max-w-max mx-auto items-start">
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
              "We ensure that your risk profile is aligned with your chosen mandate and that your investments remain consistent with it."
            }
          />
          <InfoBlock
            UppercaseText={"Client Education & Mentoring\n"}
            LowercaseText={
              "Designed for individuals and families who want to understand what they own and why — without feeling overwhelmed."
            }
          />
          <InfoBlock
            UppercaseText={"PORTFOLIO AGGREGATION\n"}
            LowercaseText={
              "We consolidate and standardize your entire investment universe both financial and non-financial."
            }
          />
        </div>
      </div>

      {/* Bloc 2 - Are your investments in line with your decisions & An efficient monitoring */}
      <div className="flex flex-col lg:flex-row gap-1 w-full pb-1">
        <div className="bg-[#e9d7c8] w-full py-[35px] md:py-[65px]">
          <div className="lg:max-w-[490px] px-[35px] md:p-[50px] xl:p-0 mx-auto">
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
        <div className="bg-[#e9d7c8] w-full py-[35px] md:py-[65px]">
          <div className="lg:max-w-[490px] px-[35px] md:p-[50px]  xl:p-0 mx-auto">
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

      {/* Bloc 3 - Verification - Assessment - Comparison */}
      <div className="flex w-full">
        <div className="bg-[#e9d7c8] w-full py-[35px] md:py-[65px]">
          <h2 className="text-center text-[23px] font-serif font-normal">
            Verification - Assessment - Comparison
          </h2>
          <div className="w-full mx-auto max-w-[1166px] px-[35px] md:px-[50px] py-[35px] flex flex-col gap-5 md:grid md:grid-cols-2 md:justify-items-center xl:flex xl:flex-row xl:items-stretch xl:gap-0 xl:divide-x-[0.6px] xl:divide-[#BAACA9]">
            <div className="w-full md:w-auto xl:flex-1 xl:h-full xl:flex xl:pr-[45px] text-center xl:text-start md:justify-self-center">
              <div className="md:max-w-[360px] xl:max-w-[297px] mx-auto xl:mx-0">
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

            <div className="w-full md:w-auto xl:flex-1 xl:h-full xl:flex xl:px-[45px] text-center xl:text-start md:justify-self-center">
              <div className="md:max-w-[360px] xl:max-w-[297px] mx-auto xl:mx-0 xl:h-[119px]">
                <div className="text-[15px] uppercase font-sans font-semibold">
                  Performance
                </div>
                <p className="font-sans font-light text-[16px] text-[#806863]">
                  Our utmost mission is to demonstrate with sound elements what
                  contributed to your performance.
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto md:col-span-2 md:justify-self-center xl:flex-1 xl:h-full xl:flex xl:pl-[45px] text-center xl:text-start">
              <div className="md:max-w-[360px] xl:max-w-[297px] mx-auto xl:mx-0">
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

      {/* Bloc 4 - Pricing */}
      <div className="md:pt-[51px] pt-[35px] text-center">
        <h2 className="text-[35px] font-serif font-normal">Pricing</h2>
        <div className="font-serif italic text-[22px] pb-2">
          Tailored to your needs
        </div>
        <p className="font-sans font-light text-[16px] text-[#806863]">
          Our pricing is customized based on the complexity
          <br />
          and volume of the following elements:
        </p>

        <div className="w-full mx-auto max-w-[1472px] p-[35px] md:py-[70px] flex flex-col gap-10 md:px-[50px]">
          <div className="flex flex-col gap-5  md:grid md:grid-cols-2 md:gap-10 md:justify-items-center md:max-w-[900px] md:mx-auto 2xl:flex 2xl:flex-row 2xl:items-stretch 2xl:gap-0 2xl:max-w-none 2xl:divide-x-[0.6px] 2xl:divide-[#BAACA9]">
            <div className="md:max-w-[360px] 2xl:max-w-[294px] w-full mx-auto text-center md:text-start 2xl:flex-1 2xl:px-[34px]">
              <div className="text-[15px] uppercase font-sans font-semibold">
                Custodians
              </div>
              <p className="font-sans font-light text-[16px] text-[#806863]">
                Where are your assets held? <br />
                We work with a wide range of counterparties, including banks,
                prime brokers, and insurance companies.
              </p>
            </div>

            <div className="md:max-w-[360px] 2xl:max-w-[294px] w-full mx-auto text-center md:text-start 2xl:flex-1 2xl:px-[34px]">
              <div className="text-[15px] uppercase font-sans font-semibold">
                Portfolios
              </div>
              <p className="font-sans font-light text-[16px] text-[#806863]">
                Our system consolidates both financial (e.g. stocks, bonds,
                funds), and non-financial assets (e.g. real estate,
                collections).
              </p>
              <p className="font-sans font-light text-[16px] text-[#806863]">
                Valuations are aggregated using objective criteria and
                independent sources.
              </p>
            </div>

            <div className="md:max-w-[360px] 2xl:max-w-[294px] w-full mx-auto text-center md:text-start 2xl:flex-1 2xl:px-[34px]">
              <div className="text-[15px] uppercase font-sans font-semibold">
                Instruments
              </div>
              <p className="font-sans font-light text-[16px] text-[#806863]">
                We monitor and report the fees and taxes you were charged
                following your custodian agreements and fiscal status/domicile.
              </p>
            </div>

            <div className="md:max-w-[360px] 2xl:max-w-[294px] w-full mx-auto text-center md:text-start 2xl:flex-1 2xl:px-[34px]">
              <div className="text-[15px] uppercase font-sans font-semibold">
                Transactions
              </div>
              <p className="font-sans font-light text-[16px] text-[#806863]">
                We record all transactions across your portfolios and
                systematically review the associated fees and taxes for
                accuracy.
              </p>
            </div>

            <div className="md:max-w-[360px] 2xl:max-w-[294px] w-full mx-auto text-center md:text-start md:col-span-2 md:justify-self-center 2xl:flex-1 2xl:px-[34px]">
              <div className="text-[15px] uppercase font-sans font-semibold">
                Type of Reports
              </div>
              <p className="font-sans font-light text-[16px] text-[#806863]">
                Upon request, we produce a variety of reports:
              </p>
              <ul className="font-sans font-light text-[16px] text-[#806863] space-y-2">
                <li>
                  <span className="font-semibold">Analytical </span>
                  snapshots highlighting key performance drivers and notable
                  financial events
                </li>
                <li>
                  <span className="font-semibold">
                    In-depth analyses detailing{" "}
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
