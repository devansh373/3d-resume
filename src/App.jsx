import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
