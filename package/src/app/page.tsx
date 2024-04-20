import dynamic from "next/dynamic";

const ControlPanel = dynamic(() => import("@/components/ControlPanel"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-full h-full">
      <ControlPanel />
    </main>
  );
}
