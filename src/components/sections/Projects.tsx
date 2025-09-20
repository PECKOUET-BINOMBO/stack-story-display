import { useEffect, useState } from "react";
import { ExternalLink, Github, Smartphone, Globe, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Actu Light Gabon",
    description: "Plateforme d'actualités moderne avec interface responsive et gestion de contenu dynamique.",
    category: "Web",
    icon: Globe,
    technologies: ["WordPress"],
    image: "/placeholder.svg",
    links: {
      live: "#",
      github: "#"
    }
  }
];

const categories = ["Tous", "Web", "Mobile", "Design"];

export function Projects() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Tous");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une sélection de mes réalisations les plus significatives, 
            alliant innovation technique et expérience utilisateur exceptionnelle.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeCategory === category 
                  ? "btn-hero shadow-hero" 
                  : "btn-glass hover:scale-105"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-project group border border-border/50 hover:border-primary/20"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${scrollY * 0.03}px)` 
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="relative">
                    <project.icon className="h-8 w-8 text-primary relative z-10" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}