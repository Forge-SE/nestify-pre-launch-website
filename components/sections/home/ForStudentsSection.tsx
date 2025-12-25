"use client";
import Image from "next/image";
import { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const features = [
  {
    icon: "/search.png",
    text: "Personalized feed of jobs, internships, and updates",
  },
  {
    icon: "/send.png",
    text: "Apply directly on the platform",
  },
  {
    icon: "/saved.png",
    text: "Save opportunities for later",
  },
  {
    icon: "/notification.png",
    text: "Get notified when something matches your interests",
  },
];

const cards = [
  {
    id: 1,
    companyName: "Google",
    industry: "Technology",
    logoUrl: "/Google_Symbol_0.svg",
    roleTitle: "Summer Internship 2025",
    compensationOrType: "Internship • Remote",
    locationAndDuration: "Mountain View, CA • 12 weeks",
  },
  {
    id: 2,
    companyName: "University of Ghana SRC",
    industry: "Education",
    logoUrl: "/ug.png",
    roleTitle: "Merit Awards Open",
    compensationOrType: "Scholarship • Full Tuition",
    locationAndDuration: "Applications close Jan 15",
  },
  // {
  //   id: 3,
  //   companyName: "Ghana Innovation Hub",
  //   industry: "Events",
  //   logoUrl: "/ls.jpg",
  //   roleTitle: "Tech Career Fair",
  //   compensationOrType: "Event • Free Entry",
  //   locationAndDuration: "Campus Center • Feb 20",
  // },
];

export default function ForStudentsSection() {
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set([1]));

  const toggleBookmark = (id: number) => {
    setBookmarked((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="w-full flex flex-col items-center pt-24 pb-16 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-between">
        {/* Left: Headline and features */}
        <div className="flex-1 w-full max-w-md">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="h-0.5 w-8 rounded-full bg-[#F97015]"></span>
            <span className="uppercase tracking-[0.08em] text-xs font-semibold text-[#F97015]">For Students</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-3 md:mb-6">
            More than just school
          </h2>
          <p className="text-base md:text-xl text-zinc-400 md:text-zinc-500 mb-6 md:mb-10">
            Your academic, social, and career life — organized in one place.
          </p>
          <div className="flex flex-col gap-4 md:gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4">
                <span className="flex items-center justify-center">
                  <Image src={f.icon} alt="feature icon" width={22} height={22} />
                </span>
                <span className="text-sm md:text-base text-zinc-900 font-normal">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Job Cards */}
        <div className="flex-1 w-full flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Layered background rectangles */}
            <div className="absolute -left-4 top-6 w-full h-full rounded-2xl bg-white shadow-md opacity-80 z-0 blur-[1px]"></div>
            <div className="absolute left-0 top-0 w-full h-full rounded-2xl bg-white shadow-lg z-0"></div>
            <div className="relative rounded-2xl border border-zinc-100 bg-white shadow-md pt-8 pb-4 px-4 md:px-6 z-10 min-h-95">
              {/* Browser window dots inside card */}
              <div className="absolute left-6 top-4 flex gap-2">
                <span className="w-3 h-3 rounded-full bg-neutral-200"></span>
                <span className="w-3 h-3 rounded-full bg-neutral-200"></span>
                <span className="w-3 h-3 rounded-full bg-neutral-200"></span>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                {cards.map((card) => {
                  const isBookmarked = bookmarked.has(card.id);
                  return (
                    <div
                      key={card.id}
                      className="flex flex-col justify-between items-start gap-3 p-3 bg-white shadow-sm rounded-lg w-full border border-gray-100"
                    >
                      <div className="flex justify-between items-center w-full">
                        <div className="flex justify-start items-center gap-2">
                          <div className="w-10 h-10 bg-gray-50/10 rounded-md border border-dotted border-gray-50 overflow-hidden">
                            {card.logoUrl ? (
                              <Image
                                src={card.logoUrl}
                                alt={`${card.companyName} Logo`}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover rounded-md"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                                Logo
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col justify-center items-start">
                            <span className="text-sm font-semibold text-black">{card.companyName}</span>
                            {card.industry && <span className="text-xs text-gray-500">{card.industry}</span>}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleBookmark(card.id)}
                          className={`p-1 rounded transition-colors ${isBookmarked ? "text-[#F97015]" : "text-gray-400 hover:text-gray-600"}`}
                          aria-label="Bookmark job"
                        >
                          <BookmarkIcon className={`w-5 h-5 ${isBookmarked ? "fill-[#F97015]" : ""}`} />
                        </button>
                      </div>

                      <div className="flex flex-col justify-center items-start gap-0.5">
                        <h3 className="text-base font-semibold text-black">{card.roleTitle}</h3>
                        {card.compensationOrType && (
                          <p className="text-xs text-gray-700 font-normal">{card.compensationOrType}</p>
                        )}
                      </div>
                      <div className="flex flex-col justify-center items-start">
                        {card.locationAndDuration && (
                          <p className="text-gray-500 font-normal text-xs">{card.locationAndDuration}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
