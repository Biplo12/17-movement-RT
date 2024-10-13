import React from "react";
import PanelCardTopBar from "./Partials/panel-card-top-bar";
import PanelCardNavbar from "./Partials/panel-card-navbar";

interface PanelCardProps {
  children: React.ReactNode;
}

const PanelCard: React.FC<PanelCardProps> = ({ children }): JSX.Element => {
  return (
    <div className="bg-[#090A0E] text-white w-[520px] h-[95vh]">
      <PanelCardTopBar />
      <PanelCardNavbar />
      {children}
    </div>
  );
};
export default PanelCard;
