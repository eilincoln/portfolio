import { Navbar } from "./components/Navbar/Navbar";
import { projects } from "./data/projects";

export function App() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />

      <main
        style={{
          padding: "3rem 1.5rem",
          maxWidth: "1120px",
          width: "100%",
          margin: "0 auto",
          flex: 1,
        }}
      >
        <section id="projetos" style={{ marginTop: "1rem" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--accent-status)",
              fontSize: "0.85rem",
            }}
          >
            // PORTFÓLIO & CASES
          </span>
          <h1
            style={{
              fontSize: "2rem",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            Lincoln Berto
          </h1>
          <p style={{ color: "var(--text-muted)" }}>
            Base tipada carregada com {projects.length} projetos de histórico.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
