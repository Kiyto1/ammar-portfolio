import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

export default App;