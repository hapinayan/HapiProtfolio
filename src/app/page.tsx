import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Process from "@/components/Process";
import Education from "@/components/Education";
import FiverrCta from "@/components/FiverrCta";
import Connect from "@/components/Connect";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Background cyber grid & glow effects */}
      <BackgroundEffects />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <WhyWorkWithMe />
        <Process />
        <Education />
        <FiverrCta />
        <Connect />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
