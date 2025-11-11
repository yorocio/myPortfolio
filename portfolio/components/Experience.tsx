import Link from "next/link";
import { TiChevronRight } from "react-icons/ti";

export default function Experience() {
  return (
    <section id="experience" className="space-y-6" >
      <h3 className="text-2xl font-semibold mb-6 text-[#eddde7]">Experiencia profesional</h3>

      <div>
        <h4 className="text-xl font-medium  text-[#dfc2d4] flex items-center gap-2"><TiChevronRight />Experientia Labs LLC — Full Stack Developer Trainee</h4>
        <p className=" text-[#dfc2d4] mt-3">Mar 2023 - Actualidad</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-[#dfc2d4]">
          <li className="my-2">Migración de sitios legacy a ReactJS, mejorando mantenibilidad y escalabilidad.</li>
          <li className="my-2">Pruebas funcionales y validaciones visuales entre versiones.</li>
          <li className="my-2">Implementación de despliegues en Netlify, optimizando tiempos de carga.</li>
          <li className="my-2">
            Desarrollo de un sitio completo con Next.js, Tailwind CSS y MongoDB.
            <Link
              href="https://escuela-de-vida-zen.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200"
            > Escuela de Vida Zen
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-7">
        <h4 className="text-xl font-medium text-[#dfc2d4] flex items-center gap-2"><TiChevronRight />Bootcamp Henry — Teaching Assistant (Voluntariado)</h4>
        <p className="text-[#dfc2d4] mt-3">Sep 2024 - Nov 2024</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-[#dfc2d4]">
          <li className="my-2">Coordinación de equipos de estudiantes y acompañamiento técnico.</li>
          <li className="my-2">Soporte en desafíos y fomento del aprendizaje colaborativo.</li>
          <li className="my-2">Propuesta de mejoras para optimizar procesos académicos.</li>
        </ul>
      </div>
    </section>
  );
}
