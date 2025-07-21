"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();
  console.log("Path:", pathname);
  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          className={cn(
            pathname === href &&
              "text-indigo-500 font-semibold shadow-lg rounded-lg p-1"
          )}
          href={href}
          key={label}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
