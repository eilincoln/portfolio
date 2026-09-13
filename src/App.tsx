import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";

export function App() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />

      <main
        style={{
          maxWidth: "1040px",
          width: "100%",
          margin: "0 auto",
          padding: "0 1.5rem",
          flex: 1,
        }}
      >
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
