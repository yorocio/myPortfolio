import Link from "next/link";
import { TiChevronRight } from "react-icons/ti";

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h3 className="text-2xl font-semibold mb-6 text-[#c7f89e] underline underline-offset-4">Proyectos</h3>

      <div className="space-y-6 text-[#e2fccb] text-justify">

        <div className="mt-7">
          <h4 className="text-xl font-medium flex items-center gap-2"><TiChevronRight />Escuela de Vida Zen (en producción)</h4>
          <p className="my-2 text-justify">
            Sitio web para un estudio de terapias Shiatsu, diseñado desde cero con foco en la
            experiencia de usuario.
          </p>
          <p className="mb-2">Implementa pasarela de pagos con Mercado Pago Checkout Pro, base de datos en MongoDB y despliegue automatizado en Vercel.</p>
          <Link
            href="https://escuela-de-vida-zen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Ver proyecto
          </Link>
          <p className="mt-1 text-sm">Stack: Next.js, Tailwind CSS, MongoDB</p>
        </div>

         <div>
          <h4 className="text-xl font-medium flex items-center gap-2"><TiChevronRight />Huellas Unidas</h4>
          <p className="my-2">
            Aplicación para encontrar mascotas perdidas mediante geolocalización. Desarrollada con
            React, Next.js y Tailwind CSS. Incluye filtrado de publicaciones y SSR para optimizar el
            rendimiento.
          </p>
          <Link
            href="https://huellasunidas.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Ver proyecto
          </Link>
          <p className="mt-1 text-sm">Stack: React, Next.js, Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}