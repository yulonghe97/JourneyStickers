'use client'
import ControlPanel from "@/components/ControlPanel";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Home() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <main className="w-full h-full">
      {!isSmallDevice ? (
        <ControlPanel />
      ) : (
        <div className="flex w-full h-full justify-center items-center mt-10">Only Desktop is supported</div>
      )}
    </main>
  );
}
