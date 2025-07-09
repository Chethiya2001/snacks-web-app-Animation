import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  

  return (
    <main>
      <NavBar/>
      <Hero/>
      <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App
