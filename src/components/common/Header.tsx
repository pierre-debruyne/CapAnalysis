import Image from "next/image";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <header className="bg-dark px-[41px] pt-7 pb-[19px]">
      <div className="relative flex items-center">
        {/* Logo */}
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={260}
          height={56}
          style={{ width: 260, height: 56 }}
        />

        {/* Navigation */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-[61px]">
          <NavItem
            label="Our Expertise"
            children={[
              {
                label: "Portfolio Monitoring & Mentorship",
                href: "/portfolio-monitoring-&-mentorship",
              },
              {
                label: "Forensic Financial Analysis",
                href: "/forensic-financial-analysis",
              },
              {
                label: "CAPAct",
                href: "/capact-innovation-software-performance-investments",
              },
            ]}
          />
          <NavItem label="THE TEAM" href="/team" />
          <NavItem label="NEWS" href="/news" />
          <NavItem label="CONTACT" href="/contact" />
        </nav>
      </div>
    </header>
  );
}
