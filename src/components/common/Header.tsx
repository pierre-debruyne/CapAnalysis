"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import NavItem from "./NavItem"

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-30 bg-dark backdrop-blur
             px-[41px] pt-7 pb-[19px]"
    >
      {" "}
      <div className="relative flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={260}
            height={56}
            className="h-auto w-[180px] lg:w-[260px]"
            priority
          />
        </Link>

        {/* Burger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 ring-1 ring-white/20"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Navigation desktop */}
        <nav className="hidden lg:flex absolute z-10 left-1/2 -translate-x-1/2 gap-[32px] xl:gap-[51px]">
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
          {/* <NavItem label="NEWS" href="/news" /> */}
          <NavItem label="CONTACT" href="/contact" />
        </nav>
      </div>
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto bg-black/50"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`lg:hidden fixed right-0 top-0 z-50 h-full w-[85%] max-w-[360px] bg-dark/95 backdrop-blur-md border-l border-white/10
        transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-5 border-b border-white/10">
          <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
            <Image
              src="/assets/icons/logo.svg"
              alt="Logo"
              width={180}
              height={40}
              className="h-auto w-[160px]"
              priority
            />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            className="inline-flex items-center justify-center rounded-md p-2 ring-1 ring-white/20"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        <nav className="px-4 py-3 space-y-2 text-white bg-dark -translate-y-1">
          <MobileLink
            href="/portfolio-monitoring-&-mentorship"
            onClick={() => setOpen(false)}
          >
            Portfolio Monitoring & Mentorship
          </MobileLink>
          <MobileLink
            href="/forensic-financial-analysis"
            onClick={() => setOpen(false)}
          >
            Forensic Financial Analysis
          </MobileLink>
          <MobileLink
            href="/capact-innovation-software-performance-investments"
            onClick={() => setOpen(false)}
          >
            CAPAct
          </MobileLink>

          <div className="h-px bg-white/10 my-3" />

          {/* <MobileLink href="/team" onClick={() => setOpen(false)}>
            THE TEAM
          </MobileLink> */}
          
          <MobileLink href="/news" onClick={() => setOpen(false)}>
            NEWS
          </MobileLink>
          <MobileLink href="/contact" onClick={() => setOpen(false)}>
            CONTACT
          </MobileLink>
        </nav>
      </aside>
    </header>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-xl px-3 py-3 text-base leading-none hover:bg-white/5 focus:bg-white/10 outline-none transition"
    >
      {children}
    </Link>
  )
}