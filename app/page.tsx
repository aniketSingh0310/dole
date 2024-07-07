import Image from "next/image";
import { Hero } from "./components/shared/hero";
import Sec1 from "./components/shared/sec1";
import Sec2 from "./components/shared/sec2";
import Sec3 from "./components/shared/sec3";
import Sec4 from "./components/shared/sec4";
import Sec5 from "./components/shared/sec5";
import Sec6 from "./components/shared/sec6";

export default function Home() {
  return (
   <>
   <Hero/>
   <Sec1/>
   <Sec2/>
   <Sec3/>
   <Sec4/>
   <Sec5/>
   <Sec6/>
   </>
  );
}
