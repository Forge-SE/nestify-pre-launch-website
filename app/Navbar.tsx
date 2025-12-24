import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 md:px-20 bg-white">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Nestify logo" width={36} height={36} className="rounded-lg" />
        <span className="font-bold text-lg text-zinc-900">nestify</span>
      </div>
      <div className="hidden md:flex gap-8 text-zinc-500 font-medium">
        <a href="#students" className="hover:text-zinc-900 transition">Students</a>
        <a href="#universities" className="hover:text-zinc-900 transition">Universities</a>
        <a href="#companies" className="hover:text-zinc-900 transition">Companies</a>
      </div>
      <a href="#waitlist" className="bg-zinc-900 text-white rounded-full px-6 py-2 font-medium hover:bg-zinc-800 transition">
        Join Waitlist
      </a>
    </nav>
  );
}
