import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MovingText from "./components/MovingText/MovingText";
import About from "./components/About/About";
import Playground from "./components/Playground/Playground";
import Projects from "./components/Projects/Projects";
import Products from "./components/Products/Products";
import ReadyToStart from "./components/ReadyToStart/ReadyToStart";
import Footer from "./components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scroll = new LocomotiveScroll();

  return (
    <div data-scroll-container>
      <Header />
      <main>
        <Hero />
        <MovingText />
        <About />
        <Playground />
        <Projects />
        <Products />
        <ReadyToStart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
