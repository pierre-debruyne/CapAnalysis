// src/components/navigation/NavItem.tsx
import React from "react"
import Link from "next/link"

type NavItemProps = {
  label: string
  href?: string
  children?: { label: string; href: string }[]
}

export default function NavItem({ label, href, children }: NavItemProps) {
  const hasChildren = children && children.length > 0

  return (
    <div className="relative group">
      {/* Label */}
      {href ? (
        <Link
          href={href}
          className="px-4 py-2 text-beige font-serif uppercase tracking-wide hover:text-brown transition-colors"
        >
          {label}
        </Link>
      ) : (
        <a className="px-4 py-2 text-beige font-serif uppercase tracking-wide cursor-pointer hover:text-brown transition-colors">
          {label}
        </a>
      )}

      {/* Sous-menu */}
      {hasChildren && (
        <div className="absolute left-0 mt-2 bg-dark text-beige shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <ul className="p-4 space-y-2">
            {children.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="block hover:text-brown transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}