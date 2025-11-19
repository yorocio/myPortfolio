import Link from "next/link";
import { TiChevronRight } from "react-icons/ti";

export default function Experience() {
  return (
    <section id="experience" className="space-y-6" >
      <h3 className="text-2xl font-semibold mb-6 text-[#c7f89e] underline underline-offset-4">Experiencia profesional</h3>

      <div>
        <h4 className="text-xl font-medium  text-[#e2fccb] flex items-center gap-2"><TiChevronRight />Experientia Labs LLC — Full Stack Developer Trainee</h4>
        <p className=" text-[#e2fccb] mt-3">Mar 2023 - Actualidad</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-[#e2fccb] text-justify">
          <li className="my-2">Soporte al equipo en la migración de sitios legacy a ReactJS, mejorando mantenibilidad y escalabilidad.</li>
          <li className="my-2">Colaboración en pruebas funcionales y validaciones visuales entre versiones.</li>
          <li className="my-2">Participación en la implementación de despliegues en Netlify, optimizando tiempos de carga.</li>
          <li className="my-2">
            Desarrollo de un sitio completo con Next.js, Tailwind CSS y MongoDB: {" "}
            <Link
              href="https://escuela-de-vida-zen.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white inline-block"
            >Escuela de Vida Zen
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-7">
        <h4 className="text-xl font-medium text-[#e2fccb] flex items-center gap-2"><TiChevronRight />Bootcamp Henry — Teaching Assistant (Voluntariado)</h4>
        <p className="text-[#e2fccb] mt-3">Sep 2024 - Nov 2024</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-[#e2fccb] text-justify">
          <li className="my-2">Coordinación de equipos de estudiantes y acompañamiento técnico.</li>
          <li className="my-2">Soporte en desafíos y fomento del aprendizaje colaborativo.</li>
          <li className="my-2">Propuesta de mejoras para optimizar procesos académicos.</li>
        </ul>
      </div>
    </section>
  );
}
