import { About } from "@/components/About";
import { Chapters } from "@/components/Chapters";
import { FlagshipLHN } from "@/components/FlagshipLHN";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GitHubDashboard } from "@/components/GitHubDashboard";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Chapters />
        <FlagshipLHN />
        <GitHubDashboard />
        <About />
        <ProjectGrid />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
