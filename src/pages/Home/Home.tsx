import { Hero } from "../../components/Hero/Hero";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { About } from "../../components/About/About";

export function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <About />
    </>
  );
}
