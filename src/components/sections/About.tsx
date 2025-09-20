import { Code2, Database, Palette, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "JavaSript, React.js, TypeScript, HTML/CSS, TailwindCSS, Bootstrap",
    color: "text-blue-500"
  },
  {
    icon: Database,
    title: "Backend Development", 
    description: "Node.js, Express, Laravel, PHP, MySQL, PostgreSQL",
    color: "text-green-500"
  },
  {
    icon: Palette,
    title: "Outils & CMS",
    description: "Figma, Canva, WordPress, Git",
    color: "text-purple-500"
  },
  {
    icon: Users,
    title: "Soft Skills",
    description: "Travail en équipe, Autonomie, Adaptabilité, Communication",
    color: "text-orange-500"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            À <span className="text-gradient">propos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Développeur fullstack junior avec une passion pour l'innovation et l'excellence technique. 
            Mon parcours me permet d'allier créativité et rigueur technique pour créer des solutions numériques impactantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="card-glass text-center group hover:scale-105 transition-all duration-500"
            >
              <div className="mb-6">
                <skill.icon className={`h-12 w-12 mx-auto ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}