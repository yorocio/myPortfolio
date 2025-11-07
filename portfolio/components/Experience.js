import Link from "next/link";

export default function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <h3 className="text-2xl font-semibold mb-2 text-[#eddde7]">Experiencia profesional</h3>

      <div>
        <h4 className="text-xl font-medium  text-[#dfc2d4]">Experientia Labs LLC — Full Stack Developer Trainee</h4>
        <p className=" text-[#dfc2d4]">Mar 2023 – Actualidad</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-[#dfc2d4]">
          <li>Migración de sitios legacy a ReactJS, mejorando mantenibilidad y escalabilidad.</li>
          <li>Pruebas funcionales y validaciones visuales entre versiones.</li>
          <li>Implementación de despliegues en Netlify, optimizando tiempos de carga.</li>
          <li>
            Desarrollo de un sitio completo con Next.js, Tailwind CSS y MongoDB:
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

      <div>
        <h4 className="text-xl font-medium text-[#dfc2d4]">Bootcamp Henry — Teaching Assistant (Voluntariado)</h4>
        <p className="text-[#dfc2d4]">Sep 2024 – Nov 2024</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-[#dfc2d4]">
          <li>Coordinación de equipos de estudiantes y acompañamiento técnico.</li>
          <li>Soporte en desafíos y fomento del aprendizaje colaborativo.</li>
          <li>Propuesta de mejoras para optimizar procesos académicos.</li>
        </ul>
      </div>
    </section>
  );
}
