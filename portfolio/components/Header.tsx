import { IoArrowForward } from "react-icons/io5";

interface HeaderProps {
  onOpenSection: (section: string) => void;
}

export default function Header({ onOpenSection }: HeaderProps) {
  return (
    <section id='header' className="my-8 p-6">
      <h1 className="md:text-5xl text-4xl text-[#f5eef3]">
        Rocío Diaz Anriquez
      </h1>
      <h2 className="text-xl sm:text-2xl my-5 text-[#f5e8ff]">
        Desarrolladora Frontend · React | Next.js | Tailwind CSS
      </h2>
      <p className="max-w-xl text-[#ca9cb7]">
        Construyo experiencias web modernas, accesibles y enfocadas en el usuario.
      </p>

      <div className="flex gap-4 mt-4 flex-col text-[#dfaafd]">
        <button
          onClick={() => onOpenSection("about")}
          className="flex items-center gap-2 hover:text-[#f5eef3] transition"
        >
          <IoArrowForward /> Sobre mí
        </button>

        <button
          onClick={() => onOpenSection("experience")}
          className="flex items-center gap-2 hover:text-[#f5eef3] transition"
        >
          <IoArrowForward /> Experiencia
        </button>

        <button
          onClick={() => onOpenSection("projects")}
          className="flex items-center gap-2 hover:text-[#f5eef3] transition"
        >
          <IoArrowForward /> Proyectos
        </button>

         <button
          onClick={() => onOpenSection("education")}
          className="flex items-center gap-2 hover:text-[#f5eef3] transition"
        >
          <IoArrowForward /> Formación
        </button>

         <button
          onClick={() => onOpenSection("skills")}
          className="flex items-center gap-2 hover:text-[#f5eef3] transition"
        >
          <IoArrowForward /> Tecnologias
        </button>
      </div>
    </section>
  );
}
