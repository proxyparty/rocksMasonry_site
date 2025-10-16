import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Experience from "../../components/experience";
import LearnMore from "../../components/learnmore";
import ChooseUs from "../../components/chooseus";
import Estimate from "../../components/estimate";

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
