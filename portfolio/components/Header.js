import Link from "next/link";

export default function Header() {
  return (
    <section id='header' className="my-8 p-6">
      <h1 className="md:text-5xl text-4xl text-[#f5eef3]">
        Rocío Diaz Anriquez
      </h1>
      <h2 className="text-xl sm:text-2xl my-5 text-[#f5e8ff]">
        Desarrolladora Frontend · React | Next.js | Tailwind CSS
      </h2>
      <p className="max-w-xl text-[#ca9cb7] dark:text-gray-800">
        Construyo experiencias web modernas, accesibles y enfocadas en el usuario.
        Apasionada por el diseño limpio, la performance y las buenas prácticas.
      </p>

      <div className="flex gap-4 mt-4 flex-col text-[#dfaafd]">
        <Link href='#about'>Sobre mi</Link>
        <Link href='#experience'>Experiencia</Link>
        <Link href='#projects'>Proyectos</Link>
      </div>
    </section>
  );
}
