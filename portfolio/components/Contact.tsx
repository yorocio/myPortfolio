
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa"
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="space-y-4 mb-6">

      <div className="flex justify-center items-center gap-6 text-[#e2fccb] mt-10">
      
        <Link
          href="mailto:rocioanriquez23@gmail.com"
          className="hover:text-[#a2f165] transition-colors"
          aria-label="Correo"
        >
          <SiGmail className="w-6 h-6" />
        </Link>

        <Link
          href="https://github.com/yorocio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a2f165] transition-colors"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </Link>

        <Link
          href="https://linkedin.com/in/rocioanriquez"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a2f165] transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </Link>
      </div>


      <div className="flex justify-center items-center gap-2 text-[#e2fccb] mt-4">
        <FaMapMarkerAlt className="w-5 h-5" />
        <span>Córdoba, Argentina</span>
      </div>
          <p className="text-[#e2fccb] text-sm text-center">
        Siempre abierta a colaborar en proyectos que generen impacto y crecimiento.
      </p>
    </section>
  );
}
