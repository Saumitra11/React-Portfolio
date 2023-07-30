import "./App.css";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
function App() {
  return (
  <div>
    <Navbar />
    <Bot />
    <Hero />
    <About />
    <Skills />
    <Project />
    <Contact />
    <Footer />
  </div>
  );
}

export default App;
