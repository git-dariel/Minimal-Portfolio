import React from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <div className="bg-white text-stone-900 min-h-screen font-inter max-w-5xl w-11/12 mx-auto">
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </>
  );
}
