import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    icon: "/students.png",
    title: "Students",
    desc: "Discover tailored opportunities matched to your interests and career goals.",
    href: "#students"
  },
  {
    icon: "/universities.png",
    title: "Universities",
    desc: "Broadcast targeted announcements and increase student engagement.",
    href: "#universities"
  },
  {
    icon: "/companies.png",
    title: "Companies",
    desc: "Post opportunities and connect directly with top student talent.",
    href: "#companies"
  },
];

export default function SolutionSection() {
  return (
    <section className="w-full flex flex-col items-center pt-24 pb-16 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-between">
        {/* Left: Headline and description */}
        <div className="flex-1 w-full max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-0.5 w-8 rounded-full bg-zinc-200"></span>
            <span className="uppercase tracking-[0.08em] text-xs font-semibold text-zinc-400">The Solution</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
            One platform<br />for everyone
          </h2>
          <p className="text-lg text-zinc-500 mb-8">
            Nestify brings students, universities, and companies together on a single, unified platform.
          </p>
          <Link href="#waitlist" className="w-full md:w-1/2 flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-zinc-200 text-zinc-900 font-medium bg-white hover:bg-zinc-50 transition">
            Get Early Access <span className="text-xl">→</span>
          </Link>
        </div>
        {/* Right: Options */}
        <div className="flex-1 w-full flex flex-col gap-6">
          {solutions.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="flex items-start gap-4 p-6 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition cursor-pointer group"
            >
              <Image src={item.icon} alt={item.title + ' icon'} width={32} height={32} className="mt-1" />
              <div>
                <div className="text-lg font-semibold text-zinc-900">{item.title}</div>
                <div className="text-zinc-500 mt-1 text-base">{item.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
