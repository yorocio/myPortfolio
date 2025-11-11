import { TbPointFilled } from "react-icons/tb";

export default function Skills() {
  return (
    <section id="skills" className="space-y-4">
  <h3 className="text-2xl font-semibold mb-2 text-[#eddde7]">Tecnologías</h3>

  <ul className="flex flex-wrap gap-6 text-[#dfc2d4]">
    <li className="flex items-center gap-1"> <TbPointFilled/>HTML</li>
    <li className="flex items-center gap-1"><TbPointFilled/>CSS</li>
    <li className="flex items-center gap-1"><TbPointFilled/>JavaScript</li>
    <li className="flex items-center gap-1"><TbPointFilled/>TypeScript</li>
    <li className="flex items-center gap-1"><TbPointFilled/>React</li>
    <li className="flex items-center gap-1"><TbPointFilled/>Next.js</li>
    <li className="flex items-center gap-1"><TbPointFilled/>Tailwind CSS</li>
    <li className="flex items-center gap-1"><TbPointFilled/>PostgreSQL</li>
    <li className="flex items-center gap-1"><TbPointFilled/>MongoDB</li>
    <li className="flex items-center gap-1"><TbPointFilled/>Git & GitHub</li>
    <li className="flex items-center gap-1"><TbPointFilled/>Jira · Trello</li>
    <li className="flex items-center gap-1"><TbPointFilled/>Agile / Scrum</li>
  </ul>
</section>

  );
}
