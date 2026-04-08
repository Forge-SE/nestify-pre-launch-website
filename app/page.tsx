



import { InteractiveGrid } from "@/components/background/InteractiveGrid";

export default function Home() {
  return (
    <>
      <InteractiveGrid />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 gap-4">
        <h1 className="hemming text-6xl text-white">Opportunities without the noise</h1>
        <p className="text-gray-200 text-base w-1/2 sora font-light">Nestify is where high-quality opportunities find you—curated, intentional, and built for students who are ready to move.</p>
        <button className="px-4 py-2 rounded-full text-white bg-orange-500 sora text-xs flex justify-center items-center hover:bg-white hover:text-black transition-colors duration-300">
            Get Beta Access ↪
        </button>
      </div>
    </>
  );
}
