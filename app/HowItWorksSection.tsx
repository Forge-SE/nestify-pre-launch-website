"use client";

const howItWorks = [
  {
    label: "Students",
    color: "#F97015",
    steps: [
      { num: "01", title: "Sign Up", desc: "Create your profile" },
      { num: "02", title: "Select Interests", desc: "Choose what matters" },
      { num: "03", title: "View Feed", desc: "See opportunities" },
      { num: "04", title: "Apply", desc: "Take action" },
    ],
  },
  {
    label: "Universities",
    color: "#F97015",
    steps: [
      { num: "01", title: "Log In", desc: "Access dashboard" },
      { num: "02", title: "Post", desc: "Create content" },
      { num: "03", title: "Target", desc: "Reach audience" },
      { num: "04", title: "Track", desc: "View insights" },
    ],
  },
  {
    label: "Companies",
    color: "#F97015",
    steps: [
      { num: "01", title: "Create Profile", desc: "Set up company" },
      { num: "02", title: "Post", desc: "List opportunities" },
      { num: "03", title: "Reach", desc: "Connect with students" },
      { num: "04", title: "Receive", desc: "Get applications" },
    ],
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white py-24 px-4 flex flex-col items-center mt-20">
      <div className="max-w-5xl w-full mx-auto">
        <div className="mb-12">
          <div className="uppercase text-xs tracking-widest text-zinc-400 font-semibold mb-2" style={{letterSpacing:'.12em'}}>How it works</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-2 leading-tight">
            Simple. Organized.<br />
            <span className="text-zinc-400 font-extrabold">Effective.</span>
          </h2>
        </div>
        {howItWorks.map((group, idx) => (
          <div key={group.label} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-0.5 w-8 rounded-full" style={{background: group.color}}></span>
              <span className="uppercase tracking-wider text-xs font-semibold" style={{color: group.color, letterSpacing:'0.08em'}}>{group.label}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {group.steps.map((step) => (
                <div key={step.num} className="rounded-xl border border-zinc-200 bg-white px-6 py-6 flex flex-col min-w-[180px] min-h-[110px] shadow-sm">
                  <div className="text-xs text-zinc-300 font-bold mb-2">{step.num}</div>
                  <div className="text-lg font-semibold text-zinc-900 mb-1">{step.title}</div>
                  <div className="text-sm text-zinc-400">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
