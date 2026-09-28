import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Navbar />

      <Home />
      <About />

      <Skills />
      <Work/>
      <Contact />
     < Footer />

    </main>
  );
}