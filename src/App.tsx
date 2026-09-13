import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";

export function App() {
  return (
    <BrowserRouter>
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<ProjectsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
