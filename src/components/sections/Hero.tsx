import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import cv from "@/assets/PECKOUET-BINOMBO Paul Emile.pdf";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Animated Background with Parallax */}
      <div className="absolute inset-0">
        {/* Geometric shapes with parallax effect */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-br from-accent/20 to-primary/30 rounded-full blur-2xl animate-float" 
          style={{ 
            animationDelay: "2s",
            transform: `translateY(${scrollY * -0.1}px)` 
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/40 to-accent/30 rounded-full blur-lg animate-float" 
          style={{ 
            animationDelay: "4s",
            transform: `translateY(${scrollY * 0.15}px)` 
          }}
        ></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
      </div>

      <div 
        className="container mx-auto px-6 text-center relative z-10"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Photo Profile */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-hero">
                <div className="w-full h-full rounded-full bg-background dark:bg-card flex items-center justify-center overflow-hidden">
                  {/* Placeholder pour la photo - remplacez par votre vraie photo */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-4xl font-bold text-primary">
                    PE
                  </div>
                </div>
              </div>
              {/* Effet de halo animé */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 fade-in">
            <span className="text-gradient-hero">Paul Emile</span>
            <br />
            <span className="text-foreground">PECKOUET-BINOMBO</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground fade-in fade-in-delay-1">
            Développeur <span className="text-gradient font-semibold">Fullstack Junior</span>
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto text-muted-foreground fade-in fade-in-delay-2">
            Passionné par la création d'expériences numériques intuitives et adaptées aux utilisateurs. 
            Je mets ma créativité et ma capacité d'adaptation au service de projets innovants.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in fade-in-delay-3">
            <a
              href={cv}
              
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="btn-hero text-lg px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Télécharger CV
              </Button>
            </a>
            <Button 
              variant="outline" 
              className="btn-glass text-lg px-8 py-3"
              onClick={scrollToAbout}
            >
              Découvrir mon parcours
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="h-8 w-8 text-primary cursor-pointer hover:text-accent transition-colors" 
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
}