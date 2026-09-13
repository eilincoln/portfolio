import { projects } from "./data/projects";

export function App() {
  return (
    <div
      style={{ padding: "3rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}
    >
      <header style={{ marginBottom: "2rem" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--accent-status)",
            fontSize: "0.85rem",
          }}
        >
          // SISTEMA OPERACIONAL & ATIVO
        </span>
        <h1 style={{ fontSize: "2rem", marginTop: "0.5rem" }}>Lincoln Berto</h1>
        <p style={{ color: "var(--text-muted)" }}>
          {projects.length} projetos mapeados no schema tipado.
        </p>
      </header>
    </div>
  );
}

export default App;
