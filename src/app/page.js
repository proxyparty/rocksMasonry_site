"use client";

// import PhotoDisplay from "./photo/[photoId]/PhotoDisplay";
// import { PhotoData } from "./photo/[photoId]/page";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/hero";
import Experience from "../../components/experience";
import LearnMore from "../../components/learnmore";
import ChooseUs from "../../components/chooseus";
import Estimate from "../../components/estimate";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <LearnMore />
      <ChooseUs />
      <Estimate />
      <Footer />
    </>
  );
}
