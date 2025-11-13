"use client";

import Link from "next/link";

interface NavbarItem {
  label: string;
  href: string;
}

const navbarItems: NavbarItem[] = [
  { label: "Motorola", href: "/motorola" },
];

function Navbar() {
  return (
    <nav className="w-full border-b border-dev-secondary bg-dev-bg">
      <div className="mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="text-xl font-semibold text-dev-text hover:text-dev-accent">
          Cursor Curious
        </Link>
        <div className="flex items-center gap-6">
          {navbarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base text-dev-text hover:text-dev-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
