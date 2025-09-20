import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-primary/5 relative overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-32 right-32 w-80 h-80 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Restons en <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vous avez un projet en tête ? Une opportunité à discuter ? 
            N'hésitez pas à me contacter, je serai ravi d'échanger avec vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div 
            className="space-y-8"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <div className="glass rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-muted-foreground">(+221) 77 299 58 51</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">apeckouet@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p className="text-muted-foreground">Ouest Foire, Dakar, Sénégal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6">Réseaux sociaux</h3>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="btn-hero flex-1 hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://urlr.me/HJ85DF', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
                <Button 
                  size="lg" 
                  className="btn-glass flex-1 hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://urlr.me/uCngGx', '_blank')}
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8">Envoyez-moi un message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <Input placeholder="Votre nom" className="glass border-0" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="votre@email.com" className="glass border-0" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Sujet</label>
                <Input placeholder="Sujet de votre message" className="glass border-0" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Votre message..." 
                  rows={6}
                  className="glass border-0 resize-none"
                />
              </div>
              
              <Button type="submit" size="lg" className="btn-hero w-full">
                <Send className="mr-2 h-5 w-5" />
                Envoyer le message
              </Button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}