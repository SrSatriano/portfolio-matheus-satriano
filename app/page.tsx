import { About } from "@/components/About";
import { Chapters } from "@/components/Chapters";
import { FlagshipLHN } from "@/components/FlagshipLHN";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GitHubDashboard } from "@/components/GitHubDashboard";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ReadmeDossier } from "@/components/ReadmeDossier";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Chapters />
        <FlagshipLHN />
        <About />
        <ReadmeDossier />
        <GitHubDashboard />
        <ProjectGrid />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
