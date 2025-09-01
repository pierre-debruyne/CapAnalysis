import Article from "@/components/common/Article";
import Footer from "@/components/common/Footer";

export default function News() {
  return (
    <div>
      <div className="bg-dark w-full h-[235px] flex items-center justify-center pt-[60px] pb-[43px]">
        <h2 className="text-beige text-[60px] text-center whitespace-pre-line leading-[1.1]">
          {`CAPAnalysis\nin the news`}
        </h2>
      </div>

      <div className="pt-[61px]">
        <Article
          imgSrc={"/assets/images/news/post_01.jpg"}
          title={
            "Washington faces a global market ‘rebellion’overrecord U.S. debt"
          }
          date={"02/02/2024"}
          text={
            "The global economyis approaching the point of no return courtesy of mounting government debt, believes JPMorgan ChaseCEO Jamie Dimon, and it will lead toa massive falling-out of markets and federal institutions."
          }
          text2={
            "Currently the American national debt stands at $34.14trillion — about $100,000 for every person in theU.S. — with the debt ceiling currently suspended until 2025 courtesy of a dealpassed in the summer of 2023."
          }
          posted={"Control"}
          hashtag="#control #reporting #valuation"
        />

        <Article
          imgSrc={"/assets/images/news/post_02.png"}
          title={"Taking Bespoke Reporting To A Higher Level"}
          date={"29/06/2021"}
          text={
            "Our unique way of supporting and assisting clients in optimising their investment returns sets us apart from others and our distinction is achieved by our ability to consolidate all of our clients’ wealth. Wealth to us doesn’t just mean portfolios or listed financial instruments, but also non-financial assets such as art, car collections, real estate […]"
          }
          posted={"Finding the right tool"}
        />

        <Article
          imgSrc={"/assets/images/news/post_03.jpg"}
          title={
            "Lost Fortune Pits Rich Russian Against Rothschild in New York Court"
          }
          date={"29/06/2021"}
          text={
            "Two decades ago this month, senior officers there signed the paperwork with Russian oil magnate Sergey Bogdanchikov that entrusted his growing fortune to the storied bank. But instead of protecting and increasing his wealth, Bogdanchikov claims, a prominent relationship manager at the bank steered it to a coterie of accomplices across Europe and the U.S. who cost[…]"
          }
          posted={"Control"}
        />
      </div>

      <Footer />
    </div>
  );
}
