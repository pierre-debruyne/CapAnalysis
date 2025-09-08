// src/components/navigation/NavItem.tsx
import React from "react";
import Link from "next/link";

type NavItemProps = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export default function NavItem({ label, href, children }: NavItemProps) {
  const hasChildren = children && children.length > 0;

  return (
    <div className="relative group">
      {/* Label */}
      {href ? (
        <Link
          href={href}
          className="py-2 text-beige font-sans font-normal text-sm uppercase tracking-wide hover:text-brown transition-colors"
        >
          {label}
        </Link>
      ) : (
        <a className="font-sans font-normal text-beige text-sm uppercase tracking-wide cursor-pointer hover:text-brown transition-colors">
          {label}
        </a>
      )}

      {/* Sous-menu */}
      {hasChildren && (
        <div className="px-[13px] pb-[13px] absolute text-sm left-[-13px] mt-[18px] w-max bg-dark text-beige opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <hr className="border-t pb-[12px] border-beige" />
          <ul className="space-y-2">
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
  );
}