"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { SocialLink } from "./SocialLinks";
import { Button } from "@/components/ui/Button";
import { ExperienceTimeline } from "@/components/features/experience/ExperienceTimeline";
import { profileConfig } from "@/lib/config/profile";

export function ProfileCard() {
  return (
    <div className="relative w-full max-w-6xl mx-auto animate-in px-4 sm:px-6 lg:px-8">
      <div className="relative bg-black border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-visible transition-all duration-500 hover:border-zinc-700">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 relative z-10">
          <div className="flex-1 min-w-0 lg:max-w-lg">
            <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-10">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden mb-6 sm:mb-8 shadow-[0_0_30px_-10px_rgba(37,99,235,0.3)]">
                <Image
                  src={profileConfig.avatar}
                  alt={profileConfig.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2 text-center sm:text-left">
                {profileConfig.name}
              </h1>
              {profileConfig.login && (
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl sm:text-3xl font-semibold text-zinc-300">
                    AKA
                  </span>
                  <span className="text-sm sm:text-base text-zinc-400">
                    {profileConfig.login}
                  </span>
                </div>
              )}
              <p className="text-blue-500 font-medium tracking-wide text-base sm:text-lg uppercase text-center sm:text-left">
                {profileConfig.role}
              </p>
            </div>

            <p className="text-zinc-400 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg delay-100 animate-in text-center sm:text-left">
              {profileConfig.bio}
            </p>
            <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-0 delay-200 animate-in justify-center sm:justify-start">
              {profileConfig.social.github && (
                <SocialLink href={profileConfig.social.github} icon={Github} label="GitHub" />
              )}
              {profileConfig.social.x && (
                <SocialLink href={profileConfig.social.x} icon={Twitter} label="X" />
              )}
              {profileConfig.social.linkedin && (
                <SocialLink href={profileConfig.social.linkedin} icon={Linkedin} label="LinkedIn" />
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 lg:mb-0 delay-300 animate-in">
              <Button 
                className="w-full sm:flex-1 text-base h-12 sm:h-14 px-6 sm:px-8" 
                variant="primary"
                onClick={() => window.open(profileConfig.cvUrl, '_blank')}
              >
                Download CV
              </Button>
              <Button 
                className="w-full sm:flex-1 text-base h-12 sm:h-14 px-6 sm:px-8" 
                variant="secondary"
                onClick={() => window.location.href = `mailto:${profileConfig.email}`}
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="hidden lg:block w-64 lg:border-l lg:border-zinc-800 lg:pl-12">
            <h2 className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] mb-8">Experience</h2>
            <ExperienceTimeline />
          </div>
        </div>

        <div className="lg:hidden mt-10 pt-10 border-t border-zinc-800">
          <h2 className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] mb-8">Experience</h2>
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}
