import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Objectives } from "@/components/Objectives";
import { Presentation } from "@/components/Presentation";
import { Projects } from "@/components/Projects";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ScrollTopButton } from "@/components/ScrollTopButton";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollTopButton />

      <div className="container-header-principal">
        <Hero />
        <Presentation />
        <Timeline />
        <Projects />
        <Skills />
        <Objectives />
        <Contact />
        <SiteFooter />
      </div>

      <RevealOnScroll />
    </>
  );
}
