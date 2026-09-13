import { projects } from "./data/projects";

export function App() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Lincoln Berto | Portfólio</h1>
      <p style={{ color: "var(--text-muted)" }}>
        Transição de arquitetura: {projects.length} projetos carregados com
        tipagem estática.
      </p>
    </main>
  );
}

export default App;
