import ControlPanel from "@/components/ControlPanel";
import Navigation from "@/components/Navigation";
import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className=" text-5xl font-bold">Journey Stickers</div>
        <Navigation />
        <ControlPanel />
      </div>
    </main>
  );
}
