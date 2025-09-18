import { Code2, Database, Palette, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React.js, TypeScript, HTML/CSS, TailwindCSS, Bootstrap",
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
    title: "Design & UX",
    description: "Figma, Canva, WordPress, Design System, UI/UX",
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

        <div className="mt-20 glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Mon Parcours</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-primary">Orange Digital Center</h4>
                  <p className="text-muted-foreground">Développement Web/Mobile • 2025</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-xl font-semibold text-accent">Bakeli School of Technology</h4>
                  <p className="text-muted-foreground">Programmation Informatique • 2021-2023</p>
                </div>
                <div className="border-l-4 border-muted-foreground pl-6">
                  <h4 className="text-xl font-semibold">BAC Technique ACC</h4>
                  <p className="text-muted-foreground">Action Communication Commerciale • 2018</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Expériences</h3>
              <div className="space-y-6">
                <div className="card-glass">
                  <h4 className="text-lg font-semibold text-primary">Actu Light Gabon</h4>
                  <p className="text-sm text-accent">Freelance • Jan-Mar 2024</p>
                  <p className="text-muted-foreground mt-2">Développement web complet, de la conception à la mise en ligne</p>
                </div>
                <div className="card-glass">
                  <h4 className="text-lg font-semibold text-primary">IHEJGS</h4>
                  <p className="text-sm text-accent">Freelance • Août-Sep 2023</p>
                  <p className="text-muted-foreground mt-2">Conception, développement, tests et déploiement</p>
                </div>
                <div className="card-glass">
                  <h4 className="text-lg font-semibold text-primary">Volkeno</h4>
                  <p className="text-sm text-accent">Stage • Oct-Déc 2022</p>
                  <p className="text-muted-foreground mt-2">Intégration web front-end et back-end</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}