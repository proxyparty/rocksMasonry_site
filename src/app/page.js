import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/hero";
import Experience from "../../components/experience";
import LearnMore from "../../components/learnmore";
import ChooseUs from "../../components/chooseus";
import Estimate from "../../components/estimate";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <LearnMore />
      <ChooseUs />
      <Estimate />
    </>
  );
}
