import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";

import Cocktails from "./components/Snacks";
import About from "./components/About";
import Art from "./components/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  

  return (
    <main>
      <NavBar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
    </main>
  )
}

export default App
