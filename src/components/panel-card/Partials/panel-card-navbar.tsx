"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navbarItems = [
  {
    label: "Home",
    icon: "home-icon",
    href: "/",
  },
  {
    label: "Prop tool",
    icon: "prop-tool-icon",
    href: "/prop-tool",
  },
  {
    label: "World editor",
    icon: "website-icon",
    href: "/world-editor",
  },
  {
    label: "Interior debugger",
    icon: "interior-debugger-icon",
    href: "/interior-debugger",
  },
  {
    label: "Ped spawner",
    icon: "ped-spawner-icon",
    href: "/ped-spawner",
  },
];

interface NavbarItemProps {
  label: string;
  icon: string;
  href: string;
  isActive: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  icon,
  href,
  isActive,
}) => (
  <Link
    href={href}
    className={cn(
      "flex items-start justify-start gap-2 p-2.5 transition-colors",
      isActive && "bg-[#121317]"
    )}
  >
    <img
      src={`/icons/${isActive ? `${icon}-active` : icon}.svg`}
      alt={icon}
      className="w-5 h-5"
    />
    <span className="sr-only">{label}</span>
  </Link>
);

const PanelCardNavbar: React.FC = (): JSX.Element => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex items-start justify-start gap-4 p-4 bg-[#090A0E] w-full">
      {navbarItems.map((item) => (
        <NavbarItem key={item.href} {...item} isActive={isActive(item.href)} />
      ))}
    </nav>
  );
};

export default PanelCardNavbar;
