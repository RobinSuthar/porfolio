"use client";

import { BackgroundBeams } from "../components/ui/background-beams";

import { TimelineDemo } from "./TimelineDemo";

export function BackgroundBeamsDemo() {
  return (
    <div>
      <div className="flex justify-center mt-3"></div>
      <div className="h-[40rem] mt-16 md:mt-4  w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Hello, I'm Robin
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome. I'm a software developer student at SAIT, passionate about
            building innovative and scalable solutions. This website showcases
            my projects, tech stack, and certifications. Use dark mode fore
            better experience.
          </p>
        </div>
        <BackgroundBeams />
      </div>
      <TimelineDemo />
    </div>
  );
}
