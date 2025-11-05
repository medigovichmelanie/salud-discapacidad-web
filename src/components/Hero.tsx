import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";
import { useCountUp } from "@/hooks/use-count-up";

const Hero = () => {
  const casosGanados = useCountUp(500, 2500);
  const exitoRate = useCountUp(98, 2500);
  const years = useCountUp(25, 2500);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Abogados especialistas en derecho a la salud y discapacidad en Mar del Plata - Amparos de salud y cobertura médica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="text-secondary font-semibold text-sm">Más de 25 años de experiencia</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Abogados en
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              {" "}
              Discapacidad y Derecho a la Salud{" "}
            </span>
            Mar del Plata
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Especialistas en amparos de salud, cobertura médica y pensiones por discapacidad. 25 años defendiendo tus derechos ante obras sociales, prepagas y PAMI en Mar del Plata. Obtenemos resultados concretos en tratamientos denegados, medicación y certificados de discapacidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Botón sin acción */}
            <Button variant="hero" size="lg" className="text-base cursor-default">
              Asesoramiento ahora
              <ArrowRight className="ml-2" />
            </Button>

            {/* Botón de WhatsApp */}
            <Button variant="hero-outline" size="lg" className="text-base" asChild>
              <a
                href="https://wa.me/5492234421528?text=Hola! Quisiera más información."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">{casosGanados}+</div>
              <div className="text-sm text-muted-foreground">Casos Resueltos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-1">{exitoRate}%</div>
              <div className="text-sm text-muted-foreground">Éxito</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">{years}+</div>
              <div className="text-sm text-muted-foreground">Años</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
