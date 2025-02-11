import { Spotlight } from "../components/ui/spotlight";
import { ThreeDCardDemo, ThreeDCardDemo2 } from "./ThreeDCardDemo";

export function SpotlightPreview() {
  return (
    <div>
      {" "}
      <div className="h-[20rem] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Welcome <br /> These are my Certifcations.
          </h1>
          <p className="mt-4 font-normal text-base  max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row justify-center md:ml-0 ml-4 flex-col md:justify-evenly">
        <ThreeDCardDemo />
        <ThreeDCardDemo2 />
      </div>
    </div>
  );
}
