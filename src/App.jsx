import "./App.css";
import About from "./components/about";
import { BatmanLoader } from "./components/BatmanLoader";
import Contact from "./components/contact";
import { FloatingDoodles } from "./components/floatingDoodles";
import HeaderComponent from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { ThemeToggle } from "./components/themeButton";
import { ThemeProvider } from "./hooks/useTheme";

function App() {
  return (
    <>
      <ThemeProvider>
        <BatmanLoader />
        <div className="app-container">
          <FloatingDoodles />
          <HeaderComponent />
          <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
