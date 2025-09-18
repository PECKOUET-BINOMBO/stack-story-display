import { 
  SiReact, 
  SiNodedotjs, 
  SiLaravel, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiMysql, 
  SiPostgresql, 
  SiPrisma, 
  SiGit, 
  SiWordpress, 
  SiFigma 
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { icon: SiPrisma, name: "Prisma", color: "#2D3748" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiWordpress, name: "WordPress", color: "#21759B" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
];

export function TechMarquee() {
  return (
    <div className="py-12 overflow-hidden">
      <div className="relative">
        <div className="flex">
          <div className="marquee flex gap-8 pr-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 glass rounded-full whitespace-nowrap"
              >
                <tech.icon 
                  className="w-6 h-6"
                  style={{ color: tech.color }}
                />
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="marquee flex gap-8 pr-8">
            {technologies.map((tech, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center gap-3 px-6 py-3 glass rounded-full whitespace-nowrap"
              >
                <tech.icon 
                  className="w-6 h-6"
                  style={{ color: tech.color }}
                />
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}