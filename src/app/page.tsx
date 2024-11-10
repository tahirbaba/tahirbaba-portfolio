"use client";
// File: page.tsx


import { useEffect } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";


export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  }, [])
  return (
    <main className="bg-gray-100 text-white-900">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
      {/* <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer /> */}
    </main>
  );
}







// import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       <Projects />
//     </main>
//   );
// }
