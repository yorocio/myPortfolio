import Header from "../components/Header"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className="px-6 grid grid-cols-1 md:grid-cols-2 md:gap-6">
      <div className="md:sticky md:top-0 md:h-screen">
      <Header />
      </div>
      <div className="flex flex-col gap-6 overflow-y-auto my-8 p-6">
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      </div>
    </div>
  );
}
