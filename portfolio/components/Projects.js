import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h3 className="text-2xl font-semibold mb-2 text-[#eddde7]">Proyectos</h3>

      <div className="space-y-6 text-[#dfc2d4]">
        <div>
          <h4 className="text-xl font-medium">Huellas Unidas</h4>
          <p>
            Aplicación para encontrar mascotas perdidas mediante geolocalización. Desarrollada con
            React, Next.js y Tailwind CSS. Incluye filtrado de publicaciones y SSR para optimizar el
            rendimiento.
          </p>
          <p className="mt-1 text-sm">Stack: React, Next.js, Tailwind CSS</p>
        </div>

        <div>
          <h4 className="text-xl font-medium">Escuela de Vida Zen (en producción)</h4>
          <p>
            Sitio web para un estudio de terapias Shiatsu, diseñado desde cero con foco en la
            experiencia de usuario. Integra MongoDB y despliegue automatizado en Vercel.
          </p>
          <Link
            href="https://escuela-de-vida-zen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200"
          >
            Ver proyecto
          </Link>
          <p className="mt-1 text-sm">Stack: Next.js, Tailwind CSS, MongoDB</p>
        </div>

        <div className="text-[#dfc2d4]">
          <h4 className="text-xl font-medium">E-commerce de iPhone</h4>
          <p>
            Proyecto personal con autenticación de usuarios, panel de administración y dashboard
            dinámico. Actualmente en desarrollo de la interfaz.
          </p>
          <p className="mt-1 text-sm ">
            Stack: Next.js, Tailwind CSS, TypeORM, PostgreSQL
          </p>
        </div>
      </div>
    </section>
  );
}
