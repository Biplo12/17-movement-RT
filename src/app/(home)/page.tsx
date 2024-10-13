import CardFunctionLocation from "./_components/card-function-location";
import PanelCard from "./_components/panel-card";

export default function Home() {
  return (
    <div
      className="flex flex-col items-start justify-center h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <PanelCard>
        <CardFunctionLocation />
      </PanelCard>
    </div>
  );
}
