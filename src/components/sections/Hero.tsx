import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 parallax">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
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
            <Button className="btn-hero text-lg px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Télécharger CV
            </Button>
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
            className="h-8 w-8 text-primary cursor-pointer" 
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
}