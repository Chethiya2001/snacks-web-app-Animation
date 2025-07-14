import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";

import Cocktails from "./components/Snacks";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  

  return (
    <main>
      <NavBar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  )
}

export default App
