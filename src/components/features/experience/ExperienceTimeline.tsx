"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { experienceConfig, type Experience } from "@/lib/config/experience";

interface ExperienceTimelineProps {
  experiences?: Experience[];
}

export function ExperienceTimeline({ experiences = experienceConfig }: ExperienceTimelineProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-none z-[5]",
          hoveredId ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="flex flex-col gap-8 relative z-10">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative group"
            onMouseEnter={() => setHoveredId(exp.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              className={cn(
                "cursor-pointer transition-all duration-300",
                hoveredId && hoveredId !== exp.id ? "opacity-30" : "opacity-100"
              )}
            >
              <h3 className="text-white font-semibold text-lg mb-1">{exp.company}</h3>
              <p className="text-zinc-500 text-sm">{exp.role}</p>
            </div>

            <div
              className={cn(
                "lg:hidden mt-4 w-full p-5 bg-zinc-950/95 border border-zinc-800 rounded-xl backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[10]",
                hoveredId === exp.id
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
              )}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-zinc-900">
                <img src={exp.image} alt={exp.company} className="object-cover w-full h-full opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute bottom-2 left-2 text-sm font-medium text-white bg-blue-600/80 px-3 py-1 rounded-full backdrop-blur-sm">
                  {exp.period}
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                {exp.description}
              </p>
            </div>

            <div
              className={cn(
                "hidden lg:block absolute left-full ml-8 top-0 w-96 p-5 bg-zinc-950/95 border border-zinc-800 rounded-xl backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left z-[10]",
                hoveredId === exp.id
                  ? "opacity-100 translate-x-0 scale-100 rotate-[-2deg] pointer-events-auto"
                  : "opacity-0 -translate-x-4 scale-95 rotate-0 pointer-events-none"
              )}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-zinc-900">
                <img src={exp.image} alt={exp.company} className="object-cover w-full h-full opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute bottom-2 left-2 text-sm font-medium text-white bg-blue-600/80 px-3 py-1 rounded-full backdrop-blur-sm">
                  {exp.period}
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
