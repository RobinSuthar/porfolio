import { BackgroundLinesDemo } from "@/democomponents/BackgrounLinesDemo";
import {
  EvervaultCardDemo,
  EvervaultCardDemo10,
  EvervaultCardDemo11,
  EvervaultCardDemo12,
  EvervaultCardDemo2,
  EvervaultCardDemo3,
  EvervaultCardDemo4,
  EvervaultCardDemo5,
  EvervaultCardDemo6,
  EvervaultCardDemo7,
  EvervaultCardDemo8,
  EvervaultCardDemo9,
} from "@/democomponents/EvervaultCard";

const TeachStack = () => {
  return (
    <div>
      <BackgroundLinesDemo />

      <div className="grid grid-cols-1 p-12  md:grid-cols-4 gap-4">
        <EvervaultCardDemo />
        <EvervaultCardDemo2 />
        <EvervaultCardDemo4 />
        <EvervaultCardDemo3 />
        <EvervaultCardDemo5 />
        <EvervaultCardDemo6 />
        <EvervaultCardDemo7 />
        <EvervaultCardDemo8 />
        <EvervaultCardDemo9 />
        <EvervaultCardDemo10 />
        <EvervaultCardDemo11 />
        <EvervaultCardDemo12 />
      </div>
    </div>
  );
};

export default TeachStack;
