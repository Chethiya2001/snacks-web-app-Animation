import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";

import Cocktails from "./components/Snacks";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  

  return (
    <main>
      <NavBar/>
      <Hero/>
      <Cocktails/>
    </main>
  )
}

export default App
