/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/common/logo";
import React from "react";

const socialIcons = [
  {
    href: "https://17movement.net",
    icon: "website-icon",
  },
  {
    href: "https://discord.com/invite/cbdkQfseH3",
    icon: "discord-icon",
  },
];

interface SocialIconProps {
  href: string;
  icon: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <img
      src={`/icons/${icon}.svg`}
      alt={icon}
      className="w-[26px] h-[26px] hover:brightness-125 transition-all duration-300"
    />
  </a>
);

const TopBarIcons: React.FC = () => (
  <div className="flex items-center justify-center gap-4">
    {socialIcons.map((icon) => (
      <SocialIcon key={icon.href} {...icon} />
    ))}
  </div>
);

const PanelCardTopBar: React.FC = () => (
  <div className="relative overflow-hidden">
    <div className="flex items-center justify-start p-1.5 pr-3.5 w-full bg-[#090A0E]">
      <Logo withShadow={true} />
      <div className="flex flex-col justify-center items-start w-full h-full">
        <h1 className="font-bold text-sm leading-none">17 MOVEMENT</h1>
        <p className="text-[#696264] text-xs leading-none">Development tool</p>
      </div>
      <TopBarIcons />
    </div>

    <div className="absolute inset-0 bg-transparent bg-gradient-to-l from-transparent from-55% to-[#FF1A35] to-100% opacity-15 pointer-events-none" />
  </div>
);

export default PanelCardTopBar;
