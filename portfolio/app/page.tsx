'use client';
import { useState } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
/* import Skills from "../components/Skills"; */
import Education from "../components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const closeModal = () => setActiveSection(null);

  return (
    <div className="lg:px-24 px-3 md:px-10 grid grid-cols-1 md:grid-cols-2 md:gap-6">
      {/* Columna izquierda */}
      <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-between">
        <Header onOpenSection={setActiveSection} />
        <Contact />
      </div>

      {/* Columna derecha (contenido visible siempre) */}
      <div className="flex flex-col gap-8 overflow-y-auto my-8 p-6">
        <About />
        <Experience />
        <Projects />
        <Education />
      {/*   <Skills /> */}
      </div>

      {/* Modal (aparece solo cuando se hace clic en Header) */}
      {activeSection && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/5 flex justify-center items-center z-50">
          <div className="bg-[#1c1c1c] p-8 rounded-2xl max-w-3xl w-full relative overflow-y-auto max-h-[90vh] shadow-lg border border-[#c7f89e]/30">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#c7f89e] hover:text-white text-xl"
            >
              ✕
            </button>

            {activeSection === "about" && <About />}
            {activeSection === "experience" && <Experience />}
            {activeSection === "projects" && <Projects />}
            {activeSection === "education" && <Education />}
         {/*    {activeSection === "skills" && <Skills />} */}
          </div>
        </div>
      )}
    </div>
  );
}
