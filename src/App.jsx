import React from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}
