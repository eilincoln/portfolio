import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { projects } from "./data/projects";

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

        <section
          id="projetos"
          style={{
            padding: "3rem 0",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--accent-status)",
              fontSize: "0.85rem",
            }}
          >
            // CASOS DE ESTUDO & PRODUÇÃO
          </span>
          <h2
            style={{
              fontSize: "1.75rem",
              marginTop: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            Projetos Selecionados ({projects.length})
          </h2>
        </section>
      </main>
    </div>
  );
}

export default App;
