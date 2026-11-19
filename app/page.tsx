import { About } from "@/components/About";
import { Chapters } from "@/components/Chapters";
import { Contact } from "@/components/Contact";
import { CortaLive } from "@/components/CortaLive";
import { FlagshipLHN } from "@/components/FlagshipLHN";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Numbers } from "@/components/Numbers";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Pular para os projetos
      </a>
      <Nav />
      <main>
        <Hero />
        <CortaLive />
        <FlagshipLHN />
        <ProjectExplorer />
        <Numbers />
        <Chapters />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
